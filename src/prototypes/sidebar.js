function toggleSidebarFold() {
    var s = document.getElementsByClassName('sidebar-entry');
    var sArrow = document.getElementById('sidebar-fold-arrow');
    var shown = false;
    for (i = 0; i < s.length; i++) {
        if (s[i].style.display == "flex" || shown == true) {
            shown = true;
        }
    }
    console.log(shown);
    for (i = 0; i < s.length; i++) {
        if (shown == true) {
            s[i].style.display = "none";
        } else {
            s[i].style.display = "flex";

        }
    }
    if(sArrow.style.transform == "rotate(90deg)") {
        sArrow.style.transform = "rotate(180deg)";
    } else {
        sArrow.style.transform = "rotate(90deg)";
    }
}

function select(className) {
    /* Show the cancel button */
    document.getElementById('se-back').style.display = 'flex';
    /* Hide all sidebar-entries */
    var toHide = document.getElementsByClassName('sidebar-entry');
    for(var i = 0; i < toHide.length; i++) {
        toHide[i].classList.add('hidden');
    }
    /* Show all sidebar-entries with className */
    var toShow = document.getElementsByClassName(className);
    for (i = 0; i < toShow.length; i++) {
        toShow[i].classList.remove('hidden');
    }



    /* Hide or show aktuelle Beiträge oder Termine (nur für beitraege/beitraege.html)*/
    var toHideContent = document.getElementsByClassName('aktuell');
    for( i = 0; i < toHideContent.length;i++){
        if (!toHideContent[i].classList.contains(className)) {
            toHideContent[i].style.display = 'none';
        }
    }
    var toShowContent = document.querySelectorAll('.beitrag, .termin, .category-header, .termin-header');
    for( i = 0; i < toShowContent.length;i++){
        if(toShowContent[i].classList.contains(className)) {
            toShowContent[i].style.display = 'flex';
        }
    }
}

function back() {
    /* Allgemeine Sidebar Funktion */
    document.getElementById('se-back').style.display = 'none';

    var toShowBar = document.getElementsByClassName('sidebar-entry');
    var toHideBar = document.getElementsByClassName('sidebar-sub');
    for( i = 0; i < toShowBar.length;i++){
        toShowBar[i].classList.remove("hidden");
    }
    
    for( i = 0; i < toHideBar.length;i++){
        toHideBar[i].classList.add("hidden");
    }

    /* Beitraege & Termine  */
    var toHideBT = document.querySelectorAll('.beitrag, .termin, .category-header, .termin-header');
    for( i = 0; i < toHideBT.length;i++){
        toHideBT[i].style.display = 'none';
    }
    var toShowBT = document.getElementsByClassName('aktuell');
    for( i = 0; i < toShowBT.length;i++){
        if (toShowBT[i].classList.contains('termin')) {
            toShowBT[i].style.display = 'flex';
        } else {
            toShowBT[i].style.display = 'block';
        }
    }

    /* Mitglieder */
    var toShowHeader = document.getElementsByClassName('mitglied-header');
    var toShowPhoto = document.getElementsByClassName('mitglied');
    for( i = 0; i < toShowHeader.length; i++){
        toShowHeader[i].style.display = 'flex';
    }
    for( i = 0; i < toShowPhoto.length; i++){
        toShowPhoto[i].style.display = 'flex';
    }

    /* Gallery */
    var toHideGallery = document.querySelectorAll('.gallery-header, .gallery-entry-img');
    for( i = 0; i < toHide.length;i++){
        toHideGallery[i].style.display = 'none';
    }
    var toShowGallery = document.getElementsByClassName('show');
    for( i = 0; i < toShow.length;i++){
        toShowGallery[i].style.display = 'flex';
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
}
x.addListener(watchScreenSize); // Attach listener function on state changes 
 
watchScreenSize(x); // Call listener function at run time
    