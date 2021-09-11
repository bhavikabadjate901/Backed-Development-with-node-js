import { readFile, writeFile } from 'fs/promises'

// let template1 = readFile(new URL('./template.html', import.meta.url),'utf-8');
let template = await readFile(new URL('./template.html', import.meta.url), 'utf-8');


// template.then(() =>{
//     console.log(template);
// } )


console.log(template);


// console.log("...........................")
// process.stdin.write(template1);  // which prints direct template in console


const templateData = {
    title: 'Bhavika',
    body: 'Node Study'
}

for(const [k, v] of Object.entries(templateData)) {
    template = template.replace(`{{${k}}}`, v);
}

// for(const [k, v] of Object.entries(templateData)){
//     template = template.replace(`{{${k}}}`, v);
// }

console.log(template);

await writeFile(new URL('./index.html',  import.meta.url), template);