// Default passwords
const defaultStudentPassword = "12345";
const adminPassword = "Password1*";

let studentPassword = defaultStudentPassword;

// Video and Google Meet link
let youtubeVideoLink = "https://www.youtube.com/embed/VIDEO_ID"; // Default video
let meetLink = "https://meet.google.com/your-meeting-link"; // Default Meet link

// Student Login Function
function studentLogin() {
    const password = document.getElementById("student-password").value;
    if (password === studentPassword) {
        alert("Login successful!");
        showVideosAndMeet();
    } else {
        alert("Incorrect password!");
    }
}

// Admin Login Function
function adminLogin() {
    const password = document.getElementById("admin-password").value;
    if (password === adminPassword) {
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        alert("Incorrect admin password!");
    }
}

// Change Student Password Function
function changePassword() {
    const newPassword = document.getElementById("new-password").value;
    if (newPassword) {
        studentPassword = newPassword;
        alert("Password changed successfully!");
        document.getElementById("new-password").value = "";
    } else {
        alert("Please enter a new password.");
    }
}

// Update YouTube Video Link Function
function updateYoutubeLink() {
    const newVideoId = document.getElementById("youtube-link").value;
    if (newVideoId) {
        youtubeVideoLink = `https://www.youtube.com/embed/${newVideoId}`;
        alert("YouTube Video updated successfully!");
        document.getElementById("youtube-link").value = "";
    } else {
        alert("Please enter a valid YouTube Video ID.");
    }
}

// Update Google Meet Link Function
function updateMeetLink() {
    const newMeetLink = document.getElementById("meet-link").value;
    if (newMeetLink) {
        meetLink = newMeetLink;
        alert("Google Meet link updated successfully!");
        document.getElementById("meet-link").value = "";
    } else {
        alert("Please enter a valid Google Meet link.");
    }
}

// Show videos and meet links after student login
function showVideosAndMeet() {
    document.getElementById("video-thumbnail").style.display = "block";
    document.getElementById("meet-link-btn").style.display = "inline-block";
    document.getElementById("student-login").style.display = "none";
}

// Play Video Function (Embed YouTube Video)
function playVideo() {
    const videoSection = document.getElementById("video-section");
    const iframe = document.createElement("iframe");
    iframe.src = youtubeVideoLink;
    iframe.frameborder = "0";
    iframe.allowfullscreen = true;
    videoSection.innerHTML = "";
    videoSection.appendChild(iframe);
}

// Join Google Meet Function (Redirect to Meet Link)
function joinMeet() {
    window.open(meetLink, "_blank");
}

// Initialize page view
window.onload = function() {
    document.getElementById("video-thumbnail").style.display = "none";
    document.getElementById("meet-link-btn").style.display = "none";
};
