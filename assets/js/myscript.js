$( document ).ready(function() {

    setTimeout(function(){ 
        timer();
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("Ciao")
        msgCopy.find(".time").text(timer)
        $("#chatbox").prepend(msgCopy)
     }, 3000);
    setTimeout(function(){ 
        timer();
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("Come va?")
        msgCopy.find(".time").text(timer)
        $("#chatbox").prepend(msgCopy)
     }, 6000);
    setTimeout(function(){ 
        timer();
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("ti va di uscire?")
        msgCopy.find(".time").text(timer)
        $("#chatbox").prepend(msgCopy)
     }, 10000);
    setTimeout(function(){ 
        timer();
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("Conosci per caso Michele de Rosa?")
        msgCopy.find(".time").text(timer)
        $("#chatbox").prepend(msgCopy)
     }, 15000);


     function sendmsgs(){
        timer()
        // get message on click from the input
        var message=$("#msg").val();
        console.log(message);

        // copy the message template
        var msgCopy = $("#template .msgsent").clone();
        msgCopy.find(".txt").text(message)
        msgCopy.find(".time").text(timer)
        // send the message with it's template
        $("#chatbox").prepend(msgCopy)
        timer();
        // clear the input 
        $("#msg").val("");
    };
    // HOURS AND MINUTES FUNCTIONS
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
    function timer() {
        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var x = h + ":" + m ;
        return x;
      }

    $("#send").click(sendmsgs);

    $("#chatwindow").on({
        keyup: function (k) {
            // console.log(k); //check which keycode 
            
            if (k.keyCode == "13") {
                sendmsgs();
            }
            
        }
    })
    
});