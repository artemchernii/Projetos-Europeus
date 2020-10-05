document.body.onload = function () {

	setTimeout(function () {
		var preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);



}
$(document).ready(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.top_head').addClass('header-scrolled');
		} else {
			$('.top_head').removeClass('header-scrolled');
		}
	});

	// Navigation active state on scroll
	// var nav_sections = $('section');
	// var main_nav = $('.main-nav, .mobile-nav');
	// var main_nav_height = $('#header').outerHeight();

	// $(window).on('scroll', function () {
	// 	var cur_pos = $(this).scrollTop();

	// 	nav_sections.each(function () {
	// 		var top = $(this).offset().top - main_nav_height,
	// 			bottom = top + $(this).outerHeight();

	// 		if (cur_pos >= top && cur_pos <= bottom) {
	// 			main_nav.find('li').removeClass('active');
	// 			main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
	// 		}
	// 	});
	// });


	new WOW().init();
	$("a[href*='#']").mPageScroll2id();
	$('#backtotop').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	$("#arr_id1").on("click", function () {
		$(this).toggleClass("arr_active");
		$("#arr_id_1").toggleClass("arr_active");
		if ($(".oportunidades_block_content.content1").is(":visible")) {
			$(".oportunidades_block_content.content1").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content1").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});
	$("#arr_id2").on("click", function () {
		$(this).toggleClass("arr_active");
		$("#arr_id_2").toggleClass("arr_active");
		if ($(".oportunidades_block_content.content2").is(":visible")) {
			$(".oportunidades_block_content.content2").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content2").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});
	$("#arr_id3").on("click", function () {
		$(this).toggleClass("arr_active");
		$("#arr_id_3").toggleClass("arr_active");
		if ($(".oportunidades_block_content.content3").is(":visible")) {
			$(".oportunidades_block_content.content3").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content3").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});
	$("#arr_id4").on("click", function () {
		$(this).toggleClass("arr_active");
		$("#arr_id_4").toggleClass("arr_active");
		if ($(".oportunidades_block_content.content4").is(":visible")) {
			$(".oportunidades_block_content.content4").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content4").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});
	$("#arr_id5").on("click", function () {
		$(this).toggleClass("arr_active");
		$("#arr_id_5").toggleClass("arr_active");
		if ($(".oportunidades_block_content.content5").is(":visible")) {
			$(".oportunidades_block_content.content5").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content5").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});

	$("#arr_id_1").on("click", function () {
		$(this).toggleClass("arr_active");
		if ($(".oportunidades_block_content.content1").is(":visible")) {
			$(".oportunidades_block_content.content1").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content1").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});
	$("#arr_id_2").on("click", function () {
		$(this).toggleClass("arr_active");
		if ($(".oportunidades_block_content.content2").is(":visible")) {
			$(".oportunidades_block_content.content2").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content2").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});
	$("#arr_id_3").on("click", function () {
		$(this).toggleClass("arr_active");
		if ($(".oportunidades_block_content.content3").is(":visible")) {
			$(".oportunidades_block_content.content3").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content3").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});
	$("#arr_id_4").on("click", function () {
		$(this).toggleClass("arr_active");
		if ($(".oportunidades_block_content.content4").is(":visible")) {
			$(".oportunidades_block_content.content4").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content4").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});
	$("#arr_id_5").on("click", function () {
		$(this).toggleClass("arr_active");
		if ($(".oportunidades_block_content.content5").is(":visible")) {
			$(".oportunidades_block_content.content5").fadeOut(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".oportunidades_block_content.content5").fadeIn(600);
			// $(".top_mnu li a").removeClass("fadeInUp animated");
		}
	});


	$(".hamburger").on("click", function () {
		$(this).toggleClass("is-active");
		if ($(".mob_menu").is(":visible")) {
			$(".mob_menu").css("opacity", "0");
			setTimeout(function () {
				$(".mob_menu").css("display", "none");
			}, 200);
		} else {
			$(".mob_menu").css("display", "block");
			// $(".mob_menu").css("height", "100%")
			setTimeout(function () {
				$(".mob_menu").css("opacity", "1");
			}, 200);
		}
	});


	jQuery.fn.scrollTo = function (elem) {
		var b = $(elem);
		this.scrollTop((b.position().top - b.height()) - 200);
	};

	$(".seg1").on("click", function () {
		$("#scroll2").scrollTo($("#seg"));
	});
	$(".seg2").on("click", function () {
		$("#scroll2").scrollTo($("#seg2"));
	});
	$(".seg3").on("click", function () {
		$("#scroll2").scrollTo($("#seg3"));
	});


});