bitcoin_count, china_uan_count, commission = [float(input()) for _ in range(3)]
euro = 1.95
usd = 1.76
calc_one = bitcoin_count * 1168
calc_two = (china_uan_count * 0.15) * 1.76
subtotal = (calc_one + calc_two) / euro
tax = subtotal * (commission / 100)

print(f'{(subtotal - tax):.2f}')

'''
1
5
5
#569.67
'''
