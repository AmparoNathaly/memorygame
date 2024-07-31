function toggleDropdown() {
    var dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

function selectLevel(level) {
    var dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = "none"; 
}