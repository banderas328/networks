
    $('#create_chanel_submit').click(function(){
       var name = $("#chanel_name").val();
       var is_private = $("#is_private").is(':checked');
       if(is_private) {is_private = "1";}
       else {is_private = "0";}
       $.ajax({
    	   url: "chanels/createChanel",
    	   type: "POST",
    	   data: {"chanel_name":name,"is_private":is_private},
    	 
    	   dataType: "json"
    	 }).done(function (data) {
             alert(data);
             console.info(data);
         });;
    });



