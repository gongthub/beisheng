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
})
//resize
$(window).resize(function() {
	wbannertop();
})
// index js
//nav js
$('.navbar-nav>li>a').click(function() {
	$('.navbar-nav>li').removeClass('active');
	$(this).parent('li').addClass('active');
})
//轮播 js
$('.carousel').carousel({
	interval: false
})
// 固定导航后的banner距离
function wbannertop() {
	//var wnavhigh = $('.w-navwrap').height();
	//$('.w-indexbanner').css('margin-top',wnavhigh);
}

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