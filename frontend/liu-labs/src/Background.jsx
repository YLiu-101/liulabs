import React, { useEffect, useRef } from 'react';
import '../styles/ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let mousePosition = {
      x: null,
      y: null,
      radius: 150
    };
    
    // Handle canvas resizing
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      init(); // Recreate particles when canvas is resized
    }
    
    // Track mouse movement
    function handleMouseMove(e) {
      mousePosition.x = e.x;
      mousePosition.y = e.y;
    }
    
    // Track touch on mobile
    function handleTouchMove(e) {
      if (e.touches.length > 0) {
        mousePosition.x = e.touches[0].clientX;
        mousePosition.y = e.touches[0].clientY;
      }
    }
    
    function handleMouseLeave() {
      mousePosition.x = null;
      mousePosition.y = null;
    }
    
    // Particle class
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
      }
      
      // Draw the particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      // Update particle position and handle interactions
      update() {
        // Check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        
        // Mouse interaction
        let dx = mousePosition.x - this.x;
        let dy = mousePosition.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mousePosition.radius && mousePosition.x != null) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mousePosition.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to original position if not influenced by mouse
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
        
        // Move particle by its direction
        this.x += this.directionX;
        this.y += this.directionY;
        
        // Draw the particle
        this.draw();
      }
    }
    
    // Initialize particles
    function init() {
      particles = [];
      const numberOfParticles = Math.min(Math.floor(canvas.width * canvas.height / 9000), 100);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 3) + 1;
        const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 0.2) - 0.1;
        const directionY = (Math.random() * 0.2) - 0.1;
        
        // Use theme colors
        const colors = ['rgba(126, 87, 194, 0.5)', 'rgba(66, 165, 245, 0.5)', 'rgba(3, 218, 198, 0.5)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
      });
      
      // Connect particles with lines when they are close
      connectParticles();
    }
    
    // Draw lines between particles that are close to each other
    function connectParticles() {
      const maxDistance = 175;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // The closer they are, the more opaque the line
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(126, 87, 194, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchend', handleMouseLeave);
    
    // Initialize and start animation
    resizeCanvas();
    animate();
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);
  
  return (
    <canvas ref={canvasRef} className="particle-background"></canvas>
  );
};

export default ParticleBackground;