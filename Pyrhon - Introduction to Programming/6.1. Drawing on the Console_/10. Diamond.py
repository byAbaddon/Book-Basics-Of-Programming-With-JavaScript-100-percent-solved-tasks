n = int(input())

if n == 1:
    print('*')
elif n == 2:
    print('**')
else:
    if n & 1:
        element = "*"
    else:
        element = "**"
#top row
    [print(f'{"-" * ((n - 1) // 2 )}{element}{"-" * ((n - 1) // 2 )}') for row in range(1)]

#---------------------------------------------------
#middle top
    if n > 4 and n & 1: #up  /odd
       [print(f"{'-' * (n // 2 - i)}*{'-' * ((i + i) -1)}*{'-' * (n // 2 - i)}") for i in range(1, n // 2)]
    else: #even
        [print(f"{'-' * ((n // 2 - i) - 1)}*{'-' * (i + i)}*{'-' * ((n // 2 - i)-1)}") for i in range(1, n // 2 - 1)]

# middle line
    [print(f"*{'-' * (n -2)}*") for _ in range(1)]

#under middle
    if n > 4 and n & 1:
        [print(f"{'-' * (n // 2 - i)}*{'-' * (i + i - 1)}*{'-' * (n // 2 - i)}") for i in range(n // 2 -1, 0, -1)]
    else:
         #even
        [print(f"{'-' * (n // 2 - i)}*{'-' * (i + i -2)}*{'-' * (n // 2 - i)}") for i in range(n // 2 -1 , 1, -1)]
#---------------------------------------------------
#buttom row
    [print(f'{"-" * ((n - 1) // 2 )}{element}{"-" * ((n - 1) // 2 )}') for _ in range(1)]



