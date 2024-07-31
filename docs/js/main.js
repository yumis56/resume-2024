document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        targetElement.classList.add('highlight');
        setTimeout(() => {
            targetElement.classList.remove('highlight');
        }, 2000);
    });
});