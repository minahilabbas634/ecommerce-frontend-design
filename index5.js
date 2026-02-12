window.onload = function() {
    // 1. Find all buttons with the class 'qtyBtn'
    const buttons = document.querySelectorAll('.qtyBtn');

    buttons.forEach(function(btn) {
        // Find the <ul> sitting right next to this button
        const menu = btn.nextElementSibling;
        const textSpan = btn.querySelector('span');

        // Toggle menu when button is clicked
        btn.onclick = function(event) {
            event.stopPropagation(); // Stops the menu from closing immediately
            
            // Close any other open menus
            document.querySelectorAll('.qtyMenu').forEach(m => {
                if (m !== menu) m.classList.remove('show');
            });

            menu.classList.toggle('show');
            btn.classList.toggle('active-grey');
        };

        // Update text when a number is clicked
        const items = menu.querySelectorAll('li');
        items.forEach(function(item) {
            item.onclick = function() {
                textSpan.innerText = this.innerText;
                menu.classList.remove('show');
                btn.classList.remove('active-grey');
            };
        });
    });

    // Close everything if you click anywhere else on the page
    window.onclick = function() {
        document.querySelectorAll('.qtyMenu').forEach(m => m.classList.remove('show'));
        document.querySelectorAll('.qtyBtn').forEach(b => b.classList.remove('active-grey'));
    };
};