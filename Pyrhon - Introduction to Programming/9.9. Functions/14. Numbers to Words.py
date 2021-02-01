def letterize(num):

    d = { 0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
          6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 : 'ten',
          11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen',
          15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen',
          19 : 'nineteen', 20 : 'twenty',
          30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty',
          70 : 'seventy', 80 : 'eighty', 90 : 'ninety' }

    k = 1000
    m = k * 1000

    negative = False
    if num > 999: return 'too large'

    if num < 0:
        if num < -999:return 'too small'
        else:
            negative = True
            num = abs(num)


    if num < 20:
        if negative:
            return 'minus ' + d[num]
        return d[num]

    if num < 100:
        if negative:
            if num % 10 == 0: return 'minus ' + d[num]
        if num % 10 == 0: return d[num]

        else:
            if negative: return 'minus ' + d[num // 10 * 10] + ' ' + d[num % 10]
            return d[num // 10 * 10] + ' ' + d[num % 10]

    if num < k:
        if negative:
            if num % 100 == 0: return 'minus ' + d[num // 100] + '-hundred'
        if num % 100 == 0: return d[num // 100] + '-hundred'
        else:
            if negative:
                return 'minus ' +  d[num // 100] + '-hundred and ' + letterize(num % 100)
            return d[num // 100] + '-hundred and ' + letterize(num % 100)



loop = int(input())

for _ in range(loop):
    current_num = int(input())
    if len(str(current_num)) < 3:
        continue
    print(letterize(current_num))


'''
3
999
-420
1020
--------
1
-420
'''
