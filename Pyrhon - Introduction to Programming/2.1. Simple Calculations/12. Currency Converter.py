money, currency_one, currency_two = [input() for _ in range(3)]
valut_dict = {'BGN' : 1, 'USD' : 1.79549, 'EUR' : 1.95583, 'GBP' : 2.53405}

print(f'{round(float(money) * valut_dict[currency_one] / valut_dict[currency_two], 2)} {currency_two}')



