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
        $("#navbar").css("top",(sY-scrollY)+"px");
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