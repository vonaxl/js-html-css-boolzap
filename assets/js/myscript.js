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

    //  function that reply okays for each word sent
     function ok(){ 
        timer();
        var msgCopy = $("#template .msgpc").clone();
        msgCopy.find(".txt").text("ok");
        msgCopy.find(".time").text(timer);
        $("#chatbox").prepend(msgCopy);
     }

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
    });

    $("#searchbar").keyup(function () {
        var kPress = $('#searchbar').val();
        var gPress = kPress.toLocaleLowerCase();
        // name on each h6
        // var nameH6="";
        
        if($(this).val() == ""){
            $('.contact').removeClass('importantHide')
        }
         else {
            $('.contact').addClass('importantHide');


            // cerca per ogni .contact il suo nome
            $(".contact").each(function(){
                if ($(this).find('.box>h6').text().toLocaleLowerCase().includes(gPress)) {
                    console.log(gPress);
                    $(this).removeClass('importantHide')
                }

                // var name = [];
                // var x = $(this).find('.box>h6').text()
                // name.push(x)
                // console.log(name);     
                // // controlla quella h6 ha la lettera inserita nella searchbar
                
                // var z="",g="";
                // for (var y = 0; y<name[0].length ; y++){
                //     z=name[0][y];
                //     g+=name[0][y];
                //     l=z.toLocaleLowerCase();
                //     if(gPress==l){
                //         nameH6=name[0];
                //     }
                // }
                
                // console.log(g);
                // console.log(nameH6);
                
                // // console.log(y);
                
            });





            // $(".contact").each(function(){
            //     if ($(this).find('.box>h6').val(kPress)) {
            //         $("h6").parents(".content").removeClass('importantHide')
            //     }
            // });
        }
    });

});