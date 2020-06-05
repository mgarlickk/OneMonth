from imdb import IMDb
from flask import Flask, render_template, request
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="",
  database="IMDb"
)
print(mydb)
mycursor = mydb.cursor()

mycursor.execute("SELECT title, genre FROM Movies where Year > 2005 and Rating > 8")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)

@app.route('/testing')
def testing():
    movies = myresult
    return render_template('testing.html', movies=movies)
