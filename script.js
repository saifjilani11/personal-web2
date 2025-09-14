// Intersection Observer to reveal elements on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  })
},{ threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// Contact form handler (mailto fallback)
const form = document.querySelector('form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const msg = form.querySelector('textarea[name="message"]').value.trim();
    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${msg}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  });
}