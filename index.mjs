// // alert('hello'); browser feature
// // console.log('hello')

// // console.log(global)
// // console.log(__dirname, __filename)
// // console.log(process)
// //process is like everything about the environment stored

// //process.env or something comes from here lets say in react it gets 
// //processed before the browser sees then as the build tools run in node js

// // const module = (function(){
// //     var me = 'hello';
// //     return {}
// // }())


// const action = () => {
//     console.log('hello')
// }

// module.exports = action
// // module.exports = {action}


import {readFile, writeFile} from 'fs/promises';
// console.log(fs)
//in common js
//import path from 'path'
//readFile(path.join(__dirname, 'template.html')) this would work in common js
//but not here because __dirname is global only in common js and not 
//in this module one


// const template = await readFile(new URL('template.html', import.meta.url))

// console.log(template) returns a buffer liek straming the file

// console.log(template.toString())
//or use the second argument in readFile as utf-8 
let template = await readFile(new URL('template.html', import.meta.url),'utf-8')


const data = {
    title: 'learn node js',
    body: 'this is the final html'
}

for(const [k,v] of Object.entries(data)){
    template = template.replace(`{${k}}`,v)
}
// console.log(template) 

await writeFile(new URL('index.html', import.meta.url), template)
