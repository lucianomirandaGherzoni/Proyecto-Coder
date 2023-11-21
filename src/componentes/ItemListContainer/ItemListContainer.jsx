import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import HeroCarrusel from "../HeroCarrusel/HeroCarrusel";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <HeroCarrusel />
            <div className="titulo-hero">
                <h2>Berlini Pastas</h2>
                <h4>Excelencia en cada plato, donde calidad y sabor son inseparables</h4>
            </div>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer