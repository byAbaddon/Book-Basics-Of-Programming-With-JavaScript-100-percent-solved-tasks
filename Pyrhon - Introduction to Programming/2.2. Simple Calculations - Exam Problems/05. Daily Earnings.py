work_day_in_month, money_per_day, usd_price= [float(input()) for _ in range(3)]
mount_cash = work_day_in_month * money_per_day
all_money = mount_cash * 12 + mount_cash * 2.5
money_counter = all_money / 100 * 25
money_convert_to_leva = (all_money - money_counter) * usd_price
total_money_for_day = f'{(money_convert_to_leva / 365):.2f}'
print(total_money_for_day)


'''
21
75.00
1.59
#74.61
'''
