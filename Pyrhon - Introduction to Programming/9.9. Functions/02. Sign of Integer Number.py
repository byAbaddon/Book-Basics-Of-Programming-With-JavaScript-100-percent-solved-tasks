def numbers(n):
    if n > 0:
        return f'The number {n} is positive.'
    elif n < 0:
        return  f'The number {n} is negative.'
    else:
        return 'The number 0 is zero.'


print(numbers(int(input())))

