
var $$ = Dom7;

var f7 = new Framework7({
    // Default title for modals
    modalTitle: 'Thorgene',

    // If it is webapp, we can enable hash navigation:
    pushState: true,

    // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        f7.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        f7.hideIndicator();
    }

});

var mainView = f7.addView('.view-main', {
    dynamicNavbar: true
})