document.addEventListener("DOMContentLoaded", function(){
  const scrollElems = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('scrolled');
      }
    });
  }, { threshold: 0.5 }); // Adjust this value as needed
  scrollElems.forEach(el => observer.observe(el));
});
