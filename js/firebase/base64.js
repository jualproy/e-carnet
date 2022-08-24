
////////////////////////////////////////////////////////////////
// Convert Base64 to Image
$(document).ready(function() {
$("#BaseToImage").click(function() {
	//alert($("#response").val());
	document.getElementById('preview').setAttribute('src', $("#image").val());
	$("#preview").show();
});
});
//Convert Image to Base64
$(document).ready(function() {
$("#inputFileToLoad").change(function() {
	var filesSelected = document.getElementById("inputFileToLoad").files;
	if (filesSelected.length > 0) {
		var fileToLoad = filesSelected[0];
		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) {
			var base64value = fileLoadedEvent.target.result;
			console.log(base64value);
			$("#response").val(base64value);
		};
		fileReader.readAsDataURL(fileToLoad);
	}
});
});