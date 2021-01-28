n, m = [int(input()) for _ in range(2)]

if n > 10:
    print('No')
    exit()

is_mach = False


for x1 in range(-n, n + 1):
    for y1 in range(-n, n + 1):
        for x2 in range(x1 + 1, n + 1):
            for y2 in range(y1 + 1, n + 1):
                    area = (x2 - x1) * (y2 - y1)
                    if area >= m:
                        print(f'({x1}, {y1}) ({x2}, {y2}) -> {area}')
                        is_mach = True

if not is_mach:
    print('No')





'''
1
2
----
2
17
#No
'''
