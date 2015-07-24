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
            
            var name = localStorage.getItem('name');
            var channel = localStorage.getItem('channel');
            var text = localStorage.getItem('text');
            var imageURL = localStorage.getItem('imageURL');
            
            console.log(name + ":" + channel + ":" + text +  ":" + imageURL);
            console.log(encodeURI(name) + ":" + encodeURI(channel) + ":" + encodeURI(text) +  ":" + encodeURI(imageURL));
            console.log("http://slack.com/api/chat.postMessage?token=xoxp-7213939015-8008024306-8080898515-243d00&channel=" + encodeURI(channel) + "&text=" + encodeURI(text) + "&username=" + encodeURI(name) + "&pretty=1");
            if (name !== null & name !== "") {
                var req1 = new XMLHttpRequest();
                req1.open('GET', 'https://slack.com/api/chat.postMessage?token=xoxp-7213939015-8005854450-8065247734-2d7ab5&channel=%23' + channel + '&text=' + encodeURI(text) + '&username=' + encodeURI(name) + '&pretty=1', true);
                req1.onload = function(e){};
                req1.send();
            
            }
            else {
                console.log("There was no name for the text");
            }
        
        break;
        case 0:
            console.log("Two");
            break;
    }
  }
);

Pebble.addEventListener('showConfiguration', function(e) {
    // Show config page
    console.log("Opening config webpage");
    
    Pebble.openURL('http://spiritman110.github.io/SlackMessenger/');
    
});

Pebble.addEventListener("webviewclosed", function (e) {
    console.log("Configuration closed");
    console.log("Response = " + e.response.length + "   " + e.response);
    if (e.response !== undefined && e.response !== '' && e.response !== 'CANCELLED') {
		console.log("User hit save");
		var values = JSON.parse(decodeURIComponent(e.response));
		console.log("stringified options: " + JSON.stringify((values)));
		if(values.name){
            console.log("I got the name " + values.name + "And channel " + values.channel);
			localStorage.setItem("name", values.name);
            localStorage.setItem("channel", values.channel);
            localStorage.setItem("text", values.text);
            localStorage.setItem("imageURL", values.imageURL);
		Pebble.sendAppMessage(
			values
		);
	}
    }});