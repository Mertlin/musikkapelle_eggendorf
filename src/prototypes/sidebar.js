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

function toggleSidebarFold() {
    var s = document.getElementsByClassName('sidebar-entry');
    for (i = 0; i < s.length; i++) {
        if(s[i].style.display == 'flex') {
            s[i].style.display = 'none';
        }
        else {
            s[i].style.display = 'flex';
        }  
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
        toShow[i].style.display = 'flex';
    }
    backArrow.style.display = 'flex';


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
        toShowBar[i].style.display = 'flex';
    }
    for( i = 0; i < toShowBar.length;i++){
        toShowBar[i].style.display = 'flex';
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

    /* Nur für Mitglieder */
    var toShowHeader = document.getElementsByClassName('mitglied-header');
    var toShowPhoto = document.getElementsByClassName('mitglied');

    for( i = 0; i < toShowHeader.length; i++){
        toShowHeader[i].style.display = 'flex';
    }

    for( i = 0; i < toShowPhoto.length; i++){
        toShowPhoto[i].style.display = 'flex';
    }

}


/* Needed for when maximizing window with closed sidebar */
var x = window.matchMedia('(min-width: 1300px)');
function watchScreenSize(x) {
    var se = document.getElementsByClassName("sidebar-entry");
    if (x.matches) { // If media query matches
        for( i = 0; i < se.length; i++){
            se[i].style.display = 'flex';
        }
    } else {
        ;
    }
    console.log('Hallo');
}
x.addListener(watchScreenSize); // Attach listener function on state changes 
 
watchScreenSize(x); // Call listener function at run time
    