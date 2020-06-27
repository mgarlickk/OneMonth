import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="mgarlick",
  password="-_0=Y4Ok-IHJ",
  database="mgarlick_onemonth"
)

mycursor = mydb.cursor()

mycursor.execute("SHOW TABLES")

for x in mycursor:
  print(x)