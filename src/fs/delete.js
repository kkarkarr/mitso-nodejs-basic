import fs from "fs/promises";
import * as url from "url";

const remove = async () => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    await fs.unlink("src/fs/files/fileToRemove.txt", (err) =>
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log("File was deleted");
        }
    }); 
};

await remove();