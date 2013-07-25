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

  $.fn.fitText = function(kompressor, options) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'minContainerSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY,
          'maxContainerSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        setTimeout(function() {
        thisProcent = $this.width()/100;
        thisWidth = thisProcent*$('.container').width();
        if(thisProcent > 1){
          thisWidth = $this.width();
        }
        console.log(thisWidth +' - width correct');

        //fontSize = parseFloat(settings.maxFontSize) - (parseFloat(settings.minFontSize)*(parseFloat(settings.maxContainerSize) - thisWidth))/parseFloat(settings.minContainerSize);
        dC = parseFloat(settings.maxContainerSize)-parseFloat(settings.minContainerSize);
        // console.log(dC +' -dC');
        dF = parseFloat(settings.maxFontSize)-parseFloat(settings.minFontSize);
        // console.log(dF +' -dF');
        dCNow = parseFloat(settings.maxContainerSize) - thisWidth;
        // console.log(dCNow +' -dCNow');
        // console.log((dCNow/dC)*(dCNow/dC) +'wskaźnik');
        // console.log(Math.sqrt((dCNow/dC)) +'wskaźnik2');

        indic = Math.sqrt((dCNow/dC));

        fontSize = parseFloat(settings.maxFontSize) - indic*(dF);

        // console.log(fontSize +' -fontsize');

        $this.css('font-size', Math.max(Math.min(fontSize, parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
        $this.css('line-height', Math.max(Math.min(fontSize, parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize))+'px');
        }, 200);
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
