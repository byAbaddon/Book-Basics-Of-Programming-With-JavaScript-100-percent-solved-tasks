magic_num = int(input())
result_list = []

for one in range(9):
    for two in range(9):
        for three in range(9):
            for four in range(9):
                for five in range(9):
                    for six in range(9):
                        if one * two * three * four * five * six == magic_num:
                            result_list.append(f'{one}{two}{three}{four}{five}{six}')

print(' '.join(result_list))


'''
2
#111112 111121 111211 112111 121111 211111
'''
