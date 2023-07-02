#! /usr/bin/env node

// console.log('hello world from reddit')
import fetch from "node-fetch";
import open from 'open';
import yargs from "yargs";

// console.log(process.argv)

const {argv} = yargs(process.argv);

const res = await fetch('https://www.reddit.com/.json');
const data = await res.json()

// console.log(data)
const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)];


if (argv.print) {
    console.log(`
      Title: ${randomPost.data.title}\n
      Link: ${randomPost.data.permalink}
    `)
}else{
    //open in browser if not
    open(`https://reddit.com${randomPost.data.permalink}`)

}

