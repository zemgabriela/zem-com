// Set section background image based on current page
document.addEventListener("DOMContentLoaded", function() {
  const section = document.querySelector('.section-bg-image');
  if(!section) return;

  const page = window.location.pathname.split('/').pop().toLowerCase();

  let bgUrl = '';

  switch(page) {
    case 'index.html':
      bgUrl = 'images/pic5.jpeg';
      break;
    case 'pobyt.html':
      bgUrl = 'images/dvojdomy_zvrchu.JPEG';
      break;
    case 'wellness.html':
      bgUrl = 'images/pic5.jpeg';
      break;
    default:
      bgUrl = 'images/pic5.jpeg';
  }

  section.style.backgroundImage = `url('${bgUrl}')`;
});

// FAQ Accordion Functionality
 document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const isActive = button.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-question').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.parentElement.querySelector('.faq-answer').classList.remove('active');
            }
        });

        // Toggle current item
        button.classList.toggle('active');
        answer.classList.toggle('active');
    });
    });