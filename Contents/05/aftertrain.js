
var qnum=0;


function queue(){
    qnum+=1;
    switch(qnum){
        case 1:
            $("#train").animate({
                left:"+2500px"
            },35000)
                delay(8000);
        break
        case 2:
            window.location.href = './beforeseige.html'
        break
    }
}

$(window).load(function(){
    doeffect("train-start.mp3",20)
        localStorage.setItem("level", "5");
});