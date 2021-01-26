fib = int(input())
f1, f2 = 1, 1

for i in range(fib):
    f1 += f2
    f1, f2 = f2, f1

print(f1)
