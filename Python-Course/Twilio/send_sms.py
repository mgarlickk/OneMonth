from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACa1e54752ed958b8055ae54b5f06101d8'
auth_token = '880abe8d47bbdcd6e8b7b9befacfc45c'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Join Earth's mightiest heroes. Like Kevin Bacon.",
                     from_='+4156695815',
                     to='+13176703159'
                 )

print(message.sid)