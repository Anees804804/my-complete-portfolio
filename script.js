document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animation on Scroll
    const reveals = document.querySelectorAll('.reveal');
    const progressBar = document.getElementById('progress-bar');

    function handleScroll() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if(progressBar) {
            progressBar.style.width = (winScroll / height) * 100 + "%";
        }

        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run to reveal elements on top

    // 2. Smooth Reveal for the whole body to prevent flash
    document.body.style.opacity = '1';
});