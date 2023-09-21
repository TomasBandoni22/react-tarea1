import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className='Contacto Rapido'>
            <div>
                <h2>Contacto Rapido </h2>
                <form action="" method='' className='formulario'>
                    <p>
                        <label for="Nombre"> Nombre </label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="Email"> Email </label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono"> Telefono </label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje"> Mensaje </label>
                        <input type="text" name="" />
                    </p>
                    <p className='acciones '><input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div class='datos'>
                <h2> Otras Vias de comunicacion </h2>
                <p>Tambien puede contactarse con nosotros usando los mismos medios</p>
                <ul>
                    <li>Telefono: 43232388</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook: </li>
                    <li>Twitter: </li>
                    <li>Skyper: </li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;