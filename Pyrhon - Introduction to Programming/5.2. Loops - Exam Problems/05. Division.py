loop = int(input())
numbers_list = [int(input()) for _ in range(loop)]
[print(f'{len([x for x in numbers_list if x % i == 0]) / loop * 100:.2f}%') for i in range(2,5)]


'''
1
12
# 3 x 100.00%
'''
