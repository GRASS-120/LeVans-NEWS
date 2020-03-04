let sY = parseInt(($("#header").css("height")).slice(0,-2));
let search_pos = 0;
console.log(sY);

$(window).scroll(() => {
    if (scrollY >= sY/2) {
        $("#navbar").css("position", "fixed");
        $("#navbar").css("top","0px");
    }
    else{
        $("#navbar").css("position", "absolute");
        $("#navbar").css({
            "top":(sY-scrollY)+"px",
            "height":"10.57em",
            "transition": "0s",
        });
    }

    if(scrollY >= sY/1.5){
        $("#navbar").css({
            "height":"6.5em",
            "transition": "0.25s",
        });
        $("#aljir").css({
            "width": "5em",
            "margin-top": "0.6em",
            "margin-left": "0.6em",
        });
        $(".block_navbar").css({
            "top": "-1.51em",
            "width": "6vw",
        });
        $("#icon").css({
            "top": "0.2em",
            "transition": "0.2s",
        });
        $("#search_icon").css({
            "top": "0.2em",
            "transition": "0.2s",
        });
        $("#search").css({
            "top": "0.2em",
            "transition": "0.2s",
        });
        setTimeout(() => {
            $("#search_icon").css("transition", "1s");
            $("#search").css("transition", "1s");
        }, 200);
    }else{
        $("#navbar").css("height","10.57em");
        $("#aljir").css({
            "width": "7.55em",
            "margin-top": "1.51em",
            "margin-left": "2.57em",
        });
        $(".block_navbar").css({
            "top": "-2.2em",
            "width": "11.67vw",
        });
        $("#icon").css("top", "2.34em");
        $("#search_icon").css({
            "top": "2.34em",
            "transition": "0.2s",
        });
        $("#search").css({
            "top": "2.34em",
            "transition": "0.2s",
        });
        setTimeout(() => {
            $("#navbar").css("transition","0s");
            $("#search_icon").css("transition", "1s");
            $("#search").css("transition", "1s");
        }, 250);
    }
});

$("#search_icon").click(() => {
    if(search_pos == 0){
        $("#search").css("width", "29.53em");
        $("#search_icon").css("right", "33.23em");
        $("#search_icon").css("transform", "rotate(-360deg)");
        $("#search_input").css("opacity", "1");
        $("#search_input").css("width", "15.4em");
        
        search_pos = 1;
    }else{
        $("#search").css("width", "5.89em");
        $("#search_icon").css("right", "9.59em");
        $("#search_icon").css("transform", "rotate(0deg)");
        $("#search_input").css("opacity", "0");
        $("#search_input").css("width", "5em");
        search_pos = 0;
    }
    
});