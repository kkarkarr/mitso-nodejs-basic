import fs from "fs/promises";
import url from "url";



const copy = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url));
    await fs.copyFile("src/fs/files", "src/fs/files_copy", (err) =>
    {
        if (err)
        {
            throw new Error ("FS operation failed");
        }
        else
        {
            console.log("Files were copied");
        }
    }
    );
}


await copy();
