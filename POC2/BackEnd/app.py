from flask import Flask

app = Flask(__name__)

@app.route('/')
def accueil():
    return 'Bienvenue sur le serveur Flask !'

@app.route('/hello')
def hello():
    return 'Bonjour, monde !'

if __name__ == '__main__':
    app.run(port=5000)
