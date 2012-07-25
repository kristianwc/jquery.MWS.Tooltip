/*
 Plugin Name:	MWS Tooltip
 Written By:	Kristian Wolseley-Charles
 Date:			23/07/2012
*/
(function($){  
    $.fn.tooltip = function(options) {  
          
        var  
          defaults = {  
            background: '#e3e3e3',  
            color: 'black',  
            rounded: false  
          },  
          settings = $.extend({}, defaults, options);  
            
          this.each(function() {  
            var $this = $(this);  
            var title = this.title;  
              
            //if($this.is('a') && $this.attr('title') != '') {
            if($this.attr('title')) {  
                this.title = '';
                  
                $this.hover(function(e) {  
                    // mouse over
                    var tip = '<div id="MWSTooltip"><div id="MWSTooltipText">' + title + '</div></div>'
                    $(tip)  
                      .appendTo('body')
                      .hide()  
                      .css({  
                        backgroundColor: settings.background,  
                        color: settings.color,
                        top: e.pageY + 10,  
                        left: e.pageX + 20  
                      })
                      .delay(300)  
                      .fadeIn(350);  
                        
                  if(settings.rounded) {  
                    $('#MWSTooltip').addClass('MWSrounded');  
                  }  
                }, function() {  
                    // mouse out  
                    $('#MWSTooltip').remove();  
                });   
            }  
              
            $this.mousemove(function(e) {  
                $('#MWSTooltip').css({  
                    top: e.pageY + 10,  
                    left: e.pageX + 20  
                 });  
            });  
          });  
          // returns the jQuery object to allow for chainability.  
          return this;  
    }  
})(jQuery); 