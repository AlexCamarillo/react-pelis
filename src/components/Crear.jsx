import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ( {setListadoState} ) => {

    const tituloComponente = 'Añadir película';

    const [ peliState, setPeliState ] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliState;
    const conseguirDatosForm = e => {
        e.preventDefault();
        //conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de la película a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        //Guardar estado
        setPeliState(peli);

        //Actualiar el estado del listado principal
        setListadoState(elementos => {
            return [... elementos, peli];
        });
        //Guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli);


        
        
    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
                {
                    (titulo && descripcion) && 'Has creado la película: ' + titulo
                }
            </strong>
            
            <form onSubmit={ conseguirDatosForm }>
                <input 
                    name='titulo'
                    id='titulo' 
                    type="text" 
                    placeholder="Titulo"
                />
                <textarea 
                    name='descripcion'
                    id='descripcion' 
                    placeholder="Descripcion"
                ></textarea>
                <input 
                    id='save' 
                    type="submit" 
                    value="Guardar"
                />
            </form>
        </div>
    )
}
