document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
      
            targetElement.classList.add('highlight-active');
            setTimeout(() => {
                targetElement.classList.remove('highlight-active');
      
            }, 1500);
   
        }



    });
});