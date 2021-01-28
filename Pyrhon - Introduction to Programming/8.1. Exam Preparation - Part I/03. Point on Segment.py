left, right, point = [int(input()) for _ in range(3)]

min_p = left if left < right else right
max_p = left if left > right else right
if min_p <= point <= max_p:
    print('in')
else:
    print('out')


if abs(left - point) < abs(right - point):
    print(abs(left - point))
else:
    print(abs(right - point))


'''
10
5
7
#in
#2
'''

