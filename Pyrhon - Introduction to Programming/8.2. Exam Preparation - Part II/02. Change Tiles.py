from math import ceil

money, w_hallway, h_hallway, s_t, h_t, prise_one_tile, master_money = [float(input()) for _ in range(7)]
array_hallway = w_hallway * h_hallway
array_tiles = (s_t * h_t) / 2
hall = ceil(array_hallway / array_tiles + 5)
sum_for_tiles = hall * prise_one_tile + master_money

if sum_for_tiles <= money:
    print(f'{abs(sum_for_tiles - money):.2f} lv left.')
else:
    print(f'You\'ll need {abs(sum_for_tiles - money):.2f} lv more.')



'''
500
3
2.5
0.5
0.7
7.80
100
#25.60 lv left.
'''
