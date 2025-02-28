import React, { useEffect, useRef } from 'react'

const InteractiveBackground = () => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let mouse = {
      x: null,
      y: null,
      radius: 150
    }
    
    // Particle class - defined before it's used in init()
    class Particle {
      constructor(x, y, size, color) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = size
        this.color = color
        this.density = (Math.random() * 30) + 1
        this.waveAngle = Math.random() * Math.PI * 2
        this.waveSpeed = (Math.random() * 0.1) + 0.05
        this.waveSize = Math.random() * 5 + 2
      }
      
      // Update particle position
      update() {
        // Wave effect
        this.waveAngle += this.waveSpeed
        
        // Mouse interaction
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        let forceDirectionX = dx / distance
        let forceDirectionY = dy / distance
        let maxDistance = mouse.radius
        let force = (maxDistance - distance) / maxDistance
        let directionX = forceDirectionX * force * this.density
        let directionY = forceDirectionY * force * this.density
        
        if (distance < mouse.radius) {
          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY
            this.y -= dy / 10
          }
          
          // Add wave motion when not being pushed by mouse
          this.y += Math.sin(this.waveAngle) * this.waveSize
        }
      }
      
      // Draw particle
      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }
    
    // Handle window resize
    function handleResize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }
    
    // Handle mouse move
    function handleMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    
    // Handle mouse out
    function handleMouseOut() {
      mouse.x = undefined
      mouse.y = undefined
    }
    
    // Create particles
    function init() {
      particles = []
      const particleCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 12000), 200)
      const gridSize = Math.sqrt((canvas.width * canvas.height) / particleCount)
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        for (let x = 0; x < canvas.width; x += gridSize) {
          // Add some randomness to grid positions
          const xPos = x + ((Math.random() - 0.5) * gridSize * 0.8)
          const yPos = y + ((Math.random() - 0.5) * gridSize * 0.8)
          
          // Random color from blue/purple gradient
          const hue = Math.random() * 60 + 220 // Blue to purple
          const saturation = Math.random() * 30 + 70
          const lightness = Math.random() * 20 + 50
          const color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`
          
          particles.push(new Particle(xPos, yPos, Math.random() * 2 + 1, color))
        }
      }
    }
    
    // Calculate distance between particles
    function connect() {
      const maxDistance = 120
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - (distance / maxDistance)
            
            // Draw lines between particles
            ctx.strokeStyle = `rgba(120, 150, 255, ${opacity * 0.7})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      
      connect()
      
      animationFrameId = window.requestAnimationFrame(animate)
    }
    
    // Initialize canvas
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)
    
    animate()
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-gray-900 to-black pointer-events-none"
    />
  )
}

export default InteractiveBackground