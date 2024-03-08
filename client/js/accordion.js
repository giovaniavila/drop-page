const accordionList = document.querySelectorAll('.footer-content-accordion');

accordionList.forEach((item) => {
    const ddElements = item.parentNode.querySelector('#footer-content-ddEscondido');
    const icon = item.querySelector('#icon');
    
    item.classList.add('ativo');
    ddElements.classList.add('ativo');
    icon.style.transform = 'rotate(90deg)';
    
    item.addEventListener('click', () => {
        item.classList.toggle('ativo');
        ddElements.classList.toggle('ativo');
        icon.style.transform = icon.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
    });
});
