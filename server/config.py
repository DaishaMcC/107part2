import pymongo
import certifi

con_str="mongodb+srv://test:<test>@cluster0.3flcd4i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client =pymongo.MongoClient(con_str,tlsCAFile=certifi.where())
db=client.get_database("organika")