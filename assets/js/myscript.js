$( document ).ready(function() {
    // =============================================PC INITAL REPLY=============================================     
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
// =============================================FUNCTION PC REPLY=============================================
    //  function that reply okays for each word sent
     function ok(){ 
        timer();
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("ok");
        msgCopy.find(".time").text(timer);
        $("#chatbox").prepend(msgCopy);
     }
// =============================================FUNCTION TO SEND MSG AND REPLY=============================================
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

        setTimeout(ok,1000);
    
    };
    // // =============================================HOURS AND MINUTES FUNCTIONS =============================================
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
    // =============================================SEND MSGS=============================================
    $("#send").click(sendmsgs);

    $("#chatwindow").on({
        keyup: function (k) {
            // console.log(k); //check which keycode 
            
            if (k.keyCode == "13") {
                sendmsgs();
            }
            
        }
    });
    // =============================================SEARCH BAR=============================================
    $("#searchbar").keyup(function () {
        var kPress = $('#searchbar').val().toLocaleLowerCase();
        // name on each h6
        if($(this).val() == ""){
            $('.contact').removeClass('importantHide')
        }
         else {
            $('.contact').addClass('importantHide');
            // cerca per ogni .contact il suo nome
            $(".contact").each(function(){
                if ($(this).find('.box>h6').text().toLocaleLowerCase().includes(kPress)) {
                    console.log(kPress);
                    $(this).removeClass('importantHide')
                }

            });

        }
    });
    $(this).find('.contact').click(function () {
        

        if ($(this).hasClass('active')) {
            console.log("clicked");
            
        }else {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }
    });

});