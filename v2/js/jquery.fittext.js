/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        thisProcent = $this.width()/100;
        thisWidth = thisProcent*$('.container').width();
        if(thisProcent > 1){
          thisWidth = $this.width();
        }
        console.log(thisWidth +' - width correct');
        $this.css('font-size', Math.max(Math.min(thisWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        $this.css('line-height', Math.max(Math.min(thisWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize))+'px');
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
