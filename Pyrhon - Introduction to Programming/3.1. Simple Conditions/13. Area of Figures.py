figure = input()
if figure == 'square' or figure == 'circle':
    a = float(input())
else:
    a = float(input())
    b = float(input())

result = 0

if figure == 'square':
  result = (a ** 2)
elif figure == 'rectangle':
  print('hi')
  result = a * b
elif figure == 'circle':
  result = a * a * 3.14159
elif figure == 'triangle':
  result = a * b / 2

print(f'{result:.3f}')

