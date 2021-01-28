day, month = int(input()), int(input())
days_dict = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
  
day += 5

if days_dict[month] < day:
    day -= days_dict[month]
    month+= 1
    if month > 12:
        month -= 12

if month < 10:
  month = '0' + str(month)

print(f'{day}.{month}')



'''
28
03
#2.04
'''
