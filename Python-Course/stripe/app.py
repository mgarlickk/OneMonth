from flask import Flask, render_template
import stripe
app = Flask(__name__)

stripe.api_key = 'sk_test_VjXb9xl2zuKvVXF5HDiQSQIz00ifghfkOC'

@app.route('/')
def checkout():
    intent = stripe.PaymentIntent.create(
    amount=1099,
    currency='usd',
    # Verify your integration in this guide by including this parameter
    metadata={'integration_check': 'accept_a_payment'}
    )
    return render_template('checkout.html', client_secret=intent.client_secret)
