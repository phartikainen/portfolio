/*
*  AngularJS Directive for Twitter's Embedded Timeline with support for custom CSS.
*  https://github.com/userapp-io/twitter-timeline-angularjs
*/

angular.module('twitter.timeline', [])
	.directive('twitterTimeline', [function() {
		return {
			restrict: 'A',
			scope: {
				cssUrl: "@",
				autoResize: "="
			},
			link: function (scope, element, attrs) {
				$('body').removeAttr('data-twttr-rendered');

				element
					.attr('id', 'twitter-feed')
					.attr("width", "100%" || attrs.width)
					.attr('data-chrome', 'noheader transparent')
					.attr('data-widget-id', attrs.twitterTimeline)
					.addClass('twitter-timeline');

				function render() {
					var body = $('.twitter-timeline').contents().find('body');

					if (scope.cssUrl) {
						body.append($('<link/>', { rel: 'stylesheet', href: scope.cssUrl, type: 'text/css' }));
					}

					function setHeight() {
						if (body.find('.stream').length == 0) {
							setTimeout(setHeight, 100);
						} else {
							body.find('.stream').addClass('stream-new').removeClass('stream').css('height', 'auto');
							$('.twitter-timeline').css('height', (body.height() + 30) + 'px');
							setTimeout(function() {
      // Do something after 5 seconds
							//$('#speech-bubble').css('display', 'none');
							$('#speech-bubble').css('background', 'rgba(255,255,255,0.5)');
							$('#speech-bubble').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 300);
							$('head').append('<style>#speech-bubble:before{border-left-color: rgba(255, 255, 255, 0.5);}</style>');
							$('#foliolink').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 300);

							}, 100);

						}
					}

					if (scope.autoResize) {
						setHeight();
					}
				}

				if (!$('#twitter-wjs').length) {
					$.getScript((/^http:/.test(document.location)?'http':'https') + '://platform.twitter.com/widgets.js', function() {
						render();
						$('.twitter-timeline').load(render);
	        		});
				}
				
			}
		};
	}]);
	
	
