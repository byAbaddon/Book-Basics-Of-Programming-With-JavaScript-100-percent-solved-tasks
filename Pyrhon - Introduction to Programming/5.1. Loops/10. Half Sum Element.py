sorted_num = sorted([int(input()) for _ in range(int(input()))])
big_num = sorted_num.pop()
sum_all_num = sum(sorted_num)
print(f'Yes\nSum = {big_num}' if sum_all_num == big_num else f'No\nDiff = {abs(sum_all_num - big_num)}')


'''
3
5
5
1
'''
