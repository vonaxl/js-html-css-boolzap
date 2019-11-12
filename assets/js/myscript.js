$( document ).ready(function() {

    setTimeout(function(){ 
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("Ciao")
        $("#chatbox").prepend(msgCopy)
     }, 3000);
    setTimeout(function(){ 
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("Come va?")
        $("#chatbox").prepend(msgCopy)
     }, 6000);
    setTimeout(function(){ 
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("ti va di uscire?")
        $("#chatbox").prepend(msgCopy)
     }, 10000);
    setTimeout(function(){ 
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("Conosci per caso Michele de Rosa?")
        $("#chatbox").prepend(msgCopy)
     }, 15000);


     function sendmsgs(){
        // get message on click from the input
        var message=$("#msg").val();
        console.log(message);

        // copy the message template
        var msgCopy = $("#template .msgsent").clone();
        msgCopy.find(".txt").text(message)

        // send the message with it's template
        $("#chatbox").prepend(msgCopy)

        // clear the input 
        $("#msg").val("");
    };

    $("#send").click(sendmsgs);

    $(window).on({
        keyup: function (k) {
            // console.log(k); //check which keycode 
            
            if (k.keyCode == "13") {
                sendmsgs();
            }
            
        }
    })
    
});