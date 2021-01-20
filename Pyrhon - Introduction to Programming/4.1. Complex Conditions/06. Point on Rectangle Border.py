x1, y1, x2, y2, x, y = [float(input()) for _ in range(6)]

findX = (x == x1 or x == x2) and (y >= y1) and (y <= y2)
findY = (y == y1 or y == y2) and (x >= x1) and (x <= x2)

print('Border' if findX or findY else 'Inside / Outside')


'''
2
-3
12
3
12
-1
#Border 
'''
