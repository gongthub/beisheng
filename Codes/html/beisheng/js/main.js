/**
 * Created by Administrator on 2017/1/5.
 */
// wow.js
new WOW().init();
// $(function () {})
$(function() {
	wbannertop();
	indexProjectShow();
	$(".div-project-center-btn-img").mouseover(function() {
		initIndexProjectBtnMous(this);
	});
	showindexvideo();
})
//resize
$(window).resize(function() {
	wbannertop();
	showindexvideo();
})
// index js
//nav js
$('.navbar-nav>li>a').click(function() {
	$('.navbar-nav>li').removeClass('active');
	$(this).parent('li').addClass('active');
})
//轮播 js
$('#div-index-img-carousel').carousel({
	interval: false
})
//奖状奖杯轮播 js
$('#div-cup-show-cent').carousel({
	interval: 5000
})
// 固定导航后的banner距离
function wbannertop() {
	//var wnavhigh = $('.w-navwrap').height();
	//$('.w-indexbanner').css('margin-top',wnavhigh);
}

//首页工程项目展示
function initIndexProjectBtnMous(e) {
	if(!$(e).hasClass("div-project-center-btn-img-active")) {
		var showid = $(e).attr("showid");
		var showdiv = $(".div-project-center-btn-img");
		if(showdiv != undefined && showdiv.length > 0) {
			for(var i = 0; i < showdiv.length; i++) {
				if($(showdiv[i]).attr("showid") == showid) {
					$(showdiv[i]).addClass("div-project-center-btn-img-active");
				} else {
					$(showdiv[i]).removeClass("div-project-center-btn-img-active");
				}
			}
		}
		indexProjectShow();
	}

}

function initIndexProjectBtn() {
	var showIdT = 0;
	var showdiv = $(".div-project-center-btn-img");
	if(showdiv != undefined && showdiv.length > 0) {
		for(var i = 0; i < showdiv.length; i++) {
			if($(showdiv[i]).hasClass("div-project-center-btn-img-active")) {
				showIdT = $(showdiv[i]).attr("showid");
			}
		}
	}
	return showIdT;
}

function indexProjectShow() {
	showid = initIndexProjectBtn();
	var showdiv = $("#div-project-center-show").find(".div-project-center-text");
	if(showdiv != undefined && showdiv.length > 0) {
		for(var i = 0; i < showdiv.length; i++) {
			var showIdT = $(showdiv[i]).attr("showid");
			if(showIdT == showid) {
				$(showdiv[i]).attr("style", "display:block");
			} else {
				$(showdiv[i]).attr("style", "display:none");
			}
		}
	}
}

function showindexvideo() { 
	var divw = $("#div-video-show").width(); 
	$("#div-index-video-show").width(divw);
	initvido();

}

function initvido() {
	var player = videojs("div-index-video-show", {
		"autoplay": false,
		controlBar: {
			captionsButton: false,
			chaptersButton: false,
			liveDisplay: false,
			playbackRateMenuButton: false,
			subtitlesButton: false
		}

	}, function() {

		this.on('loadeddata', function() {

		})

		this.on('ended', function() {
			//       this.pause();
			this.hide()
			this.show();

		})

	});
}