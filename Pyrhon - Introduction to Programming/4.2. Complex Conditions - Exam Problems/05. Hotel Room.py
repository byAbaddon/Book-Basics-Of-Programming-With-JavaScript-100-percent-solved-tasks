month, days = input(), int(input())
price_studio = 50
price_apartment = 65

if month == 'May' or month == 'October' :
    price_studio = 50 * days
    price_apartment = 65 * days

    if days > 14:
        price_studio *= 0.70
        price_apartment *= 0.90
    elif days > 7:
        price_studio *= 0.95

elif month == 'June' or month == 'September':
    price_studio = 75.20 * days
    price_apartment = 68.70 * days

    if days > 14:
        price_studio *= 0.80
        price_apartment *= 0.90

elif month == 'July' or month == 'August':
    price_studio = 76.00 * days
    price_apartment = 77.00 * days

    if days > 14:
        price_apartment *= 0.90

print(f'Apartment: {price_apartment:.2f} lv.\nStudio: {price_studio:.2f} lv.')



'''
June
14	
#Apartment: 961.80 lv.
#Studio: 1052.80 lv.
'''
