
while True:
    try:
        # Present the user with an input option for submitting a bill sub total
        # Replace $ to allow users to enter dollar amounts        
        sub_total = float(input('Sub Total: ').replace('$',''))
        # Create the various tip percentage values
        fifteen_percent = round(sub_total * .15, 2)
        eighteen_percent = round(sub_total * .18, 2)
        twenty_percent = round(sub_total * .20, 2)
        # Print the list of tip options to the user
        print(f"""Tip Recommendations:
Option 1 | Fifteen Percent ${fifteen_percent}
Option 2 | Eighteen Percent ${eighteen_percent}
Option 3 | Twenty Percent ${twenty_percent}
""")
        break
    except:
        # Ensure the user enter a valid value (float that can include $)
        print('Please enter a valid value')


while True:
    try:
        # Ask the user to pick a tip option
        tip_option = int(input('Please enter a tip option number: '))
        # Ensure that they pick 1, 2, or 3 to get the corresponding tip amount
        if(tip_option not in [1,2,3]):
            print('You must enter 1, 2, or 3')
        else:
            # Thank the user for tipping and show them their total after tip
            if(tip_option == 1):
                bill_total = sub_total + fifteen_percent
                print(f'Thank you for tipping 15%! Your bill total is ${bill_total}.')
            elif(tip_option == 2):
                bill_total = sub_total + eighteen_percent
                print(f'Thank you for tipping 18%! Your bill total is ${bill_total}.')
            elif(tip_option == 3):
                bill_total = sub_total + twenty_percent
                print(f'Thank you VERY MUCH for tipping 20%! Your bill total is ${bill_total}.')
            break
    except:
        print('You must enter 1, 2, or 3')
        