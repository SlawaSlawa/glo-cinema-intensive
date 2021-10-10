'use strict';

const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceEl = document.querySelector('.price-total');
const cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (evt) => {
	const target = evt.target;

	if (!target.classList.contains('booked')) {
		target.classList.toggle('active');
		const totalSeats = schemeSvg.querySelectorAll('.active').length;

		totalPrice = cost * totalSeats;
		totalPriceEl.textContent = totalPrice;
	}
});

