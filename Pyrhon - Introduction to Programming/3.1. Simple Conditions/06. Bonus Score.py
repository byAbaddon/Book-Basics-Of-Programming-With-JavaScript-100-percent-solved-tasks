num = int(input())
bonus = num

if num <= 100: num += 5
elif num <= 1000: num *= 1.20
else: num *= 1.10

if bonus % 2 == 0: num += 1
elif bonus % 5 == 0: num += 2

print(f'{num - bonus}\n{num}')


#20
