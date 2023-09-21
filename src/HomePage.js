import React from 'react';
import './HomePage.css';


const HomePage = (props) => {
  return (
    <main className='holder'>
      <div className='homeimg'>
        <img src="" alt="Avion" />
      </div>
      <div className='columnas'>
        <div className='bienvenidos'>
          <h2>Bienvenidos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae expedita, earum dolorem dolore laboriosam accusamus reiciendis inventore doloribus, repudiandae ea esse fugiat sapiente ex sequi, suscipit error nulla. Error.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nesciunt blanditiis sed sapiente neque impedit. Necessitatibus cum perferendis accusantium harum inventore velit, optio odit alias, explicabo magnam labore, mollitia ad.</p>
        </div>
        <div className='testimonios'>
          <h2>testimonios</h2>
          <div className='testimonio'>
            <span class='cita'> Simplemente Excelente</span>
            <span class='autor'> Juan Perez - zapatos.com</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage;