loop = int(input())
collection_list = [input() for _ in range(loop)]

result = ''

for current in collection_list:
    currentLetterCode = ord(current)
    firstDigit = str(currentLetterCode)[0: 1]
    lastDigit = str(currentLetterCode)[-1:]
    concatDigit = firstDigit + lastDigit
    firstEncrypt =  chr(currentLetterCode + int(lastDigit))
    secondEncrypt = chr(currentLetterCode - int(firstDigit))

    result += firstEncrypt + concatDigit + secondEncrypt

print(result)



'''
7
S
o
f
t
U
n
i
#V83Kp11nh12ez16sZ85Mn10mn15h
'''
