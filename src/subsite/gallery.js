function displayImg(item){

    var expandImg = document.getElementById("expandedImg");
    var str = item.src.substring(0,item.src.length-10);
    expandImg.src = str.concat(".jpg");
}