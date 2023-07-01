// import { readFile } from "fs";

// //for normal cases call backs were used

// readFile(new URL(app.mj, import.meta.url),'utf-8', (err, data) => {
//     if(err){
//         throw err
//         // console.error(err)
//     }else{

//     }
// })

// import { readFile } from "fs/promises";

// //for normal cases call backs were used

// try {
//     const result = readFile(new URL(app.mj, import.meta.url),'utf-8')
// } catch (error) {
//     // throw error if u throw it app will crash
// }



process.on('uncaughtException', (e) => {
    console.log(e)
})
const result = readFile(new URL(app.mj, import.meta.url),'utf-8')
console.log('hello')

