from math import trunc

width, leng =float(input()), float(input())
rows = trunc(width * 100 / 120)
desk = trunc(((leng * 100) - 100) / 70)
all_place = rows * desk - 3
print(all_place)

'''
15
8.9
#129
'''
