// ********************************************** ? 

// Isme customer jitne bhi doctype same hai uske member jod kr kr hi me member likho
// Or sabne role name ka key pass kro or uski value doctype pr depend krti hai

// Agr doctype member hai to role ki value 4 hogi, agr customer hai 3, agr user hai to 2, agr company hai to 1, client hai to 5

// const a=[
//     {
//         data: {
//             rows: [
//                 { doctype: "customer", members: 50 },
//                 { doctype: "user", members: 20 },
//                 { doctype: "client", members: 45 },
//                 { doctype: "user", members: 21 },
//                 { doctype: "company", members: 11 },
//                 { doctype: "customer", members: 05 },
//                 { doctype: "member", members: 57 },
//             ],
//             Id: "62727hshs",
//         },
//         status: 200,
//     },
// ];
// ----------------------------
// var b={}
// a[0].data.rows.map(x=>{
// if(!b[x.doctype]){
// b[x.doctype]=x.members
// }
// else{
// b[x.doctype]+=x.members
// }
// })
// console.log(b);

// --------------------------

// let lis = []
// a[0].data.rows.map(x => {
//     lis.push(x)
// })

// // console.log(lis);
// let newArr = [];
// let list = [...lis];
// for (let i in lis) {
//     let addedList = [];
//     for (let j in list) {
//         if (lis[i].doctype === lis[j].doctype && i !== j) {
//             let newObj = { doctype: lis[i].doctype, members: lis[i].members + lis[j].members };
//             newArr.push(newObj)
//             newObj = {}
//         }
//         // if (lis[i].doctype !== lis[j].doctype) {
//         //     addedList.push(list[j])
//         // }

//     }
//     // list = addedList;
// }
// console.log(newArr);

// **********************************************************
//  -----------------------------------------find total work in a month ?

// const a = {  // [{},{},{},{},{}]
//     ram: { start: "01-08-2001", end: "10-07-2005" },
//     neha: { start: "12-01-2003", end: "11-07-2008" },
//     raj: { start: "02-01-2006", end: "11-07-2009" },
//     vinod: { start: "17-08-2001", end: "11-02-2004" },
//     anjana: { start: "30-01-2007", end: "11-07-2008" },
//     vibha: { start: "15-01-2005", end: "21-09-2010" },
// };
// ------------------------------------ output .
// Object.values(a).map((ele)=>{
//     // console.log(ele["start"].split("-"))
//     let start_date = ele["start"].split('-')
//     let end_date = ele['end'].split("-")

//     let month = (12-Number(start_date[1]))+ Number(end_date[1])
//     let year = Number(end_date[2]) - Number(start_date[2])
//     let total = (year -1) *12 + month
//     console.log(total);
// })

// Object.values(a).map(ele)=>{
//     console.log();
// }

//  ----------------------------------------
// const a={"nidhi":[70,25,30],"abhishek":[45,100,80],"shanti":[40,60,90],"avinash":[30,50,70]} 
// // output : 185 , 235 , 270
// let b=[0,0,0]
// for (let i in a){
//     for (let j in a[i])
//     b[j]+=a[i][j]
// }
// console.log(b);

//------------------------------

// var a=[{ "data": { "rows": [{ "doctype": "customer", "members": 50 }, { "doctype": "user", "members": 20 }, { "doctype": "client", "members": 45 }, { "doctype": "user", "members": 21 }, { "doctype": "company", "members": 11 }, { "doctype": "customer", "members": 05 }, { "doctype": "member", "members": 57 }], Id: "62727hshs" }, status: 200 }]

//------------------------------

// var a=[
//     {
//         data: {
//             rows: [
//                 { doctype: "customer", members: "50" },
//                 { doctype: "user", members: 20 },
//                 { doctype: "client", members: 45 },
//                 { doctype: "user", members: 21 },
//                 { doctype: "company", members: 11 },
//                 { doctype: "customer", members: 05 },
//                 { doctype: "member", members: "57" },
//             ],
//             Id: "62727hshs",
//         },
//         status: 200,
//     },
// ]
//----------------------------------

// const dataArray = [1, 2, 3, 4, 5];

// const jsonData = JSON.stringify(dataArray);

// // Node.js example
// const fs = require('fs');

// fs.writeFile('data.json', jsonData, function (err) {
//   if (err) throw err;
//   console.log('Data written to file');
// });