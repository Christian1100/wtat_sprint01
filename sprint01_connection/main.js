const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
   };

   const port = 3000,
 http = require("http"),
 httpStatusCodes = require("http-status-codes"),
 router = require("./router"),
 fs = require("fs"),
 plainTextContentType = {
 "Content-Type": "text/plain"
 },
 htmlContentType = {
 "Content-Type": "text/html"
 },
 customReadFile = (file, res) => {
 fs.readFile(`./${file}`, (errors, data) => {
if (errors) {
console.log("Error reading the file...");
}
res.end(data);
 });
 };
router.get("/", (req, res) => {
 res.writeHead(httpStatusCodes.OK, plainTextContentType);
 res.end("INDEX");
});
router.get("/index.html", (req, res) => {
 res.writeHead(httpStatusCodes.OK, htmlContentType);
 customReadFile("views/index.html", res);
});
router.post("/", (req, res) => {
 res.writeHead(httpStatusCodes.OK, plainTextContentType);
 res.end("POSTED");
});
http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number:
➥ ${port}`);