$(document).ready(function(){
    $("#btn1").click(function(){

        $td=$("#btn1").parent().parent().parent().parent().attr("id");
        console.log($td);
        $($td).css("border-color","2px solid yellow");
  
     
    })
    $("#btn2").click(function(){

     
    })
    $("#btn3").click(function(){

       
     
    })
    $("#btn4").click(function(){

        $td=$("#btn1").parent().parent().parent().parent().attr("id");
        console.log($td);
        $($td).css("border-color","2px solid yellow");
     $("#btn4").parent().parent().parent().parent().hide();
     
    })
})