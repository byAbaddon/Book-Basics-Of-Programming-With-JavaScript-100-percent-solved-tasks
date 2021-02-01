def printing_triangle(n):

    def printing(start, end):
        result = ''
        for i in range(start, end + 2):
            result += str(i) + " "

        return result


    for i in range(0,n):
        print(printing(1, i))


    for i in range(n-2,-1,-1):
        print(printing(1, i))


printing_triangle(int(input()))

#3
