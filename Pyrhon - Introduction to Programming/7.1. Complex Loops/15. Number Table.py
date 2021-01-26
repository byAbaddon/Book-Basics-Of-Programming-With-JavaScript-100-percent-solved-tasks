n = int(input())
result = ''

for i in range(1, n + 1):
    for j in range(n):
        s = i + j
        if s > n:
          s = 2 * n - s

        result += str(s) + ' '

    print(result)
    result = ''

