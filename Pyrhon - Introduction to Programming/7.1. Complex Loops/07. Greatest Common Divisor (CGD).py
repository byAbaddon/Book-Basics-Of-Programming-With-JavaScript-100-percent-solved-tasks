a, b = [int(input()) for _ in range(2)]

while b != 0:
    divisor = b
    b = a % b
    a = divisor

print(a)


