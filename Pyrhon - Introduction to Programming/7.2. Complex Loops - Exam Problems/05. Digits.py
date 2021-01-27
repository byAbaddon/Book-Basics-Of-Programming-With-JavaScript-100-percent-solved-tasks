number = int(input())
first_num, second_num, third_num = [int(x) for x in str(number)]

loop = first_num  + second_num
num_repeat = first_num + third_num
collections = ''

for _ in range(loop):
    for _ in range(num_repeat):
        if number % 5 == 0:
            number -=  first_num
            collections += str(number) + ' '
        elif number % 3 == 0:
            number -= second_num
            collections += str(number) + ' '
        else:
            number += third_num
            collections += str(number) + ' '

    print(collections)
    collections = ''



#132
