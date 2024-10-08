document.addEventListener('DOMContentLoaded', function() {
  const faqTitles = document.querySelectorAll('.faq-title');

  faqTitles.forEach(title => {
      title.addEventListener('click', function() {
          const faqSection = this.parentElement;
          const content = faqSection.querySelector('.faq-content');

          faqSection.classList.toggle('active');
      });
  });
});
