start, end, stop_number = [int(input()) for _ in range(3)]

for i in range(end ,start - 1, -1):
    if i % 2 == 0 and i % 3 == 0:
        if i == stop_number:
            break
        print(i, end= ' ')

'''
1
30
15
#30 24 18 12 6
'''


