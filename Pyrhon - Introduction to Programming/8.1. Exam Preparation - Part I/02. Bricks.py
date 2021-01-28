from math import ceil

bri, workers, car = [int(input()) for _ in range(3)]
curs = bri / workers
print(ceil(curs / car))



'''
120
2
30
#2
'''
