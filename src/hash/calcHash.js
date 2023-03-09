import fs from "fs/promises";
import url from "url";
import {createHash, createHmac} from "crypto";

const calculateHash = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url));
    let data = await fs.readFile("src/fs/files/fileToRead.txt", "utf8");
    console.log(createHmac('sha256', data).update(data).digest('hex'));
};

await calculateHash();