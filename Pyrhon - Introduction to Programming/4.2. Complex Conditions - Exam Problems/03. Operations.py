n_one, n_two, operator = int(input()), int(input()), input()
try:
    result = eval(f'n_one  {operator}  n_two')
    if operator == '+' or operator == '-' or operator == '*':
        is_even  = 'even' if result % 2 == 0 else 'odd'
        print(f'{n_one} {operator} {n_two} = {result} - {is_even}')
    elif operator == '/':
        print(f'{n_one} {operator} {n_two} = {result:.2f}')
    else:
        print(f'{n_one} {operator} {n_two} = {result}')
except:
    print(f'Cannot divide {n_one} by zero')



'''
7
3
*
#7 * 3 = 21 - odd
'''
