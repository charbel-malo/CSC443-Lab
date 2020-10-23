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
    function draw() {
        var canvas = document.getElementById('myCanvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            var sWidth = canvas.width;
            var sHeight = canvas.height;
            var path=new Path2D();
            ctx.beginPath();
            path.moveTo((sWidth/2)+50,sHeight/2);
            path.lineTo((sWidth/2),(sHeight/2)-50);
            path.lineTo((sWidth/2)-50,sHeight/2);
            path.lineTo((sWidth/2)+50,sHeight/2);
            ctx.fillStyle = "red";
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 5;
            ctx.fill(path);
            ctx.stroke(path);
        }
    }
    function drawRotated(){
        var canvas = document.getElementById('myCanvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.rotate(20 * Math.PI / 180);
            var sWidth = canvas.width;
            var sHeight = canvas.height;
            var path=new Path2D();
            ctx.beginPath();
            path.moveTo((sWidth/2)+50,sHeight/2);
            path.lineTo((sWidth/2),(sHeight/2)-50);
            path.lineTo((sWidth/2)-50,sHeight/2);
            path.lineTo((sWidth/2)+50,sHeight/2);
            ctx.fillStyle = "red";
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 5;
            ctx.fill(path);
            ctx.stroke(path);
            ctx.rotate(-20 * Math.PI / 180);
        }
    }
    function clear(){
        var canvas = document.getElementById('myCanvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var sWidth = canvas.width;
            var sHeight = canvas.height;
            ctx.clearRect(0,0,sWidth,sHeight);
        }
    }
    
$("#triangle").click(function (){
    draw();
});
$("#rtriangle").click(function (){
    drawRotated();
});
$("#clearcanv").click(function (){
    clear();
});