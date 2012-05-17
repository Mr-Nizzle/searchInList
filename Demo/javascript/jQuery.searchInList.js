(function( $ ){

  $.fn.searchInList = function( options ) {  

    var settings = {
		'listID'			:	'#searchableList',
      	'listSearchItems'	:	'.terms',
		'parentToHide'		:	null,
		'hidden'			: 	false
    };

    return this.each(function() {
		
      if ( options ) { 
        $.extend( settings, options );
      }
	  
	  var input = $(this);
	  var list = $(settings.listSearchItems,settings.listID);
	  
	  $.each(list, function(i, val) {
		  	if(!($(val).attr("title"))){
				$(val).attr("title",$(val).text());
			}
			if(settings.hidden)
			{
				$(val).hide();
			}
	  });
	  
	  input.bind("keyup",function(){
		
		var searchTerm = $.trim(input.attr('value').toLowerCase());

		if(searchTerm != "")
		{	
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
		}
		else
		{
			if (settings.hidden)
			{
				$(list).hide();
			}
			else
			{
				$(list).show();	
			}
		}
	  });

    });

  };
})( jQuery );