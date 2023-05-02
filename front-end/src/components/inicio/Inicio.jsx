import React from 'react'
import style from "./inicio.module.css";

export const Inicio = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className={`col-sm-6 ${style.columna}`}>
          <h1>Bienvenidos al mejor salon de belleza con los mejores servicios</h1>
          <p>Ana Cecilia Salon es un salon de belleza que preocupa todos sus servicios hacias sus clientes seaon de la mejor calidad y la mejor experiencia, entre los servicios se ofrecen:</p>
          <ul  className={`${style.muestras}`}>
            <li>
              <img style={{width: '100%'}} src="/cortes.jpg" />
              <p>Cortes y peinados</p>
            </li>
            <li>
            <img style={{width: '120%', height: '215px'}} src="/maquillaje.jpg" />
              <p>Maquillajes</p>
            </li>
            <li>
            <img style={{width: '210%'}} src="/tratamiento.jpg" />
              <p>Tratamientos capilares y más</p>
            </li>
          </ul>
        </div>
        <div className='col-sm-6'>
          <div className={`${style.sesion}`}>
            <button>Registrate</button>
            <div style={{width: '100%', height: '5px'}}>
              <hr style={{border: 'none', borderTop: '1px solid #999'}} />
            </div> 
            <button>Iniciar Sesion</button>
          </div>
          <div className={`${style.descubre}`}>
          <p className='text-center'><strong>Descubre mas servicios</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio;