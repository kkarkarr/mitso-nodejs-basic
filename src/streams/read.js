import fs from "fs"
import {stdout} from "process"

const read = async () => {
    const streamIn = fs.createReadStream("src/streams/files/fileToRead.txt", "utf-8");
    let data = "";
    streamIn.on("data", chunk => data = data + chunk);
    process.on("exit", code =>{
        if(code === 0){
            stdout.write(data);
        }
        else{
            throw new Error ("Error!")
        }
    })
};

await read();