document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function showSection(hash) {
        sections.forEach(section => {
            if (section.id === hash) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Show the first section by default
    if (navLinks.length > 0) {
        showSection(navLinks[0].getAttribute('href').substring(1));
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'EXPEND MENU ☰ ';
    toggleButton.classList.add('toggle-button'); // Add a class to the toggle button
    nav.parentNode.insertBefore(toggleButton, nav); // Insert toggle button before nav

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('active'); // Toggle the active class on nav
    });
});
