import fs from "fs/promises";
import url from "url";

const rename = async () => {
    let dirname = url.fileURLToPath(new URL(".", import.meta.url));
    await fs.rename("src/fs/files/wrongFilename.txt", "src/fs/files/wrongFilename.md", (err) =>
    {
    if (err)
        {
            throw new Error ("FS operation failed");
        }
        else
        {
            console.log("File was renamed");
        }
    }
    );
};

await rename();