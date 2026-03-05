// Initialize Lucide icons
lucide.createIcons();

// Mobile nav drawer
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const navDrawer = document.getElementById('navDrawer');
const navOverlay = document.getElementById('navOverlay');

function openDrawer() {
	navDrawer.classList.add('is-open');
	navOverlay.classList.add('is-open');
	document.body.style.overflow = 'hidden';
}

function closeDrawer() {
	navDrawer.classList.remove('is-open');
	navOverlay.classList.remove('is-open');
	document.body.style.overflow = '';
}

navToggle.addEventListener('click', openDrawer);
navClose.addEventListener('click', closeDrawer);
navOverlay.addEventListener('click', closeDrawer);

// Close drawer on link click
navDrawer.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', closeDrawer);
});

// Sticky nav background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
	header.classList.toggle('header--scrolled', window.scrollY > 60);
}, {
	passive: true
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', (e) => {
		const target = document.querySelector(link.getAttribute('href'));
		if (target) {
			e.preventDefault();
			target.scrollIntoView({
				behavior: 'smooth'
			});
		}
	});
});