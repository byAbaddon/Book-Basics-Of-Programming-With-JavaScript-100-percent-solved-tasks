from math import floor

typeYear, holiday_weekend, simple_weekend = [input() for _ in range(3)]
weekend = (48 - float(simple_weekend)) * 3 / 4
holiday = (float(holiday_weekend) * 2.0) / 3
allGames = weekend + holiday + float(simple_weekend)

print(floor(allGames * 115 / 100) if typeYear == 'leap' else floor(allGames))


'''
leap
5
2
#45
'''
