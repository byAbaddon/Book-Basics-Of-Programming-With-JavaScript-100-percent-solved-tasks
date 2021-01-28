loop = int(input())
arg = [float(input()) for _ in range(loop)]
count_current_longest = 0
count_longest = 0
num_prev = 0


for i in range(0, len(arg)):
    current = arg[i]

    if current > num_prev:
        count_current_longest+= 1
    else:
        count_current_longest = 1

    if count_current_longest > count_longest:
        count_longest = count_current_longest

    num_prev = current


print(count_longest)


'''
3
5
2
4
#2
'''
