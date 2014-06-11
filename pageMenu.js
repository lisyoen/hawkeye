$(document).on("pageinit", "#pageMenu", function (event) {
	console.log("pageinit");
	$("#userName").text(userInfo.name);
	$("#userTitle").text(gradeManager.getTitle(userInfo.grade));
	$("#input").on("keyup",  function(e) {
		localStorage.text = $("#input").val();
	});

	console.log("-pageinit");
});
