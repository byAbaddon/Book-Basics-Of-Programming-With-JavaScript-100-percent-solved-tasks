def greater_of_two_values(*args):
    types, first, second = args

    if types == 'int' :
        return max(int(first), int(second))
    elif types == 'char':
        return max(first, second)
    else:
        return first if first > second else second


print(greater_of_two_values(input(), input(), input()))



'''
int
1
5

#5
---------
char
a
b

#a
--------
string
aaa
bbb

#bbb
'''
