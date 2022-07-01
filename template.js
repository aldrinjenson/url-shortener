const generateTemplate = ({ url }) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a
      href="${url}"
    ></a>
    <script>
      const link = document.querySelector("a");
      link.click();
    </script>
  </body>
</html>
`;
};

module.exports = { generateTemplate };
