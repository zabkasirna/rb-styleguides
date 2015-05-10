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

        // convert rgb to hex value string
        function rgb2hex(rgb) {
            if (/^#[0-9A-F]{6}$/i.test(rgb)) { return rgb; }

            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

            if (rgb === null) { return "N/A"; }

            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }

            return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }

        $('.dynamic-color .col').each(function () {
            $(this).children().each(function () {
                
                var color = $(this).css('background-color'),
                classes = $(this).attr('class');
                
                $(this).html(rgb2hex(color) + " " + classes);

                if (classes.indexOf("darken") >= 0 || $(this).hasClass('black')) {
                    $(this).css('color', 'rgba(255,255,255,.9');
                }
            });
        });

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