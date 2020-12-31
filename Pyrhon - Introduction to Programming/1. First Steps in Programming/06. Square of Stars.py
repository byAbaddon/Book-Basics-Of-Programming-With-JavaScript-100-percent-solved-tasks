n = int(input())

print('*' * n)
[print(f'*{" " * (n - 2)}*') for x in range(n-2)]
print('*' * n)



