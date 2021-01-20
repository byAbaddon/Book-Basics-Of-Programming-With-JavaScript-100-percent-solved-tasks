city, money = input(), float(input())
result =0
towns_list = ["Sofia", "Varna", "Plovdiv"]
calc_dict = {
    'Sofia': { 's': 5, 'm': 7, 'l': 8, 'xl': 12 },
    'Varna': { 's': 4.5, 'm': 7.5, 'l': 10, 'xl': 13 },
    'Plovdiv': { 's': 5.5, 'm': 8, 'l': 12, 'xl': 14.5 }
  }

if city not in towns_list or money < 0:
    print('error')
    exit()

if money <= 500:
    result = calc_dict[city]['s'] * money / 100
elif 500 < money <= 1000:
    result = calc_dict[city]['m'] * money / 100
elif 1000 < money <= 10000:
    result = calc_dict[city]['l'] * money / 100
elif money > 10000:
    result = calc_dict[city]['xl'] * money / 100

print(round(result, 2))


'''
Sofia
1500
#120.00
'''

