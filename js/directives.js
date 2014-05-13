'use strict';

/* Directives */



var directives = angular.module('myApp.directives', [])

directives.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

// FASTCLICK

directives.directive('fastClick', [ function() {
  return {
  	restrict: 'A',
		link: function(scope, elm, attrs) {
			FastClick.attach(elm[0]);		
  }};
}]);







// SHOW-HIDE Button subnavi

directives.directive('toggleButton', [ function() {
  return {
  	restrict: 'A',
		link: function(scope, elm, attrs) {
			
			elm.addClass('togglebut');
			
			var ul = $('ul', elm);
			var i = $('i', elm);
			
			var state = false;
			$('button', elm).click(function(){
			
				if (state) { 
				ul.toggle(150);
				i.addClass("exp");
				i.removeClass("col");
				}
				else {
					ul.toggle(150);
					i.addClass("col");
					i.removeClass("exp");
				}
				
				state = !state;
			});
			
		
  }};
}]);

// MENU Button

directives.directive('menuButton', [ function() {
  return {
  	restrict: 'A',
		link: function(scope, elm, attrs) {
			
			var menu = $('nav.mainnavi');
			var i = $('i', elm);
			
			var state = false;

			// MENU Button

			$('#menubut', elm).click(function(e){
			
				if (state) { 
				menu.hide();
				i.addClass("menu");
				i.removeClass("close");
				}
				else {
					menu.show();
					i.addClass("close");
					i.removeClass("menu");
				}
				
				state = !state;
				e.stopPropagation();
			});
			
			// Expand subnavi, don't close
			
			$('.expand').on('click', function(e) {
					e.stopPropagation();
			});
			
			// Everywhere else, close navi
			
			$(document, elm).click(function(){
			
				if (state) { 
				menu.hide();
				i.addClass("menu");
				i.removeClass("close");
				state = !state;
				}
				
				
				
			});
			
			
		
  }};
}]);





// PLACEHOLDER IMAGES

directives.directive( 'phImg', function () {
  return {
    restrict: 'A',
    scope: { dimensions: '@phImg' },
    link: function( scope, element, attr ) {
      // A reference to a canvas that we can reuse
      var canvas;

      /**
       * The configurable parameters of the placeholder image.
       *
       * TODO: make configurable
       * TODO: make defaultable
       */
      var config = {
        text_size: 10,
        fill_color: '#EEEEEE',
        text_color: '#AAAAAA'
      };

      /**
       * When the provided dimensions change, re-pull the width and height and
       * then redraw the image.
       */
      scope.$watch('dimensions', function () {
        if( ! angular.isDefined( scope.dimensions ) ) {
            return;
        }
        var matches = scope.dimensions.match( /^(\d+)x(\d+)$/ ),
            dataUrl;
        
        if(  ! matches ) {
          console.error("Expected '000x000'. Got " + scope.dimensions);
          return;
        }
        
        // Grab the provided dimensions.
        scope.size = { w: matches[1], h: matches[2] };

        // FIXME: only add these if not already present
        element.prop( "title", scope.dimensions );
        element.prop( "alt", scope.dimensions );

        // And draw the image, getting the returned data URL.
        dataUrl = drawImage();

        // If this is an `img` tag, set the src as the data URL. Else, we set
        // the CSS `background-image` property to same.
        if ( element.prop( "tagName" ) === "IMG" ) {
          element.prop( 'src', dataUrl );
        } else {
          element.css( 'background-image', 'url("' + dataUrl + '")' );      
        }
      });

      /**
       * Calculate the maximum height of the text we can draw, based on the
       * requested dimensions of the image.
       */
      function getTextSize() {
        var dimension_arr = [scope.size.h, scope.size.w].sort(),
            maxFactor = Math.round(dimension_arr[1] / 16);

        return Math.max(config.text_size, maxFactor);
      }

      /**
       * Using the HTML5 canvas API, draw a placeholder image of the requested
       * size with text centered vertically and horizontally that specifies its
       * dimensions. Returns the data URL that can be used as an `img`'s `src`
       * attribute.
       */
      function drawImage() {
        // Create a new canvas if we don't already have one. We reuse the canvas
        // when if gets redrawn so as not to be wasteful.
        canvas = canvas || document.createElement( 'canvas' );
        
        // Obtain a 2d drawing context on which we can add the placeholder
        // image.
        var context = canvas.getContext( '2d' ),
            text_size,
            text;

        // Set the canvas to the appropriate size.
        canvas.width = scope.size.w;
        canvas.height = scope.size.h;

        // Draw the placeholder image square.
        // TODO: support other shapes
        // TODO: support configurable colors
        context.fillStyle = config.fill_color;
        context.fillRect( 0, 0, scope.size.w, scope.size.h );

        // Add the dimension text.
        // TODO: support configurable font
        // FIXME: ensure text will fit and resize if it doesn't
        text_size = getTextSize();
        text = scope.dimensions;
        context.fillStyle = config.text_color;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = 'bold '+text_size+'pt sans-serif';

        // If the text is too long to fit, reduce it until it will.
        if (context.measureText( text ).width / scope.size.w > 1) {
          text_size = config.text_size / (context.measureText( text ).width / scope.size.w);
          context.font = 'bold '+text_size+'pt sans-serif';
        }

        // Finally, draw the text in its calculated position.
        context.fillText( scope.dimensions, scope.size.w / 2, scope.size.h / 2 );

        // Get the data URL and return it.
        return canvas.toDataURL("image/png");
      }
    }
  };
});

