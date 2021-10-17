(function () {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	let today = new Date();
	let dd = String(today.getDate()).padStart(2, "0");
	let mm = String(today.getMonth() + 1).padStart(2, "0");
	let yyyy = today.getFullYear();
	let nextYear = yyyy + 1;
	let dayMonth = "06/29/";
	let dayx = dayMonth + yyyy;

	today = mm + "/" + dd + "/" + yyyy;
	if (today > dayx) {
		dayx = dayMonth + nextYear;
	}

	const countDown = new Date(dayx).getTime();
	const x = setInterval(function () {
		const now = new Date().getTime();
		const distance = countDown - now;

		(document.getElementById("days").innerText = Math.floor(distance / day)),
			(document.getElementById("hours").innerText = Math.floor(
				(distance % day) / hour
			)),
			(document.getElementById("minutes").innerText = Math.floor(
				(distance % hour) / minute
			)),
			(document.getElementById("seconds").innerText = Math.floor(
				(distance % minute) / second
			));

		//по окончании отсчета
		if (distance < 0) {
			document.getElementById("headline").innerText = "Артём вернулся!";
			document.getElementById("countdown").style.display = "none";
			document.getElementById("content").style.display = "block";
			clearInterval(x);
		}
	}, 1000);
})();
