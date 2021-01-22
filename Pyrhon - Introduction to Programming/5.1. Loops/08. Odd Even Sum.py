lst = [int(input())  for _ in range(int(input()))]
odd_sum = sum(lst[::2])
even_sum = sum(lst[1::2])

print(f'Yes\nSum = {even_sum}' if even_sum == odd_sum else f'No\nDiff = {abs(even_sum - odd_sum)}')


'''
4
10
50
60
20
#yes
'''
