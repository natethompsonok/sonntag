<!-- NEW: Pure JavaScript for Triggering the Modal -->
  
      window.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('videoModal');
        const iframe = document.getElementById('modalIframe');
        const closeBtn = document.getElementById('closeModal');
        const triggerLinks = document.querySelectorAll('.js-open-modal');

        // Open modal and load respective source URL dynamically
        triggerLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.getAttribute('data-video-url');
            if (targetUrl) {
              iframe.src = targetUrl;
              modal.showModal(); // Standard JavaScript call for dialog overlay
            }
          });
        });

        // Close modal setup and source clearing (stops audio playback instantly)
        const shutModal = () => {
          modal.close();
          iframe.src = '';
        };

        closeBtn.addEventListener('click', shutModal);

        // Closes modal automatically if clicking anywhere outside the active box window frame
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            shutModal();
          }
        });
      });
   
