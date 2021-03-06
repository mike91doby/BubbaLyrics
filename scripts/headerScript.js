//*************************************************************************************************************************
//The purpose of this script is to get the search bar to work when clicked or when enter is pressed
//*************************************************************************************************************************

(function() {
	$(document).ready(function(){
		//when the search bar is clicked initialize a search and redirect to the results pagae
		$('#searchClick').on('click', function(event){
			//fromWhere used to determine how the breadcrumbs will be set later on
			var fromWhere = "search";
			localStorage.setItem("fromWhere", fromWhere);
			
			var searchContent = document.getElementById('searchContent').value;
			localStorage.setItem("searchContent", searchContent);
			window.location.assign("/bubbaLyrics/index.php?action=searchResults");
				
			event.preventDefault();
		});
		
		//when the enter key is pressed initialize a search and redirect to the results pagae
		$('#searchContent').keypress(function(event){
			if (event.which == 13) {
				//fromWhere used to determine how the breadcrumbs will be set later on
				var fromWhere = "search";
				localStorage.setItem("fromWhere", fromWhere);
				
				var searchContent = document.getElementById('searchContent').value;
				localStorage.setItem("searchContent", searchContent);
				window.location.assign("/bubbaLyrics/index.php?action=searchResults");
				
				event.preventDefault();
				return false;
			}
		});
		
		//set the dimensions of the logout box
		 var width = screen.width / 4,
            height = screen.height / 2,
            left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);
		
		//function that creates a log out box, which logs a user out
		logoutBox = function() {
			logoutWindow = window.open("https://accounts.spotify.com/en/logout", "", 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + 'em, height=' + height + 'em, top=' + top + ', left=' + left);
			setTimeout(function(){logoutWindow.close();window.location.assign("/bubbaLyrics/index.php?action=logout");}, 1750);
		}
	});
}())