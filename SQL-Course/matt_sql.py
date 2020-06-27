import mysql.connector

mydb = mysql.connector.connect(
  host="192.185.4.133",
  user="mgarlick",
  password="-_0=Y4Ok-IHJ",
  database="mgarlick_onemonth"
)

mycursor = mydb.cursor()

def get_users():
  mycursor.execute("SELECT user_nicename FROM users")
  users = mycursor.fetchall()
  return users

def get_states():
  mycursor.execute("SELECT * FROM states")
  states = mycursor.fetchall()
  return states


