
input1 = input("Give Input: ")
d = 0
c=0
for i in input1:
    if(i.isdigit()):
        d +=1
    elif (i.isalpha()):
        c +=1
print("LETTERS", c)
print("DIGITS ", d)