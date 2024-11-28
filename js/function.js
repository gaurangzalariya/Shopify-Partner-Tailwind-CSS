// Get the overlay element
const ove = document.getElementById('over');

// --------- Toggle navbar mobile screen ---------
// Variables for menu icon bars
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

// Toggle navbar visibility and overflow
document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('navbar').classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');

  // Toggle bar animations for the menu icon
  bar1.classList.toggle('transform-bar1');
  bar2.classList.toggle('opacity-0');
  bar3.classList.toggle('transform-bar3');
});

// Hide navbar if clicking outside of it
document.addEventListener('click', function (event) {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');

  if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
    navbar.classList.remove('active');
    document.body.classList.remove('overflow-hidden');

    // Remove bar animations when navbar is hidden
    bar1.classList.remove('transform-bar1');
    bar2.classList.remove('opacity-0');
    bar3.classList.remove('transform-bar3');
  }
});

// ---------Toggle dropdown---------
document.querySelectorAll('.dropdown-toggle').forEach(toggler => {
  toggler.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent closing when clicking inside
    
    // Get the dropdown menu (listbar) associated with the toggler
    const listbar = toggler.nextElementSibling;
    
    // Check if the clicked dropdown is already visible
    const isAlreadyVisible = !listbar.classList.contains('hidden');
    
    // Hide all dropdowns first, make sure to close other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(otherListbar => {
      if (otherListbar !== listbar) {
        otherListbar.classList.add('hidden');  // Hide other dropdowns
        // Reset icons for all other togglers
        const otherIcon = otherListbar.previousElementSibling.querySelector('.toggle-icon');
        otherIcon.classList.add('fa-angle-down');
        otherIcon.classList.remove('fa-angle-up');
      }
    });

    // If the clicked dropdown was not already visible, show it
    if (!isAlreadyVisible) {
      listbar.classList.remove('hidden');
      // Toggle the icon for the clicked button
      const icon = toggler.querySelector('.toggle-icon');
      icon.classList.toggle('fa-angle-up');
      icon.classList.toggle('fa-angle-down');
    } else {
      // If already visible, close it and reset the icon
      listbar.classList.add('hidden');
      const icon = toggler.querySelector('.toggle-icon');
      icon.classList.add('fa-angle-down');
      icon.classList.remove('fa-angle-up');
    }
  });
});

// ---------Close all dropdowns if clicking outside---------
document.addEventListener('click', function (event) {
  if (!event.target.closest('.dropdown-toggle') && !event.target.closest('.dropdown-menu')) {
    // Close all dropdowns if clicking outside
    document.querySelectorAll('.dropdown-menu').forEach(listbar => {
      listbar.classList.add('hidden');
    });

    // Reset all toggle icons to "fa-angle-down"
    document.querySelectorAll('.dropdown-toggle .toggle-icon').forEach(icon => {
      icon.classList.add('fa-angle-down');
      icon.classList.remove('fa-angle-up');
    });
  }
});

// ---------section animation---------
const animateElements = document.querySelectorAll('.fade-up, .fade-right, .fade-left');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.35 
});
animateElements.forEach(element => observer.observe(element));

// ---------logo slider---------
const sliderWrapper = document.querySelector('.slider-wrapper');
sliderWrapper.style.animationPlayState = 'running'; 

// ---------headre fixd---------
window.addEventListener('scroll', function() {
  const nav = document.getElementById('d-line');
  const body = document.getElementById('over');
  
  if (window.scrollY > 500) {  // Check if user has scrolled down
    nav.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'z-50', 'border-b', 'border-gray-300');
    body.classList.add('pt-[50px]','max-xl:pt-[145px]');  // Add padding to body
  } else {
    nav.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'z-50', 'border-b', 'border-gray-300');
    body.classList.remove('pt-[50px]','max-xl:pt-[145px]');  // Remove padding from body
  }
});