#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Nov 27 11:12:16 2019
Basic code for animating RGBM data
@author: Ole Peters
"""
import pandas as pd
from matplotlib import pyplot as plt
#from celluloid import Camera
#from datetime import datetime

STEP_SIZE=10
#fig = plt.figure()
#camera = Camera(fig)

price=pd.read_pickle("price-05.pkl")

for i in range(10):
    i_day=i*STEP_SIZE
    fig = plt.figure()
    plt.ylim((0,1.2*max(price.iloc[i_day])))
    plt.bar(range(1,101),price.iloc[i_day],color='k',label='year '+str(int(i_day/10)+1))
    plt.xlabel('individual')
    plt.ylabel('RGBM wealth')
    plt.legend(loc='upper right')
    plt.show()
    frame_name='take_all_'+str(i).zfill(4)+'.pdf'
    fig.savefig('./animation_pics/-05/'+frame_name)  
#    camera.snap()
#   plt.close(fig)
#animation = camera.animate()
#animation.save('celluloid_minimal.gif', writer = 'imagemagick')