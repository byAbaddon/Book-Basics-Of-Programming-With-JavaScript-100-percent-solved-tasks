premiere, normal , discount = [input() for _ in range(3)]
chairs = float(normal) * float(discount)

if premiere == 'Premiere':
    chairs *= 12.00
elif premiere == 'Normal':
    chairs *= 7.50
elif premiere == 'Discount':
    chairs *= 5.00

print(round(chairs, 2), 'leva')


'''
Premiere
10
12
#1440.00 leva
'''

