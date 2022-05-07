import {ReadStream, WriteStream} from "fs";

const csv = require('csvtojson');
const path = require('path')
const fs = require('fs')

const txtFileFolder: string = path.resolve(__dirname, "../../", ".txt");

const readCsv = async () => {
    await fs.mkdir(txtFileFolder, {recursive: true}, (err: any) => {
        if (err) {
            console.log('Error while create file')
            throw err;
        }
    });
    const readStream: ReadStream = fs.createReadStream(path.resolve(__dirname, "../../.csv", "nodejs-hw1-ex1.csv"));
    const writeStream: WriteStream = fs.createWriteStream(path.resolve(txtFileFolder, "file.txt"));
    readStream.pipe(csv()).pipe(writeStream);
}

readCsv()
    .then(() => console.log('Csv file have been read'))
    .catch(error => console.log(error))