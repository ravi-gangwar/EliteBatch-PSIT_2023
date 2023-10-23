a = ["ravi", "harshit"]
n = len(a[0])
for i in a:
    if(n < len(i)):
        n = len(i)
print(n)