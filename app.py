from flask import  Flask, render_template
from data import users, nazev_webu, popis, technologie, titulek_webu

app = Flask (__name__)

@app.route("/")
def home():
    return render_template("index.html", nazev_webu = nazev_webu, titulek_webu = titulek_webu)

@app.route("/contacts")
def contacts():
    return render_template("contacts.html", users = users)

if __name__ == "__main__":
    app.run(debug=True)