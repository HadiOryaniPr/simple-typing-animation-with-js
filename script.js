var i = 0, text;

text = "It's simple but I will make it better";

function typing(){
     if(i < text.length){
          document.getElementById('text').innerHTML +=
          text.charAt(i);
          i++;
          setTimeout(typing, 100);
     }
}

typing();
