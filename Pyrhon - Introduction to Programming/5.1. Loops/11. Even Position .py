import  sys

n = int(input())
odd_sum = 0
odd_min = sys.maxsize
odd_max = -sys.maxsize
even_sum = 0
even_min = sys.maxsize
even_max = -sys.maxsize

for i in range(0, n):
    current_number = input()
    if '.' in current_number:
      current_number = float(current_number)
    else:
      current_number = int(current_number)

    if i % 2 == 1:
        even_sum += current_number
        if current_number < even_min:
            even_min = current_number
        if current_number > even_max:
            even_max = current_number
    else:
        odd_sum += current_number
        if current_number < odd_min:
            odd_min = current_number
        if current_number > odd_max:
            odd_max = current_number


if isinstance(odd_sum, float) and str(odd_sum)[-1:] == '0':
  odd_sum = int(odd_sum)

print(f"OddSum={odd_sum},")

if odd_min == sys.maxsize:
    print(f"OddMin=No,")
    print(f"OddMax=No,")
else:
     print(f"OddMin={odd_min},")
     print(f"OddMax={odd_max},")

if  isinstance(even_sum, float) and str(even_sum)[-1:] == '0':
  even_sum = int(even_sum)

print(f"EvenSum={even_sum},")

if even_min == sys.maxsize:
    print(f"EvenMin=No,")
    print(f"EvenMax=No")
else:
    print(f"EvenMin={even_min},")
    print(f"EvenMax={even_max}")



'''
4
1.5
1.75
1.5
1.75
'''



