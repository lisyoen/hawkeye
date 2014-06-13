// App
function _app() {
	this.ui_lock = false;
	
	this.init = function() {
	
	};
	
	this.main = function() {
	/*
		userInfo.name = "이창연";
		userInfo.grade = 1;
		userInfo.level.length = [3];
		userInfo.level.area = [2];
		userInfo.level.volume = [1];
		localStorage.hawkeye = JSON.stringify(userInfo);
	*/
		if (localStorage.hawkeye) {
			userInfo = new _userInfo(JSON.parse(localStorage.hawkeye));
		}
	};
}

var app = new _app();

function _stage() {

}

// Grade Manager
function _gradeManager() {
	function _grade_pair(t, u) {
		this.title = t;
		this.url = u;
	}
	var gradeList = [];
	gradeList.push(new _grade_pair("등급 없음", "http://"));
	gradeList.push(new _grade_pair("병아리의 눈", "http://"));
	gradeList.push(new _grade_pair("참새의 눈", "http://"));
	gradeList.push(new _grade_pair("비둘기의 눈", "http://"));
	gradeList.push(new _grade_pair("제비의 눈", "http://"));
	gradeList.push(new _grade_pair("갈매기의 눈",  "http://"));
	gradeList.push(new _grade_pair("올빼미의 눈", "http://"));
	gradeList.push(new _grade_pair("도요의 눈",  "http://"));
	gradeList.push(new _grade_pair("독수리의 눈", "http://"));
	gradeList.push(new _grade_pair("매의 눈", "http://"));
	
	this.getTitle = function(grade) {
		if (grade < gradeList.length) {
			return gradeList[grade].title;
		} else if (grade < 0 || !grade) {	// under bound
			return gradeList[0].title;
		} else {	// upper bound
			return gradeList[gradeList.length - 1].title + "(+" + grade- gradeList.length + 1 + ")";
		}
	};
	this.getLength = function() {
		return gradeList.length;
	};
}

var gradeManager = new _gradeManager();

// User Info
function _userInfo(src) {
	if (src) {
		this.name = src.name ? src.name : "홍길동";
		this.grade = src.grade;
		this.level = src.level;
	} else {
		this.reset();
	}
}

_userInfo.prototype.reset = function() {
	this.name = "홍길동";
	this.grade = 0;
	this.level = {length: [0],
		area: [0],
		volume: [0]};
};

var userInfo = new _userInfo();

$(function() {
	console.log("document ready");
	$(".btn-answer").on("tap", function(e) {
		$.mobile.changePage("#pageLengthExam", {
			transition: "slide",
			allowSamePageTransition: "true"
		});
	});
	$("#btnLengthStage1").on("tap", function(e) {
	});
});

// start
app.main();
