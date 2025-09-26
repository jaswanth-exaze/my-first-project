document.addEventListener('DOMContentLoaded', function() {
    const glow = document.getElementById('glow');
    
    // Update glow position based on mouse movement
    document.addEventListener('mousemove', function(e) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
    
    // Make glow bigger when mouse is moving fast
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;
    
    document.addEventListener('mousemove', function(e) {
        const currentTime = Date.now();
        
        if (lastTime !== 0) {
            const deltaX = e.clientX - lastX;
            const deltaY = e.clientY - lastY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const timeDelta = currentTime - lastTime;
            const speed = distance / timeDelta;
            
            // Adjust glow size based on speed
            const baseSize = 150;
            const speedFactor = Math.min(speed * 50, 100); // Limit the maximum size increase
            const newSize = baseSize + speedFactor;
            
            glow.style.width = newSize + 'px';
            glow.style.height = newSize + 'px';
        }
        
        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = currentTime;
    });
    
    // Reset glow size when mouse stops
    let mouseStopTimer;
    document.addEventListener('mousemove', function() {
        clearTimeout(mouseStopTimer);
        mouseStopTimer = setTimeout(function() {
            glow.style.width = '150px';
            glow.style.height = '150px';
        }, 100);
    });
    
    // Add click effect
    document.addEventListener('click', function() {
        glow.style.width = '200px';
        glow.style.height = '200px';
        
        setTimeout(function() {
            glow.style.width = '150px';
            glow.style.height = '150px';
        }, 200);
    });
    
    // Hide glow when mouse leaves the window
    document.addEventListener('mouseleave', function() {
        glow.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
        glow.style.opacity = '1';
    });
});