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
        if (toShow[i].classList.contains('termin')) {
            toShow[i].style.display = 'flex';
        } else {
            toShow[i].style.display = 'block';
        }
    }
    backArrow.style.display = 'block';
    if (!toShow[0].classList.contains("active")) {
        toShow[0].classList.add("active");
        backArrow.classList.add("active");
        toShow[0].classList.add("active-border");
    }

    /* Hide aktuelle Beiträge oder Termine (nur für beitraege/beitraege.html)*/
    var toHideContent = document.getElementsByClassName('aktuell');
    for( i = 0; i < toHideContent.length;i++){
        if (!toHideContent[i].classList.contains(className))
            toHideContent[i].style.display = 'none';
    }
}

function back() {
    /* Allgemeine Sidebar Funktion */
    var backArrow = document.getElementById('se-back');
    var toShowBar = document.getElementsByClassName('sidebar-entry');
    var toHideBar = document.getElementsByClassName('sidebar-sub');
    
    backArrow.style.display = 'none';
    for( i = 0; i < toShowBar.length;i++){
        toShowBar[i].style.display = 'block';
    }
    for( i = 0; i < toShowBar.length;i++){
        toShowBar[i].style.display = 'block';
        toShowBar[i].classList.remove("active-border");
        toShowBar[i].classList.remove("active");    
    }

    for( i = 0; i < toHideBar.length;i++){
        toHideBar[i].style.display = 'none';
    }

    /* Nur für beitraege und termine benötigt */
    var toHideContent = document.querySelectorAll('.beitrag, .termin, .category-header, .termin-header');
    for( i = 0; i < toHideContent.length;i++){
        toHideContent[i].style.display = 'none';
    }
    var toShowContent = document.getElementsByClassName('aktuell');
    for( i = 0; i < toShowContent.length;i++){
        if (toShowContent[i].classList.contains('termin')) {
            toShowContent[i].style.display = 'flex';
        } else {
            toShowContent[i].style.display = 'block';
        }
    }
}