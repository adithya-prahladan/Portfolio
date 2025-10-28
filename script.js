const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.getElementById('nav-links');

// Toggle navigation for small screens
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const wb = XLSX.utils.book_new();
    const ws_data = [
        ["Name", "Email", "Message"],
        [name, email, message]
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, "Contact Data");

    XLSX.writeFile(wb, "contact_data.xlsx");
});