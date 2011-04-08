(function( $ ){

  $.fn.searchInList = function( options ) {  

    var settings = {
		'listID'			:	'#searchableList',
      	'listSearchItems'	:	'.terms',
		'parentToHide'		:	null
    };

    return this.each(function() {
		
      if ( options ) { 
        $.extend( settings, options );
      }
	  
	  var input = $(this);
	  var list = $(settings.listSearchItems,settings.listID);
	  
	  $.each(list, function(i, val) {
			$(val).attr("title",$(val).text());
	  });
	  
	  input.bind("keyup",function(){
		
		var searchTerm = input.attr('value').toLowerCase();
		
		$.each(list, function(i, val) {
			
			var orival = $(val).attr("title").toLowerCase();
			
			if(orival.search(searchTerm) >= 0){
				if(settings.parentToHide == null)
				{
					$(val).show();
				}
				else{
					$(val).closest(settings.parentToHide).show();
				}
			}
			else{
				if(settings.parentToHide == null)
				{
					$(val).hide();
				}
				else{
					$(val).closest(settings.parentToHide).hide();
				}
			}
		});
		
	  });

    });

  };
})( jQuery );