// PLACEHOLDER TEXT

directives.directive( 'phTxt', [ 'TextGeneratorService', function ( TextGeneratorService ) {
  return {
    restrict: "EA",
    priority: 1,
    controller: [ '$scope', '$element', '$attrs', function ( $scope, $element, $attrs ) {
      var numSentences,
          numParagraphs;

      // Gets the number of paragraphs or sentences from the service and
      // populates the DOM node.
      function populate() {
        var contents;

        // If p or neither, then get paragraphs. Else, get sentences.
        if ( numParagraphs || !numSentences ) {
          contents = TextGeneratorService.createParagraphs( numParagraphs, numSentences );
        } else {
          contents = TextGeneratorService.createSentences( numSentences );
        }

        $element.html( contents );
      }

      $attrs.$observe( 'phTxt', function ( val ) {
        var p_match, s_match;

        // Pull out the matches.
        p_match = val.match( /(\d+)p/ );
        s_match = val.match( /(\d+)s/ );

        // If there was a match, store the value. If there wasn't, we set the
        // value to false to ensure no old value is kept around.
        if ( p_match !== null ) {
          numParagraphs = parseInt( p_match[1], 10 );
        } else {
          numParagraphs = false;
        }

        // Same for sentences...
        if ( s_match !== null ) {
          numSentences = parseInt( s_match[1], 10 );
        } else {
          numSentences = false;
        }

        // And populate everything.
        populate();
      });
      
      // If nothing was passed, the $observe will never run, so we need to trigger
      // the `populate()` manually.
      if ( ! $attrs.phTxt ) {
        populate();
      }
    }]
  };
}]);





// FIRST THREE WORDS SMALL CAPS

directives.directive('firstWords', [ function() {
  return {
  	restrict: 'A',
  	priority: 0,
		link: function(scope, elm, attrs) {
		
		// Small caps paragraphs
		
			var numWords = 3;

			var node = elm.contents().filter(function () { return this.nodeType == 3 }).first(),
      	text = node.text(),
      	first = text.split(" ", numWords).join(" ");

			if (!node.length)
      	return;
    
			node[0].nodeValue = text.slice(first.length);
			node.before('<span>' + first + '</span>');

		
  }};
}]);

