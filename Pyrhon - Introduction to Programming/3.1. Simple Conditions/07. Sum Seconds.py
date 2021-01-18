from datetime import datetime, timedelta

all_min_sum = sum([int(input()) for _ in range(3)])
time = datetime(2222, 11, 11, 00, 00, 00)
delta = timedelta(seconds = all_min_sum)
print(str(delta)[slice(3, 10)])





'''
Wrong condition
This working...
35
45
45
#2:05
'''

