$(window).on("load",function(){$("body").css("overflow-y","auto");$(".loading").fadeOut(2000)});$(function(e){e(window).scroll(function(){if(e(window).scrollTop()>=300){e(".to-top").fadeIn()}else{e(".to-top").fadeOut()}});e(".to-top").click(function(){e("html , body").animate({scrollTop:0},2500,"swing")});e(".navbar .navbar-nav .nav-link").click(function(d){d.preventDefault();e("html , body").animate({scrollTop:e("#"+e(this).data("scroll")).offset().top},2000,"swing")});e(".carousel").carousel();var b=new Date(),h=b.getFullYear(),a=b.getMonth()+1,g=b.getDate();if(a<10){a="0"+a}if(g<10){g="0"+g}var c=h+"-"+a+"-"+g;e(".first-input").val(c).attr("min",c);var f=e(".first-input").val();e(".second-input").val(c);e.fn.ch=function(){e(".second-input").val(e(".first-input").val()).attr("min",e(".first-input").val())};e(".show-all").click(function(){e(".all-tour").slideDown(1500);e(this).fadeOut(300);e(".hide-all").fadeIn(2000)});e(".hide-all").click(function(){e(".all-tour").slideUp(1500);e(this).fadeOut(300);e(".show-all").fadeIn(2000)});e(".show-tests-all").click(function(){e(".all-tests").slideDown(1500);e(this).fadeOut(300);e(".hide-tests-all").fadeIn(2000)});e(".hide-tests-all").click(function(){e(".all-tests").slideUp(1500);e(this).fadeOut(300);e(".show-tests-all").fadeIn(2000)});e(".inner-why").on("mouseenter",function(){e(this).addClass("active").siblings().removeClass("active")});e(".follow-icon").on("mouseenter",function(){e(this).addClass("active").siblings().removeClass("active")})});