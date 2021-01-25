n = int(input())
#top part
for i in range(n - 2):
    if i & 1:
      print('-' * (n - 2) + '\\' + ' ' + '/' + '-' * (n - 2))
    else:
      print('*' * (n - 2) + '\\' + ' ' + '/' + '*' * (n - 2))

#middle part
print(' ' * (n - 1) + '@')

#bottom part
for i in range(n - 2):
  if i & 1:
    print('-' * (n - 2) + '/' + ' ' + '\\' + '-' * (n - 2))
  else:
    print('*' * (n - 2) + '/' + ' ' + '\\' + '*' * (n - 2))
