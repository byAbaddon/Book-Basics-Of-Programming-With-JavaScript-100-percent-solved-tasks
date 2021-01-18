num = int(input())

if num == 100:
    print('one hundred')
    exit()

if num < 10:
   digit1 = num
else:
    digit1, digit2 = map(int,list(str(num)))
    
digit_dict = { 0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
               6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 : 'ten',
               11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen',
               15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen',
               19 : 'nineteen', 20 : 'twenty',
               30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty',
               70 : 'seventy', 80 : 'eighty', 90 : 'ninety' }


if 0 <= num < 10:
    print(digit_dict[digit1])
elif 0 <= num <= 19:
    print(digit_dict[int(str(digit1) + str(digit2))])
elif 20 <= num <= 100:
    if digit2 == 0:
        print(digit_dict[digit1 * 10])
    else:
        print(digit_dict[digit1 * 10] + ' ' + digit_dict[digit2])


'''
25
#twenty five
'''

