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

#user_search = 'fast'
#genre_search = 'crime'
#mycursor = mydb.cursor()
#sql_query = "SELECT * FROM Movies WHERE Title like %s and Genre like %s"
#value = ('%' + user_search + '%', '%' + genre_search + '%',)
#mycursor.execute(sql_query, value)
#myresult = mycursor.fetchall()
#for x in myresult:
#    print(x)

@app.route('/', methods=['POST', 'GET'])
def testing():
    user_search = request.form.get('nm')
    # genre_search = request.form.get('genre')
    mycursor = mydb.cursor()
    sql_query = "SELECT * FROM Movies WHERE Title like %s"
    value = ('%' + user_search + '%', )
    mycursor.execute(sql_query, value)
    myresult = mycursor.fetchall()
    return render_template('testing.html', movies=myresult)
