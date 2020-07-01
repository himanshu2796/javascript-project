const toggle = document.getElementById('toggle');
const close1 = document.getElementById('close');
const open1 = document.getElementById('open');
const modal = document.getElementById('modal');


toggle.addEventListener('click',()=>document.body.classList.toggle('show-nav'));

open1.addEventListener('click',()=>modal.classList.add('show-modal'));

close1.addEventListener('click',()=>modal.classList.remove('show-modal'));

window.addEventListener('click',e=>e.target ==modal ?modal.classList.remove('show-modal'):false);

