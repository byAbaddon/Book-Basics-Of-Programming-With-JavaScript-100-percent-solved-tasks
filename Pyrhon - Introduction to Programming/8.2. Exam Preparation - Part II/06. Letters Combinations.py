n1, n2, n3 = [ord(input()) for _ in range(3)]
res = ''
count = 0

for i in range(n1, n2 + 1):
    for j in range(n1,n2 + 1):
        for k in range(n1,n2 + 1):
            if i != n3 and j != n3 and k != n3:
                res += chr(i) + chr(j) +chr(k) + ' '
                count+= 1

print(f'{res}{count}')


'''
a
c
b
#aaa aac aca acc caa cac cca ccc 8
'''
