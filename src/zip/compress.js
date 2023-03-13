import { createReadStream} from "fs";
import { createWriteStream} from "fs";
import path from "path"
import { pipeline } from "stream";
import * as url from "url"
import { createGzip} from "zlib";

const _dirname = url.fileURLToPath(new URL(".", import.meta.url))
const filesPath = path.join(_dirname, "files", "fileToCompress.txt")

const compress = async () => {
    const read = createReadStream(filesPath,"utf-8")
    const arc = createGzip()
    const write = createWriteStream(path.join(_dirname, "archive.gz"));

    
    try {
        read.pipe(arc).pipe(write)
        console.log("Archieve was made")
    } catch (err) {
        console.log(err.message)
    }
};

await compress();