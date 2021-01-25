n = int(input())
#top part
print('.' * (n // 2) + '#' * n + '.' * (n // 2))
#under top
for i in range( n - 2):
    print('.' * (n // 2) + '#' + '.' * (n - 2) + '#' + '.' * (n // 2))
#$middle part
print('#' * (n // 2 + 1) + '.' * (n - 2) + '#' * (n // 2 + 1))
#before bottom
dot = 0
for i in range(n - 2):
    print('.' * (i + 1) + '#' + '.' * abs(n * 2 - 5 - dot) + '#' + '.' * (i + 1))
    dot += 2
#bottom
print('.' * (n - 1) + '#' + '.' * (n - 1))
