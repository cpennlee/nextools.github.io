// Add smooth fade-in animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    requestAnimationFrame(() => {
        container.style.transition = 'opacity 1s ease';
        container.style.opacity = '1';
    });
});