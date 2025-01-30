document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('studio-agatho');
    const content = "About Me";
    
    function typeText() {
        text.textContent = '';
        text.classList.add('typing');
        let index = 0;
        
        // Typing effect
        const typing = setInterval(() => {
            if (index < content.length) {
                text.textContent += content[index];
                index++;
            } else {
                clearInterval(typing);
                setTimeout(deleteText, 2000); // Tunggu 2 saat sebelum mula padam
            }
        }, 100);
    }
    
    function deleteText() {
        text.classList.remove('typing');
        text.classList.add('deleting');
        let index = content.length;
        
        // Deleting effect
        const deleting = setInterval(() => {
            if (index > 0) {
                text.textContent = content.substring(0, index - 1);
                index--;
            } else {
                clearInterval(deleting);
                text.classList.remove('deleting');
                setTimeout(typeText, 1000); // Tunggu 1 saat sebelum mula taip semula
            }
        }, 100);
    }
    
    // Mulakan animasi
    typeText();
});

    // Start the animation loop
    fadeInAndOut();

 // Optional: Trigger animation after DOM is fully loaded
        document.addEventListener("DOMContentLoaded", () => {
            const imageRow = document.querySelector('.image-row');
            imageRow.style.animationPlayState = 'running';
        });

        function openModal(title, description, imageUrl) {
            const modal = document.getElementById("imageModal");
            document.getElementById("modalTitle").innerText = title;
            document.getElementById("modalDescription").innerText = description;
            document.getElementById("modalImage").src = imageUrl;
          
            modal.style.display = "flex";
          }
          
          function closeModal() {
            const modal = document.getElementById("imageModal");
            modal.style.display = "none";
          }
          
          
          document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    
    // Tunjukkan/sembunyikan butang berdasarkan kedudukan scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Tunjukkan butang selepas scroll 300px
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll ke atas apabila butang diklik
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
          

