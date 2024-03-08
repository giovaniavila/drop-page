const items = document.querySelectorAll('.carosel-content');
let currentItem = 0;

function hideAllItems() {
    items.forEach(item => {
        item.style.display = 'none';
    });
}

function showItem(index) {
    hideAllItems();
    items[index].style.display = 'grid';
}

function showNextItem() {
    currentItem++;
    if (currentItem > items.length) {
        currentItem = 0;
    }
    console.log('Next Item:', currentItem);
    showItem(currentItem);
}

function showPrevItem() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = items.length - 1;
    }
    console.log('Prev Item:', currentItem);
    showItem(currentItem);
}


document.querySelector('.carosel-arrowLeft').addEventListener('click', showPrevItem);
document.querySelector('.carosel-arrowRight').addEventListener('click', showNextItem);

// Iniciar escondendo todos os itens e mostrando o primeiro\
hideAllItems();
showItem(currentItem);
