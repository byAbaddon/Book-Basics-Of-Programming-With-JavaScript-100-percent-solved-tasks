def draw_square(n):
    #top
    print('-'*(n * 2))

    #middle
    for i in range(n -2):
      print('-' + '\\/' * (n - 1) + '-')
    

    #bottom
    print('-' * (n * 2))


draw_square(int(input()))
