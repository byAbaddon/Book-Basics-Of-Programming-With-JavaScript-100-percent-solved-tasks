a, b = int(input()), int(input()) + 1
count = 0
  
for i in range(a, b):
    for j in range(i+1, b):
        for m in range(j+1, b):
            for z in range(m+1, b):
                print(f'{i} {j} {m} {z}')
                count+= 1

if count == 0:
    print('No')



'''
3
7
'''
