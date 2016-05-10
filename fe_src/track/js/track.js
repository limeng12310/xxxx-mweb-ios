// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

/*=== Default standalone ===*/
var myPhotoBrowserStandalone = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ]
});
//Open photo browser on click
$$('.pb-standalone').on('click', function () {
    myPhotoBrowserStandalone.open();
});

// // Callbacks to run specific code for specific pages, for example for About page:
// myApp.onPageInit('about', function (page) {
//     // run createContentPage func after link was clicked
//     $$('.create-page').on('click', function () {
//         createContentPage();
//     });
// });

// window.onload=function(){
//     var text=document.getElementsByTagName("p");
//     for (var i=0;i<text.length;i++){
//         str=text[i].innerHTML;
//         if(str.length>8){
//             strshow=str.substr(0,7)+"...";
//             text[i].innerHTML=strshow;
//         }
//     }
// };

// function pass(confont){
//     var message=confont.getAttribute("value");
//     $$(".navbar-inner .center")[0].innerHTML=message;
//     var all_class=document.getElementsByName("change");
//     // document.write(all_class[0]);
//     for(var i=0;i<all_class.length;i++){
//         all_class[i].setAttribute("class","checkitem_change");
//     }
//     // var pre_class=i.parentNode.getAttribute("class");
//     confont.parentNode.setAttribute("class","checkitem_changeafter");
// }