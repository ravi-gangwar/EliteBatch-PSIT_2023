ip= "AAAABBBBCCCCCCCC"
i = 1
c = ip[0]
result = ""
count = 1
while(i < len(ip)):
    if(c == ip[i]):
        count +=1
    else:
        result +=(str(count) + ip[i-1])
        count = 1
        c = ip[i]
    i +=1
else:
    result +=(str(count) + ip[i-1])

print(result)


