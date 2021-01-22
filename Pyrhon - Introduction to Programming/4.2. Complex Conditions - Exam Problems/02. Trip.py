budget = float(input())
season = input()
country, place = '', ''

if budget <= 100:
    country = 'Bulgaria'
    if season == 'summer':
        place = 'Camp'
        budget *= 0.30
    else:
        place = 'Hotel'
        budget *= 0.70
elif 100 < budget <= 1000:
      country = 'Balkans'
      if season == 'summer':
          place = 'Camp'
          budget *= 0.40
      else:
          place = 'Hotel'
          budget *= 0.80
elif budget > 1000:
      country = 'Europe'
      place = 'Hotel'
      budget *= 0.90

print(f'Somewhere in {country}\n{place} - {budget:.2f}')


'''
June
14
#Apartment: 961.80 lv.
#Studio: 1052.80 lv
'''
