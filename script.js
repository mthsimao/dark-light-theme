const changeThemeBtn = document.querySelector('#change-theme')

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark")
}

// Load dark or light mode

function loadTheme() {
    const darkmode = localStorage.getItem("dark")

    if (darkmode) {
        toggleDarkMode()
    }
}

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode()

    // Save or remove dark mode
    localStorage.removeItem('dark')

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})
