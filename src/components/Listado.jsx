import { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {

    //const [listadoState, setListadoState] = useState([]);
    const [editar, setEditar] = useState(0);

    useEffect(() => {
        conseguirPeliculas();
        console.log('Componente del listado de películas cargado');
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));//covnertimos en un obj usable en JS 
        setListadoState(peliculas);
        return peliculas;
    }   
   
    const borrarPeli = (id) => {
        //Conseguir películas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //Filtrar esas películas 
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));//nos quedamos con todas las películas cuyo id sea distinto al que yo le pase por parámetro
        console.log(pelis_almacenadas, nuevo_array_pelis);

        //Actualizar estado del listado
        setListadoState(nuevo_array_pelis);
        //Actualizar los datos en el localStorage
        localStorage.setItem('pelis',JSON.stringify(nuevo_array_pelis));
    }
    
    return (
        <>
            {/* <!--Aquí van las películas--> */}
            {
            listadoState !== null ?
             listadoState.map( (peli) => {
                    return(
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button onClick={ () => setEditar(peli.id)} className="edit">Editar</button>
                            <button onClick={ () => borrarPeli(peli.id) } className="delete">Borrar</button>
                            {/* Aparece formulario de editar */}
                            {editar === peli.id && (
                                <Editar 
                                    peli={peli}
                                    conseguirPeliculas = {conseguirPeliculas}
                                    setEditar = {setEditar}
                                    setListadoState = {setListadoState}
                                />
                            )}
                        </article>
                    )
                })
            : <h2>No hay peliculas para mostrar</h2>
            }
            
        </>
    )
}
