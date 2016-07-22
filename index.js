$(function(){
     var stickyfront="<div class='card' tabindex='1'><div class='front'>";
     var sticyback="</div><div class='back'><i class='glyphicon glyphicon-remove' style='float:right'></i>";
     var stickyEnd="</div></div>";
     var cardInFocus = null;  
      
    var reset = function(){
        if(cardInFocus){
            $(cardInFocus).transition({x:0,y:0, rotateY:'0deg'});
        };        
    };
    
    function addBehavior(){
       var $cards = $('.card');        
       $cards.unbind('click').bind('click', function (e){
           reset();
           console.log(e.target);
           cardInFocus = this;
            var $card = $(this);
             
             if(e.target.className=='glyphicon glyphicon-remove'){
                $(this).css({x:$card.data('orig-x'),y: $card.data('orig-y'), rotateY:'0deg'});  
            }
            else{
                console.log("inside the outer else");
               $(this).transition({x:$('.container').width()/2,y:$('.container').height()/2, rotateY:'180deg'}); 
            }                     
        });
    }
    
    $("#new").click(function(e){
        var title = $("#title").val();
        var content = $("#content").val();
       if(title == '' || content == ''){
            alert("enter sticky title and content");
        }else{
            var newStickyelem = $(stickyfront+$("#title").val()+sticyback+$("#content").val()+stickyEnd);
            var $elem = $(newStickyelem);
            var pos = $elem.position();
            $elem.draggable();
            $elem.data('orig-x', pos.left);
            $elem.data('orig-y', pos.top);
            $("#cards").append(newStickyelem);
            $("#title").val('');
            $("#content").val('');
            addBehavior();
        }
       
    });
        
});