#from decimal import Decimal  not working in Judge !

shopping_money = float(input())   #TODO......  90pts only

if len(str(shopping_money)) >= 28: #28  The seventh test failed, Float does not support too large numbers!!!
    raise Exception("Sorry, number is too big" , shopping_money)

purchases = 0
command = input()

while command != "mall.Enter":
    command = input()

command = input()

while command != "mall.Exit":
    for action in command:
        if 'A' <= action <= 'Z':
            price = ord(action) * 0.5
            if shopping_money < price:
                continue

            shopping_money -= price
            purchases += 1
        elif 'a' <= action <= 'z':
            price = ord(action) * 0.3
            if shopping_money < price:
                continue

            shopping_money -= price
            purchases += 1
        elif action == '%':
            if shopping_money > 0:
                shopping_money /= 2
                purchases += 1
        elif action == '*':
            shopping_money += 10
        else:
            price = ord(action)
            if shopping_money < price:
                continue

            shopping_money -= price
            purchases += 1

    command = input()

if purchases == 0:
    print("No purchases. Money left: %.2f lv." % shopping_money)
else:
    print("%d purchases. Money left: %.2f lv." % (purchases, shopping_money))


'''
110
mall.Enter
d
mall.Exit

$1 purchases. Money left: 80.00 lv.
-----------------------------------------
13333333333302222222222222222222211111111111
mall.Enter
Ab
**
mall.Exit
#2 purchases. Money left: 10222222222222222688256.00 lv.
'''
