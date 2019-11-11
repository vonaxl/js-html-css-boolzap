$( document ).ready(function() {

    $("#send").click(function(){
        // get message on click from the input
        var message=$("#msg").val();
        console.log(message);
        // clear the input 
        $("#msg").val("");
    });
    
});