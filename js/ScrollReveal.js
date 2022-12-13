ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('#titulo-temporada, #titulo-trailer, #titulo-guia, #introducao-noticias, #introducao-guia, #introducao-temporada, #introducao-trailer', { delay: 1, origin: 'right', interval: 200 });
ScrollReveal().reveal('#background-temporada, #image-guia, #titulo-noticias', { delay: 100, origin: 'top', interval: 500 });
ScrollReveal().reveal('#background-trailer, #trailer-video', { delay: 100, origin: 'bottom', interval: 500 });