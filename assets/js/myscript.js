$( document ).ready(function() {
    // =============================================PC INITAL REPLY=============================================     
    setTimeout(function(){ 
        timer();
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("Ciao")
        msgCopy.find(".time").text(timer)
        $("#chatwindow .chatsbox.active .chatbox").prepend(msgCopy)
     }, 3000);
    setTimeout(function(){ 
        timer();
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("Come va?")
        msgCopy.find(".time").text(timer)
        $("#chatwindow .chatsbox.active .chatbox").prepend(msgCopy)
     }, 6000);
// =============================================FUNCTION PC REPLY=============================================
    //  function that reply okays for each word sent
     function ok(){ 
        timer();
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("ok");
        msgCopy.find(".time").text(timer);
        $("#chatwindow .chatsbox.active .chatbox").prepend(msgCopy);
     }
// =============================================FUNCTION TO SEND MSG AND REPLY=============================================
     function sendmsgs(){
        timer()
        // get message on click from the input
        var message=$(".chatsbox.active .msg").val();
        console.log(message);

        // copy the message template
        var msgCopy = $("#template .msgsent").clone();
        msgCopy.find(".txt").text(message)
        msgCopy.find(".time").text(timer)
        // send the message with it's template
        $("#chatwindow .chatsbox.active .chatbox").prepend(msgCopy)
        timer();
        // clear the input 
        $("#chatwindow .chatsbox.active .msg").val("");

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
    $(".send").click(sendmsgs);

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

    // ================================================3 ESERCIZIO=================================================
    $(this).find('.contact').click(function () {

        var posContact = $(this).index();
        console.log(posContact);
        $('#chatwindow .chatsbox').siblings().removeClass('active');
        $('#chatwindow .chatsbox').eq(posContact).addClass('active');
 
    });

    $(this).on('click', 'i' ,function () {
        $(this).siblings('.msgbox').toggle();
        
    });
    $(this).on('click', 'li:nth-child(2)',function (){
        $(this).parents('.msgsent').remove();
    });  
});