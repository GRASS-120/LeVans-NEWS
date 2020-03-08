import $, {scrollY} from 'jquery';

export let sY = 312;
export let search_pos = 0;
export let pos_y = 0;

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
            "top": "1.2em",
            "right": "3.535em",
            "transition": "0.2s",
            "height": "3.5em",
            "width": "3.5em",
        });
        $("#search_icon").css({
            "top": "1.2em",
            "right": "10.675em",
            "transition": "0.2s",
            "height": "3.5em",
            "width": "3.5em",
            "transition": "0.2s",
            "transform": "rotate(0deg)",
        });
        $("#search").css({
            "top": "1.2em",
            "right": "10.675em",
            "transition": "0.2s",
            "height": "3.5em",
            "width": "3.5em",
            "transition": "0.2s",
        });
        $("#search_input").css({
            "transition": "0.2s",
            "height": "1.9em",
            "padding-left": "0.03em",
            "width": "0.1em",
        });
        pos_y = 1;
        search_pos = 0;
        setTimeout(() => {
            $("#search_icon").css("transition", "1s");
            $("#search_input").css("transition", "1s");
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
        $("#icon").css({
            "top": "2.34em",
            "right": "2.45em",
            "height": "5.89em",
            "width": "5.89em",
        });
        $("#search_icon").css({
            "top": "2.34em",
            "right": "9.59em",
            "transition": "0.2s",
            "height": "5.89em",
            "width": "5.89em",
            "transform": "rotate(0deg)",
        });
        $("#search").css({
            "top": "2.34em",
            "right": "9.59em",
            "transition": "0.2s",
            "height": "5.89em",
            "width": "5.89em",
        });
        $("#search_input").css({
            "transition": "0.2s",
            "height": "3.8em",
            "padding-left": "0.1em",
            "width": "0.3em",
        });
        pos_y = 0;
        search_pos = 0;
        setTimeout(() => {
            $("#navbar").css("transition","0s");
            $("#search_icon").css("transition", "1s");
            $("#search_input").css("transition", "1s");
            $("#search").css("transition", "1s");
        }, 250);
    }
});