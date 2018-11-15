var Ahere = document.querySelector('.A3');
var AOOB = Ahere.offsetTop;


var where = document.querySelector('.B1');
var zooy = where.offsetTop;
// console.log(where);
var chenn = document.querySelector('.B2');
var cooy = chenn.offsetTop;
//
var chrer = document.querySelector('.c');
var dooy = chrer.offsetTop;
// var chrer = document.querySelector('.nunc');
// var dooy = chrer.offsetTop;

//
var dhere = document.querySelector('.D');
var ddoy = dhere.offsetTop;
//
var Ehhere = document.querySelector('.e1');
var Ehhher = Ehhere.offsetTop;
////
var fhere = document.querySelector('.one1');
var fdoy = fhere.offsetTop;
//
var ffere = document.querySelector('.one2');
var hdoy = ffere.offsetTop;
//
var fffre = document.querySelector('.one3');
var ldoy = fhere.offsetTop;
//
var ydzb = document.querySelector('.dzb');
var zdoy = ydzb.offsetTop;
//
var zzdzb = document.querySelector('.zzdd');
var zzdoy = zzdzb.offsetTop;

//
// var CCEN = document.querySelector('.A3');
// var CCNN = CCEN.offsetTop;

document.body.onscroll = function () {
    if (window.pageYOffset > AOOB - window.innerHeight) {
        Ahere.className = "A3 vaction";
    }
    if (window.pageYOffset > zooy - window.innerHeight+where.clientHeight/2) {
        where.className = "B1 care";
    }
    if (window.pageYOffset > cooy - window.innerHeight+chenn.clientHeight/2) {
        chenn.className = "B2 chen";
    }
    if (window.pageYOffset > dooy - window.innerHeight) {
        chrer.className = "c Dolor";
    }
    if (window.pageYOffset > ddoy - window.innerHeight) {
        dhere.className = "D our";
    }
    //
    if (window.pageYOffset > Ehhher - window.innerHeight) {
        Ehhere.className = "e1 lates";
    }
    //
    if (window.pageYOffset > fdoy - window.innerHeight) {
        fhere.className = "one1 upcome";
    }
    if (window.pageYOffset > hdoy - window.innerHeight) {
        ffere.className = "one2 Categ";
    }
    if (window.pageYOffset > ldoy - window.innerHeight) {
        fffre.className = "one3 Contact";
    }
    //
    if (window.pageYOffset > zdoy - window.innerHeight) {
        ydzb.className = "dzb aabout";
    }
    //
    if (window.pageYOffset > zzdoy - window.innerHeight) {
        zzdzb.className = "zzdd cop";
    }
}

    