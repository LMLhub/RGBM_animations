// Re-allocating GBM wealth distribution model

const ndarray = require('ndarray');
const ops = require('ndarray-ops');
const Normal = require('./box-muller');

function generateWealthTrajectories(N, T, dt, mu, sigma, tau) {
  N = typeof N !== 'undefined' ? N : 100;
  T = typeof T !== 'undefined' ? T : 100;
  dt = typeof dt !== 'undefined' ? dt : 0.1;
  mu = typeof mu !== 'undefined' ? mu : 0.08;
  sigma = typeof sigma !== 'undefined' ? sigma : 0.18;
  tau = typeof tau !== 'undefined' ? tau : 0.01;

  const timeSteps = Math.floor(T / dt);
  const sdt = Math.sqrt(dt);

  var wealthTrajectories = ndarray(new Float64Array(timeSteps * N), [timeSteps, N]);

  // Initially everyone has wealth 1
  ops.assigns(wealthTrajectories, 1.0);

  // Generate noise array
  var noise = Normal([timeSteps, N]);

  // Generate wealth trajectories
  var buffer = ndarray(new Float64Array(N));
  for (var j = 1; j < timeSteps; j++) {
    var prevRow = wealthTrajectories.pick(j - 1, null);
    var currentRow = wealthTrajectories.pick(j, null);

    var noise_row = noise.pick(j, null);

    ops.assign(currentRow, prevRow);
    ops.mulseq(currentRow, mu * dt);
    ops.assign(buffer, prevRow);
    ops.mulseq(buffer, sigma * sdt);
    ops.muleq(buffer, noise_row);
    ops.addeq(currentRow, buffer);
    ops.addeq(currentRow, prevRow);
    ops.assign(buffer, prevRow);
    ops.addseq(buffer, -ops.sum(prevRow) / prevRow.size);
    ops.mulseq(buffer, -tau * dt);
    ops.addeq(currentRow, buffer);
  }

  return wealthTrajectories;
}

module.exports = generateWealthTrajectories;
