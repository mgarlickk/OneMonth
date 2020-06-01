import stripe

stripe.api_key = 'sk_test_VjXb9xl2zuKvVXF5HDiQSQIz00ifghfkOC'

intent = stripe.PaymentIntent.create(
  amount=1099,
  currency='usd',
  # Verify your integration in this guide by including this parameter
  metadata={'integration_check': 'accept_a_payment'},
)