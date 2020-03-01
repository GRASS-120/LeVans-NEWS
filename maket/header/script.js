let sY = parseInt(($("#header").css("height")).slice(0,-2));
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