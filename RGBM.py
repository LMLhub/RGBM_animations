#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Sep 10 17:12:16 2019
Basic code for reallocating geometric Brownian motion
@author: Ole Peters
"""
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

#Parameters:
N=100
T=100
dt=.1
mu=0.08
sigma=0.18
tau=-.05
#Derived parameters:
time_steps=(int(T/dt))
sdt=np.sqrt(dt)

#Initially everyone has wealth 1
x = np.zeros((time_steps, N)) 
x[0][:]=1

#Generate noise array 
xi=np.random.normal(loc=0, scale=1, size=(time_steps,N))

#Generate wealth trajectories
for t in range(1,time_steps):
    x[t]=x[t-1]*(1+mu*dt+sigma*xi[t]*sdt)-tau*(x[t-1]-np.mean(x[t-1]))*dt

#Save RGBM data
price=pd.DataFrame(x)
price.to_pickle("price-05.pkl")

#plot trajectories
s=np.arange(0,(t+1))*dt
plt.semilogy(s,x)