n = int(input())
#draw top  
print('.' * (n + 1) + '_' *(n * 2 + 1) + '.' *(n + 1))
#draw up part
add = 1
for i in range(n):
    print('.' * (n - i) + '//' + '_' * ((((n + 1) * 2) - 4) + add) + '\\\\' + '.' *(n  - i))
    add += 2

#draw sing Stop
if n < 4:
    print('//' + '_' * n + 'STOP!' + '_' * n + '\\\\')
else:
    print('//' + '_' * (((n + n) * 2 - 5) // 2) + 'STOP!' + '_' * (((n + n) * 2 - 5) // 2) + '\\\\')

#draw bottom
add = 1
for i in range(n,0,-1):
    print('.' * (n - i) + '\\\\' + '_' * (((n + n) * 2) - add) + '//' + '.' * (n - i))
    add += 2

