function toggle() {
	var nav = document.getElementById("header-nav")
	if (window.getComputedStyle(nav).display == "none")
		nav.style.display = "flex"

	else if (window.getComputedStyle(nav).display == "flex") {
		nav.style.display = "none"
		nav.style.height = "100%"
	}

	else console.log("?? error", getComputedStyle(nav))
}
