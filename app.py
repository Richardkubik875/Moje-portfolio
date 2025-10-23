from flask import  Flask, render_template, request
from data import users, nazev_webu, popis, technologie, titulek_webu
from generator import generator

app = Flask (__name__)

@app.route("/", methods={"GET", "POST"})
def home():
    email = None

    if request.method == "GET":
        email = request.form.get("email")
    return render_template("index.html", nazev_webu = nazev_webu, titulek_webu = titulek_webu, email = email)

@app.route("/contacts")
def contacts():
    return render_template("contacts.html", users = users)

@app.route("/generator")
def generator():
    return render_template("generator.html", generator = generator)

if __name__ == "__main__":
    app.run(debug=True)