 window.onload = function() {
 const gridBtn = document.querySelector('img[src*="7626499591553666161"]');
    const listBtn = document.querySelector('#icon');

    // 2. Identify which page we are on to highlight the correct icon
    const currentPage = window.location.pathname;

  

    // 3. Navigation Logic
    if (gridBtn) {
        gridBtn.onclick = function() {
            window.location.href = "index3.html";
            alert("button is clicked")
        };
    }

    if (listBtn) {
        listBtn.onclick = function() {
                      alert("button is clicked")

            window.location.href = "index2.html";

        };
    }
 }