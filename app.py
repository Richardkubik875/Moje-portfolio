from flask import  Flask, render_template, request
from data import users, nazev_webu, popis, technologie, titulek_webu
from generator import number

app = Flask (__name__)

produkty = [
    {"id": 1, "nazev": "Jablko", "cena": 10},
    {"id": 2, "nazev": "Hruška", "cena": 12},
    {"id": 3, "nazev": "Banán", "cena": 15},
    ]

@app.route("/", methods={"GET", "POST"})
def home():
    email = None
    nickRichard = "Richard"
    hesloRichard = "heslo"
    zprávalogin = None

    if request.method == "GET":
        email = request.args.get("email")

    if request.method == "POST":
        nick = request.form.get("nick")
        heslo = request.form.get("heslo")

        if nick == nickRichard and heslo == hesloRichard:
            zprávalogin = "Přihlášení proběhlo úspěšně"
        else:
            zprávalogin = "Špatný login nebo heslo"
    return render_template("index.html", nazev_webu = nazev_webu, titulek_webu = titulek_webu, email = email, zprava = zprávalogin)

@app.route("/contacts")
def contacts():
    return render_template("contacts.html", users = users)

@app.route("/generator")
def number2():
    return render_template("generator.html", number = number)

@app.route("/eshop", methods=["GET"])
def eshop():
    q = request.args.get("q", "").strip().lower()
    nalezeny = None

    if q:
        if q.isdigit():
            nalezeny = next((p for p in produkty if p["id"] == int(q)), None)
        if not nalezeny:
            nalezeny = next((p for p in produkty if p["nazev"].lower() == q), None)
        if not nalezeny:
            nalezeny = next((p for p in produkty if q in p["nazev"].lower()), None)

    return render_template("eshop.html", produkt=nalezeny, q=q, titulek_webu="E-shop")
if __name__ == "__main__":
    app.run(debug=True)