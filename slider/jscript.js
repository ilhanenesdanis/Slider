var i=0;
var süre=2000;
var images=["1.jpg","2.jpg","3.jpg","4.jpg"];
function slideİmg(){
    document.slider.src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;

    }
    setTimeout("slideİmg()",süre);

}
window.onload=slideİmg();