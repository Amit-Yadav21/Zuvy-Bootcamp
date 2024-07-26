// -------------------------------------------------- login / signup ?

// const f = require('fs')        // fs is a module .here fs means file system .
// const input=require('readline-sync')     // yah input name, email, password ke liye hai .

// const create=function(){
//     if(f.existsSync("p.txt")){       // check the file hai ya nahi . Ager file hoga to if condition kam karega . Ager file naho hoga to else condition kam karega .  
//         let read = f.readFileSync('p.txt', 'utf-8')      // read file (p.txt)
//         let name = input.question('Apna name dale : ')
//         let email = input.question('Apna email id dale : ')
//         if(email.includes("@")&&(email.includes(".com"))){
//             if (read.includes(email)) {                             // check (p.txt) file me email hai ya nahi .
//                 console.log('you have all ready signUp.Please login');
//             }
//             else{
//                 const prompt=require("prompt-sync")() 
//                 const ls1=["@","#","$","&"]; 
//                 const ls2=["1","2","3","4","5","6","7","8","9","0"];
//                 const ls3=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//                 const ls4=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//                 password=prompt("Apna Password dale  :-  ")
//                 // console.log(ls1.includes("&"));
//                 var aa=0;
//                 var b=0;
//                 var c=0;
//                 var d=0;
//                 for (i of password){
//                     // console.log(password[i]);
//                     if (ls1.includes(i) ){
//                         aa+=1
//                     }
//                     if(ls2.includes(i) ){
//                         b+=1
//                     }
//                     if (ls3.includes(i) ){
//                         c+=1
//                     }
//                     if(ls4.includes(i)){
//                         d+=1
//                     }
//                 }
//                 // //  how many uses spacial charector / number / small lettre / capital letter ?
//                 // if you show how many take (spacial charector,uses of number,Capital letter and Small letter) . comment out the console.log() |

//                 // console.log("spacial charector : ",aa,"\nuses of number : ",b,"\nCapital letter : ",c,"\nSmall letter : ",d);  
//                 if (aa>=1 && b>=1 && c>=1 && d>=1 && password.length>=8 && password.length<=16){
//                     console.log("your passwor is strong :-",password);
//                     let a = f.appendFileSync('p.txt', `${name},${email},${password}\n`)
//                     console.log('signUp seccessfully.');
//                 }else{
//                     // console.log("your password is week :-",password); // show week password 
//                     // console.log("spacial charector : ",aa,"\nuses of number : ",b,"\nCapital letter : ",c,"\nSmall letter : ",d);   // show how many uses 
//                     console.log("your password is week.");
//                     console.log(`Please Enter vailid password.\nGreter than 8 character and less than 16 character with using( Capital letter,Small letter,uses of number and spacial charector).`);
//                 }
//             }
//         }
//         else{
//             console.log('Please enter valid Email ID .');
//         }
        
//     }
//     else{
//         f.writeFileSync('p.txt','')     // file nahi hoga to phale file create karega .
//         create();
//     }
// }

// const login = function(){
//     let read = f.readFileSync('p.txt', 'utf-8')      // read file (p.txt)
//     let email = input.question('Apna email id dale : ')
//     let password = input.question('Apna Password dale : ')
//     if (read.includes(email)&& (read.includes(password))) {      // check (p.txt) me email, password hai ya nahi .
//         console.log('login succesfully.');
//     }
//     else{
//         console.log(`Invaild .please check Email and Password .`);
//     }
// }

// while(true){
//     console.log('1. signUp\n2. login\n3. Exst')
//     let a=input.questionInt("Enter your option :")
//     if (a===1){
//         create();
//     }
//     else if(a===2){
//         login();
//     }
//     else if (a==3){
//         console.log('you are going out of your page.')
//         break
//     }
// }

// ---------------------------------------------------------------------------------

// const f = require('fs')        // fs is a module .here fs means file system .
// const input=require('readline-sync')     // yah input name, email, password ke liye hai .

// const create=function(){
//     if(f.existsSync("p.json")){       // check the file hai ya nahi . Ager file hoga to if condition kam karega . Ager file naho hoga to else condition kam karega .  
//         let read = f.readFileSync('p.json', 'utf-8')
//         let convert=JSON.parse(read)
//         let name = input.question('Apna name dale : ')
//         let email = input.question('Apna email id dale : ')
//         if(email.includes("@")&&(email.includes(".com"))){
//             if (convert.includes(email)) {                             // check (p.txt) file me email hai ya nahi .
//                 console.log('you have all ready signUp.Please login');
//             }
//             else{
//                 const prompt=require("prompt-sync")() 
//                 const ls1=["@","#","$","&"]; 
//                 const ls2=["1","2","3","4","5","6","7","8","9","0"];
//                 const ls3=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//                 const ls4=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//                 let password=prompt("Apna Password dale  :-  ")
//                 // console.log(ls1.includes("&"));
//                 var aa=0;
//                 var b=0;
//                 var c=0;
//                 var d=0;
//                 for (i of password){
//                     // console.log(password[i]);
//                     if (ls1.includes(i) ){
//                         aa+=1
//                     }
//                     if(ls2.includes(i) ){
//                         b+=1
//                     }
//                     if (ls3.includes(i) ){
//                         c+=1
//                     }
//                     if(ls4.includes(i)){
//                         d+=1
//                     }
//                 }
//                 // //  how many uses spacial charector / number / small lettre / capital letter ?
//                 // if you show how many take (spacial charector,uses of number,Capital letter and Small letter) . comment out the console.log() |

