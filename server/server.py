from flask import Flask,request
import json
from bson import ObjectId
from config import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.get("/")
def home():
    return "Hello from Flask"



# create another API that redirects you to a test

@app.get("/test")
def test():
    return "Hello from the test"


@app.route("/server")
def server():
    server=request.environ.get("SERVER_SOFTWARE")
    return server

@app.get("/api/about")
def about():
    myname ={"name":"daisha mccutcheon"}
    return json.dumps(myname)

products = []

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj



@app.get("/api/products")
def get_products():
    cursor = db.products.find({})
    products = []
    for prod in cursor:
        products.append(fix_id(prod))
    

    return json.dumps(products)




@app.get("/api/reports/total")
def total_reports():
    cursor = db.products.find({})
    total = 0
    for prod in cursor:
        total += prod["price"]

    return json.dumps(total)



@app.get("/api/categories")
def get_categories():
    cursor = db.products.find({})
    categories = []
    for prod in cursor:
        cat = prod.get("category", "")
        categories.append(cat)

    return json.dumps(categories)


@app.post("/api/products")
def save_product():
    newItem=request.get_json()
    db.products.insert_one(newItem)
    return json.dumps(fix_id(newItem))


@app.delete("/api/products/<id>")
def delete_product(id):
    db_id = ObjectId(id)
    db.products.delete_one({"_id": db_id})
    return json.dumps({"delete": res.deleted_count})

app.run(debug=True)