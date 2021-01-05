var index = 1;

function displayImg(item){

    var expandImg = document.getElementById("expandedImg");
    var str = item.src.substring(0,item.src.length-10);
    expandImg.src = str.concat(".jpg");

    document.getElementById("popupImg").style.display = "block";
}

function selectEvent(year,ev){
    var list = year;
    list += " ";
    list += ev;

    var toHide = document.getElementsByClassName("gallery-entry-img");
    var toShow = document.getElementsByClassName(list);
    
    for(var i = 0; i < toHide.length; i++) {
        toHide[i].style.display = 'none';
        toHide[i].classList.remove("show");
    }
    for (i = 0; i < toShow.length; i++) {
        toShow[i].style.display = 'flex';
        toShow[i].classList.add("show");
    }
}

function showSlide(n){

    var img = document.getElementsByClassName("show");

    if(n >img.length) index = 1;
    else if(n < 1) index = img.length;

    displayImg(img[index-1].children[0]);
}

function plusSlide(n){
    showSlide(index += n);
}

function currentSlide(n){
    showSlide(index = n);
}

function closeExpandedImg(){
    document.getElementById("popupImg").style.display = "none";
}