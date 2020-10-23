$("#btn_cow_color").click(function (){
$("#text_cow_color").text($("#cow_color").val());
$("#text_cow_color").css("color",$("#cow_color").val());
})
$("#newboxbtn").click(function (){
    var box = $("<div></div>").addClass("box");
    $("#boxes-container").append(box);
    })
    $("#colortoggle").click(function (){
        $("#boxes-container").children().each( function (){
            if($(this).hasClass("colored"))
            $(this).removeClass("colored");
            else
            $(this).addClass("colored");
        });;
        })
    
$("#bordertoggle").click(function (){
    $("#boxes-container").children().each( function (){
        if($(this).hasClass("rounded"))
        $(this).removeClass("rounded");
        else
        $(this).addClass("rounded");
    });;
    })
        