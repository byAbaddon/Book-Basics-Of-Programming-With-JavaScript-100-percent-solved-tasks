h, x, y = [float(input()) for _ in range(3)]

if 0 < x < 3 * h and 0 < y < h or h < x < 2 * h and 0 < y < 4 * h:
    print('inside')
elif x == 0 and 0 <= y <= h or \
        x == 3 * h and 0 <= y <= h or \
        y == 0 and 0 <= x <= 3 * h or \
        y == h and 0 <= x <= 3 * h or \
        x == h and 0 <= y <= 4 * h or \
        x == 2 * h and 0 <= y <= 4 * h or \
        y == 0 and h <= x <= 2 * h or \
        y == 4 * h and h <= x <= 2 * h:
    print('border')
else:
    print('outside')


'''
2
3
10
#outside
'''
