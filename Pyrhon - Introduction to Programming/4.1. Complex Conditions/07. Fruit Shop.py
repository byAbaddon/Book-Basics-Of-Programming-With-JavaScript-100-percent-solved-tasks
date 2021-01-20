item, day, count = [input() for _ in range(3)]

days_list = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
shop_dict = {'banana': 2.50, 'apple': 1.20, 'orange': 0.85, 'grapefruit': 1.45, 'kiwi': 2.70, 'pineapple': 5.50, 'grapes': 3.85}
weekend_shop = {'banana': 2.70, 'apple': 1.25, 'orange': 0.90, 'grapefruit': 1.60, 'kiwi': 3.00, 'pineapple': 5.60, 'grapes': 4.20}
  
if day not in days_list or not item in shop_dict:
    print('error')
elif days_list.index(day) <= 4:
    print(round(shop_dict[item] * float(count), 2))
else:
    print(round(weekend_shop[item] * float(count), 2))


'''
orange
Sunday
3
#2.70
'''

