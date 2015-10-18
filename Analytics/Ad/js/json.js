$(document).ready( function() {
	var jsondata = $.getJSON("https://nielsen.api.tibco.com/TopTen/v1/Books?apikey=9029-09e16fea-cf77-4f2e-a032-1bd8ae3aff9f", function(data){
			
				});
				out += jsonPath(jsondata, "$.Category[*].CategoryName").toJSONString() + "\n>";
				document.write(out);
});
 