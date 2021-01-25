n = int(input())
#top
for i in range(n):
     print(f"{'-' * (3 * n)}*{'-' * i}*{'-' * ( 2 * n - 2 - i)}")
#middle
for i in range(n // 2):
    print(f"{'*' * (n * 3)}*{'-' * (n - 1)}*{'-' * (n - 1)}")
#bottom
for i in range(n // 2):
    if i == (n // 2 - 1):
        print(f"{'-' * (3 * n - i)}*{'*' * ( n - 1 + (i * 2))}*{'-' * (n - 1 - i)}")
        break
    else:
        print(f"{'-' * (n * 3 - i)}*{'-' * (n - 1 + i + i)}*{'-' * (n - 1 - i)}")

