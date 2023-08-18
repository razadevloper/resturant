function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById ("mySidenav").style.width = "0";
}
function navdropdown() {
    if(document.getElementById("m-submenu").style.display=="none"){
        document.getElementById("m-submenu").style.display ="block";
        document.getElementById("drop-icon").className="fa fa-caret-down";
    }
    else{
        document.getElementById("m-submenu").style.display ="none";
        document.getElementById("drop-icon").className="fa fa-caret-right";
    }
}