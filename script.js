$(document).ready(function (){
	$.ajax({
		type: 'GET',
		url: 'http://fakerestapi.azurewebsites.net/api/Books/20',
		success: function(html){
				var obj = html;
				$("#Description").append(obj.Description);
				$("#Excerpt").append(obj.Excerpt);
				$("#ID").append(obj.ID);
				$("#PageCount").append(obj.PageCount);
				$("#PublishDate").append(obj.PublishDate);
				$("#Title").append(obj.Title);
		}
	});
});