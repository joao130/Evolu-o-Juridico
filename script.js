// Stamp-in animation on scroll, respects reduced motion implicitly via CSS
  const areas = document.querySelectorAll('.area');
  if ('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('is-visible'); }
      });
    },{threshold:0.3});
    areas.forEach(a=>obs.observe(a));
  } else {
    areas.forEach(a=>a.classList.add('is-visible'));
  }

  document.addEventListener("DOMContentLoaded", function () {
  const iaCards = document.querySelectorAll(".ia-card, .ia-diferencial, .ia-intro");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("ia-visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  iaCards.forEach(function (card) {
    card.classList.add("ia-hidden");
    observer.observe(card);
  });
});
