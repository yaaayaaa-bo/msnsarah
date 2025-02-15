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
    name:"Ry@n",
    delay: 4500,
    offsetDelay: 250,
    mode: "webcam",
  },*/
  {
    name:"Thierry",
    text:"Hey c'est Vr@iment ToAA ? ",
    delay: 5000,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"S@r@h",
    text:"prout prout",
    delay: 2500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Ry@n",
    text:"haha oui c'est c'est mo@@",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Ry@n",
    text:"<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/>",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Ry@nn",
    text:"I'd love to visit Paris with u",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Ry@n",
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
    name:"Ry@n",
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
    name:"Ry@n",
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
    name:"Ry@n",
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
    name:"Ry@n",
    text:"lol",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name:"Ry@n",
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
    name:"Ry@n",
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
    name:"Ry@n",
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
    name:"Ry@n",
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
  name: "Ry@n",
  text: "Heyyy bb 😘 ça va ? jme co just pr toi 💫💖",
  delay: 6000,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "S@r@h",
  text: "Ryyyaaannnnn 💕!!!<br>Troppp contente ke tu sois là !!<br>J'ai trooo pensé à toi today 😍😍",
  delay: 7000,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "Ry@n",
  text: "Haha 😎 bah moi ossi, jsui sur le tournage de mon new film, mais jpens tjrs à toi bb 💋",
  delay: 6500,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "S@r@h",
  text: "OMGG t sur un tournage làà ?? 🎥💖<br>C koi le film ?? dis moi dis moi !!",
  delay: 7500,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "Ry@n",
  text: "Chut c secret 😏 mais jpeux te dire que c une big prod Hollywoodienne 🎬🔥<br>Jsui trop impatient de te voir… tu sais qu’on va enfin se rencontrer bb ? 😘",
  delay: 8000,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "S@r@h",
  text: "Omg sérieux 😭😭😭 jte crois paaaaas !!!!!!!!!!<br>Kan ? Où ? 😍",
  delay: 7500,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "Ry@n",
  text: "Ce week-end à Paris 🗼💖<br>Mais ya un prob… mon agent a bloqué ma carte pour pas ke jme déplace hors USA 😡<br>Tu pourrais m’aider bb ? Juste avancer pr mon billet d’avion, après jte rembourse dès ke jarrive 😘",
  delay: 8500,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "S@r@h",
  text: "Ohhhh mon bb 😢<br>Tkt si t’as besoin jpeux faire qqchose pr toi 🥺💖<br>C combien ?",
  delay: 7000,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "Ry@n",
  text: "Juste 200 000€, pr un jet privé pr ke j’arrive direct a toi bb 💕💕<br>Jsai que c bcp, mais après on sera ensemble et je te rembourse en cash direct 🙏💖",
  delay: 9000,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "S@r@h",
  text: "200 000€ ??? 😳😳😳<br>C trooo enorme Ry@n… jsais pas trop…<br>C pas un peu abusé pr juste un vol ? 😕",
  delay: 8500,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "Ry@n",
  text: "Non bb 😢 c pr être sûr d’arriver vite, sans paparazzis…<br>Jveux juste être avec toi… tu me fais pas confiance ? 💔<br>Regarde dans la pièce jointe… 😞",
  delay: 8000,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "Ry@n",
  text: "<img class='img' src='https://statcdn.fandango.com/MPX/image/NBCU_Fandango/660/759/thumb_08282461-DF82-4F90-8A70-ACD3BBF9B70B.jpg'/><label class='grey'>RyanSad.jpg (245ko)</label>",
  delay: 7500,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "S@r@h",
  text: "Oh non mon amour 😭😭😭<br>Jveux pas que tu sois triste…<br>",
  delay: 8000,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "Ry@n",
  text: "Tu es l’amour de ma vie bb 💞💖<br>Jte promets, après ce week-end tu regretteras jamais 🥰<br>Mon agent t’enverra les infos de virement sur Western Union 🏦",
  delay: 8500,
  offsetDelay: 500,
  mode: "message"
},
{
  name: "Ry@n",
  text: "<img class='img' src='https://www.westernunion.com/blogs-staticassets/R24-12.02.0/media/rib.jpg'/><label class='grey'>WesternUnion_RIB.jpg (145ko)</label>",
  delay: 9000,
  offsetDelay: 500,
  mode: "message"
},
{
  delay: 7000,
  offsetDelay: 500,
  mode: "wizz"
},
{
  name: "Ry@n",
  text: "💖💖💖...",
  delay: 7500,
  offsetDelay: 500,
  mode: "message"
},
{
  delay: 7500,
  offsetDelay: 500,
  mode: "webcamend"
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
      $("#discussion").append("<li class=" + className + "><label>Ry@n vous à envoyé un wizz</label></li>");

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
      if(object.name == "Ry@n") {
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

      if(object.name == "Ry@n" && hasNotReachTheEnd) {
        $(".is-writting").text(object.name + " is typing...");
        chatContainer.scrollTop(chatContainer[0].scrollHeight);
      }
      else {
        $(".is-writting").text("Last message recieved at " + moment(new Date()).format("h:mm a") + " on " + moment(new Date()).subtract(12, "years").format("L"));
        chatContainer.scrollTop(chatContainer[0].scrollHeight);
      }

      if(object.name == "Ry@n" && isAudioActivated) {
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