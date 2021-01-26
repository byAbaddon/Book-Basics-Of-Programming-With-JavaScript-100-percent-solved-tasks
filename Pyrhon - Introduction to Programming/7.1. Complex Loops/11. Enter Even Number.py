while True:
    n = int(input())
    if n & 1:
        print('The number is not even: ')
        n+= 1
    else:
        break

print('Even number entered:', n)







