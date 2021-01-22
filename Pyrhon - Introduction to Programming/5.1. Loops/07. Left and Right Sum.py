lst = [int(input()) for _ in range(int(input()) * 2)]
left_sum = sum(lst[0:len(lst) // 2])
right_sum = sum(lst[len(lst) // 2:])

print(f'Yes, sum = {left_sum}' if left_sum == right_sum else f'No, diff = {abs(left_sum - right_sum)}')

'''
2
10
90
60
40
'''
