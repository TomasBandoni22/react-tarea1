import React from 'react';
import './NosotrosPage.css';


const NosotrosPage = (props) => {
  return (
   <main className='holder'>
    <div className='historia'>
        <h2>Historia</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores in labore. Dolores doloribus officiis eius, natus, facilis pariatur cupiditate, rerum vel repellendus ad quia id hic voluptas? Eum, non?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui fugiat ea impedit officiis illo labore neque vel repellendus aut, ipsam accusantium sit, ad accusamus doloremque a explicabo architecto quam? Consequatur!</p>
    </div>
    <div className='staff'>
        <h2>Staff</h2>
        <div className='personas'>
            <div className='persona'>
                <img src="" alt="Juan Gomez" />
                <h5> Juan Gomez </h5>
                <h6>Gerente general</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi ullam iste eius nam, impedit expedita vel voluptas aspernatur nemo molestiae. Nulla, excepturi unde? Non laudantium cumque quos expedita minus.</p>
            </div>
        </div>
    </div>
   </main>
  )
}

export default NosotrosPage;