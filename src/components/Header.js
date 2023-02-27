import React from 'react'

const Header = () => {
  const changeTheme = () => {
    const btnlight = document.querySelector('.btn')
    const header = document.querySelector(".header")
    const moon = document.querySelector(".fa-moon")
    const details = document.querySelectorAll('.details')
    const uls = document.querySelectorAll("ul")
    const input = document.querySelector('#search')
    const select = document.querySelector('select')
    const placeholder = document.querySelector('placeholder')
     
    
    

     
    details.forEach((detail) => {
      detail.classList.toggle("light-theme")
    })

    header.classList.toggle("light-theme")
    
    uls.forEach((ul) => {
      ul.classList.toggle("light-theme")
    })
    
    document.body.classList.toggle("light-theme")
    select.classList.toggle("light-theme")
    input.classList.toggle("light-theme")
    
    placeholder.classList.toggle("light-theme")
    moon.classList.toggle("fa-thin")
    btnlight.classList.toggle("light-theme")
    
  }

  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div className='toggle-component'>
          <div className="btn-moon" >
            <i className="fas fa-moon" onClick={() => changeTheme()}></i> 
           <div className="dark-mode">Dark Mode</div> 
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
