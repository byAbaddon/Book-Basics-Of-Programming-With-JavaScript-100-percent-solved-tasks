def notifications(message_count):

    def show_success_message(operation, message):
        return f'Successfully executed {operation}.\n{"=" * (len(operation) + 23)}\n{message}.\n'


    def show_warning_message(message):
        return f'Warning: {message}.\n{"=" * (len(message) + 10)}\n'


    def show_error_message(operation, message, error_code):
        return f'Error: Failed to execute {operation}.\n{"=" * (len(operation) + 26)}\nReason: {message}.\nError code: {error_code}.\n'


    def process_message(message_count):

        while message_count:
            message_count -= 1
            operation = input()

            if operation == 'success':
                print(show_success_message(input(), input()))
            elif operation == 'warning':
                print(show_warning_message(input()))
            else:
                print(show_error_message(input(), input(), input()))


    process_message(message_count)



notifications(int(input()))



'''
4
error
credit card purchase
Invalid customer address
500
warning
Email not confirmed
success
user registration
User registered successfully
warning
Customer has not email assigned
'''
