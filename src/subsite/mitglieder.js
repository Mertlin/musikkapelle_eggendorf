function selectRegister(className){

    var header = document.getElementsByClassName('mitglied-header');
    var toHide = document.getElementsByClassName('mitglied');
    var toShow = document.getElementsByClassName(className);

    for(var i = 0;i<toHide.length;i++){
        toHide[i].style.display = 'none';
    }

    for(var i = 0;i<header.length;i++){
        header[i].style.display = 'none';
    }

    for(var i = 0;i<toShow.length;i++){
        toShow[i].style.display = 'flex';
    }
}