def nth_digit(num, position):
    return str(num)[::-1][position -1]


print(nth_digit(int(input()), int(input())))
