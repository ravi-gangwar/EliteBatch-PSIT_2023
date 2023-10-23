a = "Go"
if(len(a) > 3):
    if((a.endswith("ing"))):
        b = a.replace("ing", "ly")
        print(b)
    elif((a.endswith("ing") != True)):
        b = a + "ing"
        print(b)
else:
    print(a)