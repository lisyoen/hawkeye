/*
문제 interface
*/

function question(level) {
	this.text = "Question";
	this.image = "<div></div>"
	this.example = {type: "range", min: 10, max: 20, correct: 15};
	this.example = {type: "array", value: ["A", "B", "C"], correct: "A"};
}

function qLength(level) {
	// 
	var lenA = Math.random() * 10 + level;
	this.text = "A의 길이는 " + lenA + "이다. B의 길이는?";
	this.image = '<div id="question-image" class="question-image" style="padding:10px;background-color:rgb(200,200,200);">' + 
		'<div class="bar-a" style="width:150px; height:auto; background-color:rgb(180,80,80); margin:5px;text-align:center;color:white;">A = ' + lenA + "</div>" +
		'<div class="bar-b" style="width:200px; height:auto; background-color:rgb(80,80,180); margin:5px;text-align:center;color:white;">B = ?</div>' + 
		'</div>';
	this.example = {
		type: "range",
		min: 0,
		max: 0,
		correct: 0};
}