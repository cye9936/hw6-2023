var video = document.querySelector("#player1");
// Page Load
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});
// Play Button
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume;
});
// Pause Button
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});
// Slow Down
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate -= 0.1;
	console.log("The new speed is", video.playbackRate);
});
// Speed Up
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate += 0.1;
	console.log("The new speed is", video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("The new location is", video.currentTime);
});
// Mute
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});
// Volume Slider
document.querySelector("#slider").addEventListener("change", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume;
});

// Styled
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});


