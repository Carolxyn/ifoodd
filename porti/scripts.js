document.querySelectorAll('.card a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        alert('Detalhes do repasse ainda não estão disponíveis.');
    });
});

