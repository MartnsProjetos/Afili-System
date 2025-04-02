document.addEventListener('DOMContentLoaded', () => {
    // Animação suave ao scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Animação dos números na seção de estatísticas
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
  
    stats.forEach(stat => {
      stat.style.opacity = 0;
      stat.style.transform = 'translateY(20px)';
      stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(stat);
    });
  });