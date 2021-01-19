from math import trunc

days = int(input())
game_Tom_min = 30000
owner_working = 63
owner_Off = 127

year = (365 - days)
year_to_min = (year * owner_working) + (days * owner_Off)
subtotal = abs(game_Tom_min - year_to_min)
hours = (trunc(subtotal / 60))
minutes = subtotal % 60

if game_Tom_min >= year_to_min:
    print(f'Tom sleeps well\n{hours} hours and {minutes} minutes less for play')
else:
    print(f'Tom will run away\n{hours} hours and {minutes} minutes more for play')


#20
