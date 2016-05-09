
var $$ = Dom7;

var f7 = new Framework7({
    // Default title for modals
    modalTitle: 'Thorgene',

    // page切换时有动画效果
    // animatePages: false,

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
});


// Loading flag
var loading = false;

// Last loaded index
var lastIndex = $$('.page-content .detail .content-block-title').length;

// Max items to load
var maxItems = 8;

// Append items per load
var itemsPerLoad = 2;

// Attach 'infinite' event handler
// $$('.infinite-scroll').on('infinite', function () {
//
//     // Exit, if loading in progress
//     if (loading) return;
//
//     // Set loading flag
//     loading = true;
//
//     // Emulate 1s loading
//     setTimeout(function () {
//         // Reset loading flag
//         loading = false;
//
//         if (lastIndex >= maxItems) {
//             // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
//             f7.detachInfiniteScroll($$('.infinite-scroll'));
//             // Remove preloader
//             $$('.infinite-scroll-preloader').remove();
//             return;
//         }
//
//         // Generate new items HTML
//         var html = '';
//         for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
//             html += '<div class="content-block-title">星期三,05月04日</div>' +
//                 '<div class="list-block media-list inset">' +
//                 '<ul>' +
//                 '<li>' +
//                 '<a href="#" class="item-link item-content">' +
//                 '<div class="item-media"><i class="iconfont record">&#xe610;</i></div>' +
//                 '<div class="item-inner">' +
//                 '<div class="item-title-row">' +
//                 '<div class="item-title">体重</div>' +
//                 '</div>' +
//                 '<div class="item-subtitle">70.0kg</div>' +
//                 '</div>' +
//                 '</a>' +
//                 '</li>' +
//                 '<li>' +
//                 '<a href="#" class="item-link item-content">' +
//                 '<div class="item-media"><i class="iconfont record">&#xe610;</i></div>' +
//                 '<div class="item-inner">' +
//                 '<div class="item-title-row">' +
//                 '<div class="item-title">身高</div>' +
//                 '</div>' +
//                 '<div class="item-subtitle">170cm</div>' +
//                 '</div>' +
//                 '</a>' +
//                 '</li>' +
//                 '</ul>' +
//                 '</div>' +
//                 '</div>';
//         }
//
//         // Append new items
//         $$('.page-content.infinite-scroll .detail').append(html);
//
//         // Update last loaded index
//         lastIndex = $$('.page-content .detail .content-block-title').length;
//     }, 1000);
// });
