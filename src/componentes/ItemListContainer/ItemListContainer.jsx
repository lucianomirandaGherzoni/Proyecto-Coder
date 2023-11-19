import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect( ()=> {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
        <div className="titulo-hero">
            <h2>berlini pastas</h2>
             <h4>excelencia en cada pasta, donde calidad y sabor son inseparables</h4>
        </div>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer