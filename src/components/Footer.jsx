import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <section id="contact" style={{paddingTop:'100px'}} class="py-5">
  <div class="text-center mb-4">
    <h2  style={{textAlign: 'center', 
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} class="h1 fw-bold">Contacts</h2>
    <span className='fs-4' class="text-muted">My Contacts</span>
  </div>
  {/* Icons */}
  <div class="d-flex justify-content-center gap-4 iconCollections">
    {/* LinkedIn */}
    <div>
      <a target="_blank" href="https://www.linkedin.com/in/jithin-joseph-870783203/" class="text-decoration-none text-dark fs-3 icons">
        <i class="fa-brands fa-linkedin brands"></i>
      </a>
    </div>
    {/* Facebook */}
    <div>
      <a target="_blank" href="https://www.facebook.com/" class="text-decoration-none text-dark fs-3 icons">
        <i class="fa-brands fa-facebook brands"></i>
      </a>
    </div>
    {/* GitHub  */}
    <div>
      <a target="_blank" href="https://github.com/" class="text-decoration-none text-dark fs-3 icons">
        <i class="fa-brands fa-github brands"></i>
      </a>
    </div>
    {/* Instagram  */}
    <div>
      <a target="_blank" href="https://www.instagram.com/accounts/login/?hl=en" class="text-decoration-none text-dark fs-3 icons">
        <i class="fa-brands fa-instagram brands"></i>
      </a>
    </div>
    {/* Twitter  */}
    <div>
      <a target="_blank" href="https://x.com/?lang=en&mx=2" class="text-decoration-none text-dark fs-3 icons">
        <i class="fa-brands fa-twitter brands"></i>
      </a>
    </div>
  </div>
</section>

<footer class="text-center py-3 bg-dark text-white">
  <p class="mb-1">&copy; My Portfolio Website - Jan 2025, All Rights Reserved &reg; Jithin Joseph</p>
  <div class="mt-2">
    <a href="#container" class="text-white fs-4">
    </a>
  </div>
</footer>

    </>
  )
}

export default Footer