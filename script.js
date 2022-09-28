import {modal} from './modal.js';

let btn = document.querySelectorAll('.item__btn');

Array.from(btn).forEach(el => el.addEventListener('click', showModal));


function showModal () {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideModal () {
    popup.style.display = 'none';
    document.body.style.overflow = '';
}

let popup = document.createElement('div');
popup.className = 'popup';

document.body.prepend(popup);

let popupModal = document.createElement('div');
popupModal.className = 'popupModal';

popup.prepend(popupModal);

let title = document.createElement('h1');
title.textContent = modal.title;

let image = document.createElement('img');
image.src = modal.src;

let close = document.createElement('button');
close.className = 'close';
close.textContent = 'Close';

popupModal.prepend(title, image, close);

close.addEventListener('click', hideModal);
popup.addEventListener('click', hideModal);











