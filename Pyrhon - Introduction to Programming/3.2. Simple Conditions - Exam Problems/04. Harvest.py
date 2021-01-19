from math import floor,ceil

vineyard, grape_per_square, wine_need, workers = [float(input()) for _ in range(4)]
total_grape = vineyard * grape_per_square
total_wine = total_grape * (40.0 / 100) / 2.5

if total_wine >= wine_need:
    print(f'Good harvest this year! Total wine: {floor(total_wine)} liters.')
    print(f'{ceil(total_wine - wine_need)} liters left -> {ceil((total_wine - wine_need) / workers)} liters per person.')
else:
    print(f'It will be a tough winter! More {floor(abs(total_wine - wine_need))} liters wine needed.')


'''
650
2
175
3
'''
