def math_pow(number,power):
    result = number ** power

    if len(str(result)) > 16 or len(str(result)) == 7:
        return result
    else:
         return int(result)


print(math_pow(float(input()), float(input())))

