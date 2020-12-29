function showSidebar() {
    var s = document.getElementById('sidebar');
    var ss = document.getElementById('sidebar-slider');
    var ssArrow = document.getElementById('sidebar-arrow');
    if(s.style.display == 'flex') {
        s.style.display = 'none';
        ssArrow.style.transform = "rotate(0deg)";
    }
    else {
        s.style.display = 'flex';
        ssArrow.style.transform = "rotate(180deg)";
    }
    
    
}

function select(className) {
    var backArrow = document.getElementById('se-back');
    var toHide = document.getElementsByClassName('sidebar-entry');
    var toShow = document.getElementsByClassName(className);
    for(var i = 0; i < toHide.length; i++) {
        toHide[i].style.display = 'none';
    }
    for (i = 0; i < toShow.length; i++) {
        toShow[i].style.display = 'block';
    }
    backArrow.style.display = 'block';
    toShow[0].classList.add("active");
    toShow[0].classList.add("active-border");
}


function back() {
    var backArrow = document.getElementById('se-back');
    var active = document.getElementsByClassName('active');
    var toShow = document.getElementsByClassName('sidebar-entry');
    var toHide = document.getElementsByClassName('sidebar-sub');
    
    backArrow.style.display = 'none';
    //active[0] --> nav-list
    active[1].classList.remove("active-border");
    active[1].classList.remove("active");    

    for( i = 0; i < toShow.length;i++){
        toShow[i].style.display = 'block';
    }

    for( i = 0; i < toHide.length;i++){
        toHide[i].style.display = 'none';
    }
}