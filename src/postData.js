Pebble.addEventListener("ready",
  function(e){
    console.log("Javascript app ready and running!");
  }
);

Pebble.addEventListener('appmessage',
  function(e) {
    console.log('Received message: ' + JSON.stringify(e.payload));
      console.log(e.payload.mtype);
    switch(e.payload.firstKey){
      case 1:
         console.log("I don't know what to do with case 1?"); // haha what
        var req1 = new XMLHttpRequest();
        req1.open('GET', 'https://slack.com/api/chat.postMessage?token=xoxp-7213939015-8008024306-8080898515-243d00&channel=%23top-kek&text=BOT%3A%20This%20is%20a%20test%20buddy&pretty=1', true);
        req1.onload = function(e){
          // do stuff.exe
        };
        req1.send(null);
        // doStuff(); .avi.gif.jpeg.zip.exe -- ACTUALLY NOT A VIRUS!1!.pepe.c.js.html.bmp ... "what's a bitmap?! guYS MC RECIPES HALP MC IS GETITNG DDOS SNED HLEP!"
            
        break;
        case 0:
            console.log("Two");
            break;
    }
  }
);

Pebble.addEventListener('showConfiguration', function(e) {
  // Show config page
  Pebble.openURL('http://edwinfinch.github.io/configscreen-simplyclean/');
});