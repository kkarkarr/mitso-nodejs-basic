import fs from "fs/promises";
import * as url from "url";

const list = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url));
    let files = await fs.readdir("src/fs/files", (err) =>
    {
        if (err)
        {
            throw new Error ("FS operation failed");
        }
        else
        {
            console.log(files);
        }
    });
};

await list(); 