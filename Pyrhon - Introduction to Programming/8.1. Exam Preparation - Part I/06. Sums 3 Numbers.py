n1, n2, n3 = [int(input()) for _ in range(3)]
sorted_num_list = sorted([n1, n2, n3])

if n1 + n2 == n3 or n1 + n3 == n2 or n3 + n2 == n1:
    print(f'{sorted_num_list[0]} + {sorted_num_list[1]} = {sorted_num_list[2]}')
else:
    print('no')



'''
3
5
2
#2 + 3 = 5
'''
