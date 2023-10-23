str1 = '''"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~'''


str2 = input()
for i in str1:
    if(i in str2):
        str2=str2.replace(i, "")
print(str2)