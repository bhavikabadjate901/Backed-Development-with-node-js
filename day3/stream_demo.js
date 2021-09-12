var fs = require('fs')
const transformStream = require('stream');
const zlib = require('zlib');


let zipper = zlib.createGzip()
let archiver = zlib.createGunzip();
let inputStream = fs.createReadStream(__dirname+ "/input.txt");
let outputStream = process.stdout;
let targetStream = fs.createWriteStream(__dirname + "/output.txt");


let midStream = new transformStream.Transform({
    transform(chunk, enc, nextCB){
        this.push(chunk.toString().toUpperCase());
        setTimeout(nextCB, 5000);
    }
})



inputStream.pipe(midStream).pipe(targetStream);
