chrysanthemums_count, roses_count, tulips_count = [int(input()) for _ in range(3)]
season, discount = [input() for _ in range(2)]
total_sum = 0

price_dict = {
    'category_one' : {'chrysanthemums' :2.00, 'roses' : 4.10, 'tulips' : 2.50},
    'category_two' : {'chrysanthemums' :3.75, 'roses' : 4.50, 'tulips' : 4.15},
}

def calc_sum(category):
    global total_sum
    if category == 'Spring' or category == 'Summer':
        category = 'category_one'
    else:
        category = 'category_two'

    total_sum += price_dict[category]['chrysanthemums'] * chrysanthemums_count
    total_sum += price_dict[category]['roses'] * roses_count
    total_sum += price_dict[category]['tulips'] * tulips_count

    return total_sum


calc_sum(season)


if discount == 'Y':
    total_sum *= 1.15
if season == 'Spring' and tulips_count > 7:
    total_sum *= 0.95
if season == 'Winter' and roses_count >= 10:
    total_sum *= 0.90
if (chrysanthemums_count + roses_count + tulips_count) > 20:
    total_sum *= 0.80

print(f'{total_sum + 2:.2f}')




'''
2
4
8
Spring
Y
#46.14
'''
