
export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = 'Editar Pelicula';

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        //conseguir el target del evento
        let target = e.target;

        //buscar e indice del objeto de la película a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        //console.log(pelis_almacenadas);

        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);//busca por una condición un obj dentro de un array de objs 
        //console.log(indice);

        //Crear objeto con ese id de ese indice, titulo y descripcion del formulario
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        }

        //console.log(indice, peli_actualizada);

        //Actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada;

        //Guardar el nuevo array de obj en el localstorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        // Y actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);// 0 para que cierre el formulario

    }

    return (
        <div className="edit_form">
            <h3 className="title">{titulo_componente}</h3>
            <form onSubmit={ e => guardarEdicion(e, peli.id)}>
                <input 
                    type="text"
                    name="titulo"
                    className="titulo_editado"
                    defaultValue= {peli.titulo}
                />
                <textarea 
                    name="descripcion"
                    className="descripcion_editada"
                    defaultValue= {peli.descripcion}
                />
                <input
                    type="submit"
                    className="editar"
                    value="Actualizar"    
                />
            </form>
        </div>
    )
}
