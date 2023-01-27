const fs = require("fs");
const urls = require("./urls.json");
const { generateTemplate } = require("./template");

const buildFolder = "build";

if (fs.existsSync(buildFolder)) {
  fs.rmSync(buildFolder, { recursive: true });
  console.log("deleting existing folder");
  fs.mkdirSync(buildFolder, () => {
    console.log("new folder created");
  });
} else {
  fs.mkdirSync(buildFolder, () => {
    console.log("folder created");
  });
}

const copyFiles = () => {
  urls.forEach(async ({ slug, url }) => {
    const folderName = `${buildFolder}/${slug}`;
    const fileName = `${folderName}/index.html`;
    fs.mkdirSync(folderName);
    const generatedHtml = generateTemplate({ url });
    fs.writeFile(fileName, generatedHtml, () => {
      console.log(`${slug} file written`);
    });
  });

  fs.copyFile("static/index.html", "build/index.html", (err) => {
    if (err) throw err;
    else console.log("index.html written");
  });
};

copyFiles();
