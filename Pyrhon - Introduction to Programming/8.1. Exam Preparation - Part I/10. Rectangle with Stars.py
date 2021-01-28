from math import ceil

n = int(input())
#top
print('%' * (n * 2))

#before middle
[print('%' + ' ' * (n * 2 - 2) + '%') for i in range(ceil(n / 2) - 1)]

#middle
print('%' + ' ' * (n - 2) + '**' + ' ' * (n - 2) + '%')

#after middle
[print('%' + ' ' * (n * 2 - 2) + '%') for i in range(ceil(n / 2) - 1)]

#bottom
print('%' * (n * 2))


'''
5
%%%%%%%%%%
%        %
%        %
%   **   %
%        %
%        %
%%%%%%%%%%
'''
