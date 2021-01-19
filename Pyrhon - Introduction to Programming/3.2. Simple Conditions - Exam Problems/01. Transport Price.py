km, is_day = float(input()), input()

taxi, bus, train, price = 0.70, 0.09, 0.06, 0
taxRate = 0

if is_day == 'day':
    taxRate = 0.79
else:
    taxRate = 0.90


if km < 20:
    price = taxi + (km * taxRate)
elif km < 100:
    price = bus * km
else:
    price = km * train

print(price)


'''
5
day
#4.65
'''
