num = int(input())
word = int(input())
str_collection = 'abcdefghijklmnopqrstuvwxyz'
num_list = ''

for a in range(1, num + 1):
  for b in range(1, num + 1):
    for c in range(0, word ):
      for d in range(0, word):
        for e in range(max(a, b) + 1, num +1 ):
          num_list += ' ' + str(a) + str(b) + str_collection[c] + str_collection[d] + str(e)

print(num_list.strip())


'''
3
1
#11aa2 11aa3 12aa3 21aa3 22aa3
'''
