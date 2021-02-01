def blank_receipt():
        def header():
            return 'CASH RECEIPT\n------------------------------'


        def body():
            return 'Charged to____________________\nReceived by___________________'


        def footer():
            return '------------------------------\n(c) SoftUni'


        return f'{header()}\n{body()}\n{footer()}'


print(blank_receipt())
