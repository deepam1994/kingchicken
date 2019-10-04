const fs = require("fs");

// creatng a function to handle the request and response from the client and server
const methodOfRouting = (req, res) => {
  //console.log(req);
  //process.exit();
  const url = req.url;
  const method = req.method;
  //if url has nothing which means it has only localhost:3000 then below code will execute.
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Welcome To Node.js Section</title></head>");
    res.write(
      "<body><form action ='/message' method = 'POST'><input type='text' name ='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end(); //it should stop the condition here
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk); // getting values from user and pushing into the array.
    });
    return req.on("end", () => {
      const value = Buffer.concat(body).toString();
      console.log(value);
      var valueDate = value.split("=")[1];
      valueDate = valueDate.replace("+", " ");
      fs.writeFile("Demo.txt", valueDate, err => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end(); //it should stop the condition here
      });
    });
  }
  //if we pass any value to the textbox and press submit then automatically below code will execute.
  res.setHeader("content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello App.js</title></head>");
  res.write("<body><h1>Hello from Node.js Code</h1></body>");
  res.write("</html>");
  res.end();
};

//module.exports = methodOfRouting; //exporting here to app.js

//module.exports.handler = methodOfRouting;
//module.exports.someText = 'Completed the Node.js Basics';

exports.handler = methodOfRouting;
exports.someText = "Completed the Node.js Basics";
