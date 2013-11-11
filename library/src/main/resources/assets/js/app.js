$(":button").click(function()
{
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	
	//Ajax call
	$.ajax({
		  url: '/library/v1/books/'+isbn+'?status=lost',
		  type: 'PUT',
		  success: function(data) 
		  {
			  //Update the status to lost after user confirms
			  $('#status' + isbn).html("lost");	
			  
			  //disable the button
			  $('#' + isbn).attr("disabled", true);
			  
		  }
		});
	
});




