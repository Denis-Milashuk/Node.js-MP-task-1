import 'events'
const { Transform } = require('stream');

const transformStream = new Transform();
transformStream._transform = (chunk: { toString: () => string; }, encoding: any, callback: () => void) => {
    let reversedString = chunk.toString().split('').reverse().join('').replace('\n', '') + '\n';
    transformStream.push(reversedString);
    callback();
};

process.stdin.pipe(transformStream).pipe(process.stdout)


