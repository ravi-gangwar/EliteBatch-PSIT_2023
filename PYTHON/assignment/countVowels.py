str1 = input()
vowel = "AEIOUaeiou"
count = 0
for i in str1:
    if(i in vowel):
        count+=1
print(count)