tribonacci_first, tribonacci_second, tribonacci_third, spiral_current, spiral_step = [int(input()) for _ in range(5)]
tribonacci_numbers = [tribonacci_first, tribonacci_second, tribonacci_third]

tribonacci_current = tribonacci_third

while tribonacci_current < 1000000:
    tribonacci_current = tribonacci_first + tribonacci_second + tribonacci_third

    tribonacci_numbers.append(tribonacci_current)
    tribonacci_first = tribonacci_second
    tribonacci_second = tribonacci_third
    tribonacci_third = tribonacci_current


spiral_numbers = [spiral_current]
spiralCount = 0
spiralStepMul = 1

while spiral_current < 1000000:
    spiral_current += spiral_step * spiralStepMul
    spiral_numbers.append(spiral_current)
    spiralCount+= 1
    if spiralCount % 2 == 0:
        spiralStepMul+= 1


found = False
for i in range(0, len(tribonacci_numbers)):
    for j in range(0, len(spiral_numbers)):
        if tribonacci_numbers[i] == spiral_numbers[j] and tribonacci_numbers[i] <= 1000000:
            print(tribonacci_numbers[i])
            found = True
            break

        if found: break


if not found:
    print('No')


'''
1
2
3
5
2
#37
'''