//                 // console.log("spacial charector : ",aa,"\nuses of number : ",b,"\nCapital letter : ",c,"\nSmall letter : ",d);  
//                 if (aa>=1 && b>=1 && c>=1 && d>=1 && password.length>=8 && password.length<=16){
//                     console.log("your passwor is strong :-",password);
//                     let a = f.appendFileSync('p.txt', `${name},${email},${password}\n`)
//                     console.log('signUp seccessfully.');
//                 }else{
//                     console.log("your password is week :-",password);
//                     console.log(`Please Enter vailid password.\nGreter than 8 character and less than 16 character with using( Capital letter,Small letter,uses of number and spacial charector).`);
//                 }
//             }
//         }
//         else{
//             console.log('Please enter valid Email ID .');
//         }
        
//     }
//     else{
//         f.writeFileSync('p.txt','')     // file nahi hoga to phale file create karega .
//         create();
//     }
// }

// const login = function(){
//     let read = f.readFileSync('p.txt', 'utf-8')      // read file (p.txt)
//     let email = input.question('Apna email id dale : ')
//     let password = input.question('Apna Password dale : ')
//     if (read.includes(email)&& (read.includes(password))) {      // check (p.txt) me email, password hai ya nahi .
//         console.log('login succesfully.');
//     }
//     else{
//         console.log(`Invaild .please check Email and Password .`);
//     }
// }

// while(true){
//     console.log('1. signUp\n2. login\n3. Exst')
//     let a=input.questionInt("Enter your option :")
//     if (a===1){
//         create();
//     }
//     else if(a===2){
//         login();
//     }
//     else if (a==3){
//         console.log('you are going out of your page.')
//         break
//     }
// }

// -------------------------------------------------------login / signup with json file ?
// const fs=require("fs");
// var inp=require('readline-sync');
// const l=[]
// function choose(){
//     let select=inp.questionInt("press 1 for signup\npress 2 for login\nenter : ")
//     if(select===1){
//         return signup();
//     }else if(select===2){
//         return login();
//     }
//     function signup(){
//         if(fs.existsSync("file.json")){
//             let newdata=(fs.readFileSync("file.json","utf-8"));
//             let convert=JSON.parse(newdata)
//             var ask=inp.question("enter the email Id for check that it present or not : ")
//             if(ask.includes("@")&&(ask.includes(".") )){
//                 let check=true;
//                 for(let i in convert){
//                     if(convert[i]["userId"]===ask){
//                         check=false;
//                         console.log("Already present!!!!!")
//                     }
//                 }
//                 if(check){
//                     jsnData_fil_se_yaha=JSON.parse(newdata)
//                     console.log("!!!!!!!! No name is found please register yourself first!!!!!!!!!1")
//                     const biodata={
//                         userId:ask,
//                         name:inp.question("enter the name : "),
//                         city:inp.question("enter the city : "),
//                         language:inp.question("enter the language : "),
//                         pass:inp.question("enter the password : ")
                        
                        

//                     }
//                     if(biodata.pass.includes("@")&&(biodata.pass.includes('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')&&('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||'P'||'Q'||'R'||'S'||'T'||'U'||'V'||'W'||'X'||'Y'||'Z'))){ 
//                         jsnData_fil_se_yaha.push(biodata)
//                         let m=JSON.stringify(jsnData_fil_se_yaha,null,3) 
//                         fs.writeFileSync("file.json", m)
//                         console.log("!!!!!!!!!! Successfully registered !!!!!!!!!!!")
//                         choose()
//                     }
//                     else{
//                         console.log("ups!!!!!! something wrong in password use number ,'@' and capital letter atleast one ")
//                     }
//                 }
//             }
//             else{
//                 console.log("!!!!!!! please enter valid email id !!!!!!!!!!!!")
//                 choose()
//             }
//         }     
//         else{
//             fs.writeFileSync("file.json", JSON.stringify(l))
//             signup()
//         }
//     }
//     function ex(){
//         console.log("existed!!!!!!!!!")
//     }
//     function login(){
//         let READ=JSON.parse(fs.readFileSync("file.json","utf-8"));
//         let dataCheck=inp.question("enter registered the Id : ")
//         let passmatch=inp.question("enter the password : ")
//         let check=true;
//         for(let i of READ){
//             if((i["userId"]===dataCheck) && (i["pass"]===passmatch)){
//                 check=false;
//                 console.log(i)
//                 console.log('here is the con...');
//                 choose()
//             }
//         }
//         if(check){
//             console.log("Didn't match!!!!!!!!!!")
//             choose()
//         }
//     }
 
// }
// choose();