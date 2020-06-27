import matt_sql as ms
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        try:
            name = request.form['name']
            email = request.form['email']
            username = request.form['user']
            password = request.form['pass']
            ms.mycursor.execute("INSERT INTO users(user_login, user_pass, user_nicename, user_email) VALUES(%s, %s, %s, %s)", (username, password, name, email))
            ms.mydb.commit()
            print('User added successfully!')
        except:
            print("Error adding user")

    return render_template('index.html')

#@app.route('/', methods=['POST', 'GET'])
#def index():
#    users = ms.get_users()
#    states = ms.get_states()
#    return render_template('index.html', users=users, states=states)