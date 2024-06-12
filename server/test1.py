

name = "Daisha"
last = "McCutcheon"

print(name)




## list
prices = [12, 32, 45.00, 43.23, 45.03]
print(prices)

print(prices[0])

total = 0
for price in prices:
    total += price

print(total)


## dictionary
me = {
    "name": "Daisha",
    "last": "McCutcheon",
    "age": 30
}

print(me)


# read
print(me["name"])

# modify
me["age"] = 99

# add
me["email"] = "daisha05311994@gmail.com"

print(me)

#opt 1 - Check
if "hobbies" in me:
    hobbies = me ["hobbies"]
    print(hobbies)

# opt 2 - read or default
hob2 = me.get("hobbies", "NO HOBBIES")
print(hob2)

print("Should Work")