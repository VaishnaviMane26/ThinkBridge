const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

 const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    if(query) {
      alert(`You searched for: ${query}`);
      // You can replace this alert with actual search functionality
    }
  });

  // Optional: trigger search when pressing Enter
  searchInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') searchBtn.click();
  });