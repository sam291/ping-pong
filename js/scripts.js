var awesome=function(number)
{for(number=1;number<30;number ++){
    if(number%3===0 && number%5===0){ alert("pingpong");
    }else if(number%3===0){alert("ping");
    }else if(number%5===0){alert("pong");   
    }else{alert(number);};};};

    $(document).ready(function() {
        $("form#kuria").submit(function(event){
            event.preventDefault();
            var number=parseInt($("input#input1").val());
            var Result=awesome()
            $("ul#muiga").append("<li>Result</li>");
    });
    });
     