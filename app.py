from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Dummy database for demonstration purposes (replace with actual database)
users = {'admin ': 'password123', 'utkarsh': 'codeuv10'}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username in users and users[username] == password:
            return redirect(url_for('index'))
        else:
            return render_template('login.html', error='Invalid username or password')
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username in users:
            return render_template('signup.html', error='Username already exists')
        else:
            users[username] = password
            return redirect(url_for('index'))
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True)
