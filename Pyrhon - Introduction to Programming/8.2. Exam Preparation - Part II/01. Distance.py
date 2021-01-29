km_speed, first_time_min, second_time_min, three_time_mInt = [int(input()) for _ in range(4)]

cap = km_speed * first_time_min / 60
cap2 = (km_speed + km_speed * 0.10) * (second_time_min / 60)
cap3 = ((km_speed + km_speed * 0.10) * 0.95) * (three_time_mInt / 60)

print(f'{(cap + cap2 + cap3):.2f}')


'''
90
60
70
80
#330.90
'''
