document.querySelectorAll('form').forEach((form)=>form.addEventListener('submit',(event)=>{event.preventDefault();const button=form.querySelector('button');button.textContent='Заявка принята - демонстрационный режим';button.disabled=true;}));
document.querySelectorAll('a[href^="#"]').forEach((link)=>link.addEventListener('click',()=>document.body.classList.remove('menu-open')));
