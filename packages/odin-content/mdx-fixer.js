const fs = require("fs");
const glob = require("glob");

const modifyImgTag = (match) => {
  if (!match.endsWith("/>")) {
    return match.replace(">", " />");
  }
  return match;
};

function fixImgTag(mdxContent) {
  return mdxContent.replace(/<img[^>]*>/g, (match) => {
    modifyImgTag(match);
  });
}

// Find all .md files in the current directory and its subdirectories
glob("**/*.md", function (err, files) {
  if (err) {
    console.error("Error while finding .md files:", err);
    return;
  }

  // For each .md file...
  files.forEach(function (file) {
    // Read the file
    fs.readFile(file, "utf8", function (err, data) {
      if (err) {
        console.error("Error while reading file:", file, err);
        return;
      }

      // Replace the inline styles with style objects
      const newData = data.replace(/style="([^"]*)"/g, function (match, styleString) {
        // Split the style string into property-value pairs
        const stylePairs = styleString.split(";").filter(Boolean);
        // Convert the property-value pairs into a style object
        const styleObject = stylePairs.reduce((obj, pair) => {
          const [property, value] = pair.split(":").map((str) => str.trim());
          const camelCaseProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          obj[camelCaseProperty] = value;
          return obj;
        }, {});
        // Convert the style object to a string
        const styleObjectString = JSON.stringify(styleObject);
        return `style={${styleObjectString}}`;
      });

      // fix img tag

      // Write the new data back to the file
      fs.writeFile(file, newData, "utf8", function (err) {
        if (err) {
          console.error("Error while writing file:", file, err);
        }
      });
    });
  });
});
