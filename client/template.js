//This is the page template
export default function() {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0'>
        <link href="https://fonts.googleapis.com/css?family=Poppins|Sunflower:300" rel="stylesheet">
        <title>Dow Jones React Tutorial</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="text/javascript" src="assets/vendor.js"></script>
        <script type="text/javascript" src="assets/app.js"></script>
        <script type="application/json" src="moment.js"></script>
      </body>
    </html>
  `
};
