const navbar = document.querySelector(".navbar");

const brand = document.querySelector(".brand");

const hamberger = document.querySelector(".hamburger");
const line = document.querySelectorAll(".line");

const options = document.querySelector(".options");
const links = document.querySelectorAll(".options li");


hamberger.addEventListener('click',() => {
	options.classList.toggle("open");
	line.forEach(whiteline => {
		whiteline.classList.toggle("whiteLine");
	});
	navbar.classList.toggle("purple");
	brand.classList.toggle("brandOpen");

	anime({
        targets: ".brand.brandOpen",
        translateX: 250,
    });

});

 // Scrolling Effect
 $(window).on("scroll", function () {
     if ($(window).scrollTop()) {
         $(".navbar").addClass("black");
		 $(".line").forEach((whiteline) => {
             whiteline.addClass("whiteLine");
         });
		} else {
			$(".navbar").removeClass("black");
			$(".line").forEach((whiteline) => {
				whiteline.removeClass("whiteLine");
			});
     }
 });