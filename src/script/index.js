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
    
    $( function() {

        // Floating-Fixed table of contents
        if ($('nav').length) {
            $('.toc-wrapper').pushpin({ top: $('nav').height() });
        }
        else if ($('#index-banner').length) {
            $('.toc-wrapper').pushpin({ top: $('#index-banner').height() });
        }
        else {
            $('.toc-wrapper').pushpin({ top: 0 });
        }

        // Plugin initialization
        $('.slider').slider({full_width: true});
        $('.parallax').parallax();
        $('.modal-trigger').leanModal();
        $('.scrollspy').scrollSpy();
        $('.button-collapse').sideNav({'edge': 'left'});
        $('.datepicker').pickadate({selectYears: 20});
        $('select').not('.disabled').material_select();
    });
})(jQuery);