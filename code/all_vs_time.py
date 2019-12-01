#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Nov 29 17:20:03 2019

@author: Ole Peters
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

tau=-0.05
wealth=pd.read_pickle("./../data/wealth_"+str(tau)+".pkl")

#plot trajectories
fig = plt.figure()
fig.suptitle(r'reallocation rate $\tau$='+str(tau)+" per year")
s=np.arange(0,(t+1))*dt
plt.semilogy(s,wealth)
plt.xlabel('time (years)')
plt.ylabel('RGBM wealth')
plt.legend(loc='upper right')
plt.show()
fig.savefig('./../figures/trajectories/trajectories_'+str(tau)+'.jpg')  
