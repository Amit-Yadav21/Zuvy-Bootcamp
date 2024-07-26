#  kkkk = int(input("enter"));
# gg = kkkk % 26
# jj = kkkk//26
# # print(gg,jj)
# if gg==1:
#     print("a"*jj+"a")
# if gg==0:
#     if jj==1:
#         print("z")
#     else:
#         print("a"*(jj-1)+"z")
# elif gg==2:
#     print("a"*jj+"b")
# elif gg==3:
#     print("a"*jj+"c")
# elif gg==4:
#     print("a"*jj+"d")
# elif gg==5:
#     print("a"*jj+"e")
# elif gg==6:
#     print("a"*jj+"f")
# elif gg==7:
#     print("a"*jj+"g")
# elif gg==8:
#     print("a"*jj+"b")
#     print("a"*jj+"h")
# elif gg==9:
#     print("a"*jj+"i")
# elif gg==10:
#     print("a"*jj+"j")
# elif gg==11:
#     print("a"*jj+"k")
# elif gg==12:
#     print("a"*jj+"l")
# elif gg==13:
#     print("a"*jj+"m")
# elif gg==14:
#     print("a"*jj+"n")
# elif gg==15:
#     print("a"*jj+"o")
# elif gg==16:
#     print("a"*jj+"p")
# elif gg==17:
#     print("a"*jj+"q")
# elif gg==18:
#     print("a"*jj+"r")
# elif gg==19:
#     print("a"*jj+"s")
# elif gg==20:
#     print("a"*jj+"t")
# elif gg==21:
#     print("a"*jj+"u")
# elif gg==22:
#     print("a"*jj+"v")
# elif gg==23:
#     print("a"*jj+"w")
# elif gg==24:
#     print("a"*jj+"x")
# elif gg==25:
#     print("a"*jj+"y")
# elif gg==26:
#     print("a"*jj+"z")
# ------------------------------------------

# hh = ["a","b","c","d",'e',"f",'g',"h",'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

# oo= int(input("enter"))
# bb= oo%26
# cc=oo//26
# zz="a"*(cc-1)
# xx=hh[bb-1]
# print(str(zz)+str(xx))

# ********************************************************* #
#... remove dublicate value in list

# a=[1,1,2,2,3,3,4,4,4]
# for i in a:
#   if i in a:
#     a.remove(i)
# print(a)

#---------OR--------OR--------------OR--------

# a=[9,9,8,7,6,3,5,5,5,4, 4]
# for i in a:
#   for j in range(a.count(i)-1):
#     a.remove(i)
#     # a.sort()   # Acendiing order
# print(a)

#************************************************
#... multiply of 3 digit without using multiply oparetor ?

# a=int(input("Enter 1st number :"))
# b=int(input("Enter 2nd number :"))
# c=int(input("Enter 3rd number :"))
# c1,c2=0,0
# for i in range(a):
#   c1+=b
# for j in range(c):
#   c2+=c1
# print(c2)

#----------------- OR

# a,b,c,c1,c2=int(input("Enter 1st number :")),int(input("Enter 2nd number :")),int(input("Enter 3rd number :")),0,0
# for i in range(a):
#   c1+=b
# for j in range(c):
#   c2+=c1
# print(c2)

# ***********************************

# l = [{"name":"amit"}]
# print(l)




a,b, c=100, 200, 10
d= b-a
print(d/c) 