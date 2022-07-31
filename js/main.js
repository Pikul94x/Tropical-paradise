const nav = document.querySelector(".nav");
const btn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");

const handleNav = () => {
	nav.classList.toggle("nav--active");

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delay = 0;

	allNavItems.forEach(item => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = `.${delay}s`;
		delay++;
	});
};

btn.addEventListener("click", handleNav);
