number = int(input())
text_numbers_list = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
print( text_numbers_list[number - 1]  if  number <= 9 else 'number too big')

