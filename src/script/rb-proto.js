/***
 *           __    __       ___       __   __               
 *          |  |  |  |     /   \     |  | |  |              
 *          |  |__|  |    /  ^  \    |  | |  |              
 *          |   __   |   /  /_\  \   |  | |  |              
 *          |  |  |  |  /  _____  \  |  | |  `----.         
 *          |__|  |__| /__/     \__\ |__| |_______|         
 *         _______. __  .______     .__   __.      ___      
 *        /       ||  | |   _  \    |  \ |  |     /   \     
 *       |   (----`|  | |  |_)  |   |   \|  |    /  ^  \    
 *        \   \    |  | |      /    |  . `  |   /  /_\  \   
 *    .----)   |   |  | |  |\  \----|  |\   |  /  _____  \  
 *    |_______/    |__| | _| `._____|__| \__| /__/     \__\ 
 *                                                          
 */

(function( $ ) {
    
    // $( function() {
    //     window.mySwipe = $('#swipeWrapper').Swipe().data('Swipe');
    // });
    
    $(function() {

        $('.side-nav-toggler').sideNav();

        // $('header.navbar-fixed')
        //     .headroom({
        //         "offset": 80,
        //         "tolerance": 5,
        //         "classes": {
        //             "initial": "navbar-animated",
        //             "pinned": "navbar-slide-down",
        //             "unpinned": "navbar-slide-up",
        //             "top": "navbar-on-top",
        //             "notTop": "navbar-not-top"
        //         }
        //     });
    });

})(jQuery);