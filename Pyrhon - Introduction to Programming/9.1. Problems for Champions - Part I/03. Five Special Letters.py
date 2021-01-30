first_number = int(input())
second_number = int(input())

pattern = "abcde"
result = ""

for i1 in range(0, 5):
    for i2 in range(0, 5):
        for i3 in range(0, 5):
            for i4 in range(0, 5):
                for i5 in range(0, 5):
                    full_word = pattern[i1] + \
                                pattern[i2] + \
                                pattern[i3] + \
                                pattern[i4] + \
                                pattern[i5]

                    word = pattern[i1]

                    if word.find(pattern[i2]) == -1:
                        word += pattern[i2]
                    if word.find(pattern[i3]) == -1:
                        word += pattern[i3]
                    if word.find(pattern[i4]) == -1:
                        word += pattern[i4]
                    if word.find(pattern[i5]) == -1:
                        word += pattern[i5]

                    weight = 0
                    for i in range(0, len(word)):
                        multiplier = 0
                        if word[i] == 'a':
                            multiplier = 5
                        if word[i] == 'b':
                            multiplier = -12
                        if word[i] == 'c':
                            multiplier = 47
                        if word[i] == 'd':
                            multiplier = 7
                        if word[i] == 'e':
                            multiplier = -32
                        weight += multiplier * (i + 1)

                    if first_number <= weight <= second_number:
                        result += full_word + " "

if result == "":
    print("No")
else:
    print(result.strip())


'''
40
42
#bcead bdcea
'''
