import { GitItem } from "./GitItem"
import { useFetchGifs } from "../Hooks/useFetchGifs";



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )//si isloanding esta en tru no pasa nada si esta en false saldra el mensaje
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GitItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
