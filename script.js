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
