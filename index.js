const fs = require('fs');
//const work = require('./input/work.json');
const work = {
        "file": "./images/GBTC.png",
        "output": [
            "ETHE",
            "LTCN",
            "ETCG",
            "BCHG",
            "GDLC"
        ]
}

const cloneImage = (work) => {
    for(job of work.output){
        console.log(`Cloning ${job}`)
        let inStr = fs.createReadStream(work.file);
        let outStr = fs.createWriteStream(`./images/DL/${job}.jpg`);
        inStr.pipe(outStr);
    }
}

console.log(work.output)

cloneImage(work);
