const header = document.querySelector(".main-header");
window.addEventListener('scroll', () => {
    const scrollpos = window.scrollY;
    if (scrollpos > 10) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})