
<img src="https://raw.githubusercontent.com/twiggybuffalo/captain/master/images/captain.svg?sanitize=true" height="200"/>

# Captain
A lightweight express middleware logger with little functionality.

## How to use it

Its really simple simply add *captain* as a middleware matee

```javascript
var express = require("express");
var captain = require("captain")

var app = express();

var port = process.env.PORT || 9000;

app.use(captain);

app.listen(port, function(){
  console.log("Server is running on port " + port);
});
```

## Results

And there ya go! all network requests will be logged meaning you have more time to scrub the poop decks...


<img src="https://raw.githubusercontent.com/twiggybuffalo/captain/master/images/screen.png"/>

