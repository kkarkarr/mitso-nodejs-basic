import { createReadStream} from "fs";
import { createWriteStream} from "fs";
import path from "path"
import * as url from "url"
import { createUnzip} from "zlib";

const _dirname = url.fileURLToPath(new URL(".", import.meta.url))
const filesPath = path.join(_dirname, "archive.gz")

const decompress = async () => {
    const read = createReadStream(filesPath)
    const arc = createUnzip()
    const write = createWriteStream(path.join(_dirname,"fileToCompress.txt"), {
        encoding: "utf-8"
    })

    try {
        read.pipe(arc).pipe(write)
        console.log("Archieve was dearchieved")
    } catch (err) {
        console.log(err.message)
    }
};

await decompress();