import fs from "fs/promises";
import url from "url";

const read = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url));
    let data = await fs.readFile("src/fs/files/fileToRead.txt", "utf8", (err) =>
    {
    if (err)
        {
            throw new Error ("FS operation failed");
        }
        else
        {
            console.log("File was readen");
        }
    });
    console.log(data);
};

await read();