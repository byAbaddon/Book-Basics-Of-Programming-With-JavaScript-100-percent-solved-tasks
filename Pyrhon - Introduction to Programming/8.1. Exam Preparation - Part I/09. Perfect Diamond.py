n = int(input())

if n == 1:
    print(' ' * (n - 1) + '*' + ' ' * (n - 1))
    exit()

#top
print(' ' * (n - 1) + '*' + ' ' * (n - 1))

#before middle
[print(' ' * (n - i - 1) + ('*' + '-') * i + '*' + ' ' * (n - i - 1)) for i in range(1, n - 1)]

#middle
print(('*' + '-') * (n - 1) + '*')

#under middle
[print(' ' * i + ('*' + '-') * (n - i - 1) + '*' + ' ' * i) for i in range(1, n - 1)]

#bottom
print(' ' * (n - 1) + '*' + ' ' * (n - 1))


'''
3
  *  
 *-* 
*-*-*
 *-* 
  *  
'''
