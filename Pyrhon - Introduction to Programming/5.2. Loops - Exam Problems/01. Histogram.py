loop = int(input())
num_list = []

for _ in range(0,loop):
    num_list.append(int(input()))

p1 = len(list(filter(lambda el: el < 200, num_list))) / loop * 100
p2 = len(list(filter(lambda el: 200 <= el <= 399, num_list))) / loop * 100
p3 = len(list(filter(lambda el: 400 <= el <= 599, num_list))) / loop * 100
p4 = len(list(filter(lambda el: 600 <= el <= 799, num_list))) / loop * 100
p5 = len(list(filter(lambda el: el >= 800, num_list))) / loop * 100

print(f'{p1:.2f}%\n{p2:.2f}%\n{p3:.2f}%\n{p4:.2f}%\n{p5:.2f}%')

'''
3
1
2
999
'''


