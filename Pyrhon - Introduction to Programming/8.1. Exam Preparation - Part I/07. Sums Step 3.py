loop = int(input())
sum1 = sum2 = sum3 = 0


for i in range(loop):
    n = int(input())

    if i % 3 == 0:
      sum1 += n

    if i % 3 == 1:
      sum2 += n

    if i % 3 == 2:
      sum3 += n

print('sum1 = ' + str(sum1))
print('sum2 = ' + str(sum2))
print('sum3 = ' + str(sum3))


'''
2
3
5
#sum1 = 3
#sum2 = 5
#sum3 = 0
'''
