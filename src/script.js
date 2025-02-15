function Timer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        remaining -= Date.now() - start;
    };

    this.resume = function() {
        start = Date.now();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
}

var discussion = [
  /*{
    delay: 4000,
    offsetDelay: 250,
    mode: "wizz",
  },
  {
    name:"Megan",
    delay: 4500,
    offsetDelay: 250,
    mode: "webcam",
  },*/
  {
    name:"S@m",
    text:"I feel so close 2 u",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"hope we can mirl 1 day",
    delay: 2500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"Me too !",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/>",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"I'd love to visit Paris with u",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"What did you do 2day?",
    delay: 5500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"I went 2 the movies",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"I seen Transformers!",
    delay: 3000,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"Really? Did u like it?",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"it was gr8",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"You know I act in the film?",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"rlly? Ure an actress?",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"who r u playing?",
    delay: 3000,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"Guess who?",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"My name is Megan, did you forget?",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"lol",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"u got me",
    delay: 2500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"I'm not joking",
    delay: 4000,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"I am Megan Fox.",
    delay: 3000,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"I want a proof",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"<img class='img' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/meganMSN3.png'/><label class='grey'>0003923.jpg (345ko)</label>",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"This pic comes from the internet.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"I took it one minute ago.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"Stop it now.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    delay: 4500,
    offsetDelay: 250,
    mode: "webcam",
  }
];



var discussion2 = [
  {
    name:"Megan",
    text:"<img class='img' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/meganMSN3.png'/><label class='grey'>0003923.jpg (345ko)</label>",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"This pic comes from the internet.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    text:"I took it one minute ago.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@m",
    text:"Stop it now.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Megan",
    delay: 4500,
    offsetDelay: 250,
    mode: "webcamend",
  },
  {
    delay: 4000,
    offsetDelay: 250,
    mode: "wizz",
  },
  {
    name:"Megan",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
    text: "I'm in Paris this week. Let's meet up.",
  },
  {
    delay: 4000,
    offsetDelay: 250,
    mode: "wizz",
  }
];



var audioElement = document.createElement('audio');
var audioWizz = document.createElement('audio');
document.createElement('audioElement');
document.createElement('audioWizz');
audioElement.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/msnsound.mp3');
audioWizz.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/nudge%20(online-audio-converter.com).mp3');


  var isAudioActivated = true;

audioElement.addEventListener('ended', function() {
  this.pause();
}, false);

audioWizz.addEventListener('ended', function() {
  this.pause();
}, false);

var randomIntFromInterval = function(min,max) { return Math.floor(Math.random(23)*(max-min+1)+min); }

var chatContainer = $('.chat-container');
var height = 0;
var totalHeight = 10000;
var totalDelay = 0;
var className = "";
var hasNotReachTheEnd = false;

timers = []

var currentDisscusion = discussion2;

currentDisscusion.map(function(object, i) {
  totalDelay += object.delay;
  timers[i] =  new Timer(function() {
    
    if(i == currentDisscusion.length) {
       hasNotReachTheEnd = true;
    }
    
    if (object.mode == "wizz") {
      if (isAudioActivated)
        audioWizz.play();
      $(".chat").addClass("wizz");
      $("#discussion").append("<li class=" + className + "><label>Megan vous à envoyé un wizz</label></li>");

      window.setTimeout(function(){
      $(".chat").removeClass("wizz");
      }, 500);
    }
    if (object.mode == "webcam") {
      $("#discussion").append("<li class='grey chat-video'><br/>"+object.name+" vous demande de lancer un chat vidéo.</label><br/> </label> <a id='ok' href='#' class='link'><label class='blue'> Accepter</label><label class='grey'>&nbsp;(Alt-C)</label></a> <a href='#'  class='link'><label class='blue'> Refuser</label><label class='grey'>&nbsp;(Alt-D)</label></a> </li>");
      $("#ok").click(function() {
        console.log("1");
        $("#webcam-live-stream").addClass("open");
      });
      chatContainer.scrollTop(chatContainer[0].scrollHeight);
    }
    
    if (object.mode == "webcamend") {
      $("#discussion").append("<li class='grey chat-video'>Chat vidéo terminé.</label><br/></li>");
      chatContainer.scrollTop(chatContainer[0].scrollHeight);
    }
    
    if (object.mode == "message") {
      if(object.name == "S@m") {
        className = "one";
      }
      else {
        className = "two";
      }
      if(currentDisscusion[i - 1] && object.name == currentDisscusion[i - 1].name) {
        $("#discussion").append("<li class=" + className + ">"+ object.text +"</li>");
        chatContainer.scrollTop(chatContainer[0].scrollHeight);
      }
      else {
        $("#discussion").append("<li class=" + className + "><label class='name-of'>"+ object.name +" :</label><label>"+ object.text +"</label></li>");
        chatContainer.scrollTop(chatContainer[0].scrollHeight);
      }

      if(object.name == "Megan" && hasNotReachTheEnd) {
        $(".is-writting").text(object.name + " is typing...");
        chatContainer.scrollTop(chatContainer[0].scrollHeight);
      }
      else {
        $(".is-writting").text("Last message recieved at " + moment(new Date()).format("h:mm a") + " on " + moment(new Date()).subtract(12, "years").format("L"));
        chatContainer.scrollTop(chatContainer[0].scrollHeight);
      }

      if(object.name == "Megan" && isAudioActivated) {
        audioElement.play();
      }

    }
    chatContainer.scrollTop(chatContainer[0].scrollHeight);
    
  timers.shift();
  

  }, totalDelay);
});

console.log(timers);

$("html").ready(function(){
  $(window).height();
  $(window).width();
  $("#webcam-live-stream").append("<style>.webcam.open {width:"+$(window).width()+"px;height:"+ $(window).height() +"px}</style>")
});

var isPaused = false;
var i = 0;


$(window).keypress(function (e) {
  
  console.log(e.key);
  
  if(e.key == "Enter") {
    e.preventDefault()
    $("#writing-box").text("");
    document.getElementsByClassName('.writing-box')[0].innerHTML='';
  }
  
  if (e.key === '16') {
    console.log("tototot");
    // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
    e.preventDefault()

    timers.map(function(object) {
      i++;
      if(isPaused) {
        object.resume();
          console.log(1);
        if(timers.length === i) {
          console.log(11);
          i = 0;
          isPaused = false;
          console.log('play');
        }
      } 
      else {
        object.pause();
        console.log(2); 
        if(timers.length === i) {
          console.log(22);
          i = 0;
          isPaused = true; 
          console.log('pause');
        }
      } 
   }); 
    
  };
  
});
