window.onscroll = function(){
    myfunction();
};

//get the header
var header = document.getElementById("myheader");

//get the offset position of the navbar
var sticky = header.offsetTop;

//Add the sticky class to the header when you reach its scroll position. remove the sticky class when you leave the scroll position
function myfunction(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
}