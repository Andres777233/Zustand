// Importamos los hooks de React que necesitamos
import { useEffect, useState } from 'react'

// Importamos el hook del store
import { useCarritoStore } from '../store/useCarritoStore'

// Definimos el componente ListaProductos
function ListaProductos() {
  // Del store solo necesitamos la acción para agregar
  const agregarProducto = useCarritoStore((state) => state.agregarProducto)

  // Estados para los productos que llegan de la API
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  // Al cargar la página pedimos los productos a Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((respuesta) => respuesta.json())
      // Adaptamos las propiedades de la API a las que usa la tienda
      .then((datos) =>
        setProductos(
          datos.map((producto) => ({
            id: producto.id,
            nombre: producto.title,
            precio: producto.price,
          }))
        )
      )
      .catch(() => setError(true))
      .finally(() => setCargando(false))
  }, [])

  return (
    // section agrupa todo el catálogo; panel le da apariencia de tarjeta
    <section className="panel">
      <h2>Productos</h2>

      {/* Mensajes mientras carga o si falla la petición */}
      {cargando && <p className="vacio">Cargando productos...</p>}
      {error && <p className="vacio">No se pudieron cargar los productos</p>}

      {/* Recorremos los productos y creamos una fila por cada uno */}
      {!cargando &&
        !error &&
        productos.map((producto) => (
          <div key={producto.id} className="fila">
            {/* Bloque con el nombre y el precio */}
            <div>
              <p className="fila-nombre">{producto.nombre}</p>
              <p className="fila-detalle">
                ${producto.precio.toLocaleString('es-CO')}
              </p>
            </div>
            {/* Al hacer clic, enviamos el producto completo a la acción del store */}
            <button
              className="btn btn-primario"
              onClick={() => agregarProducto(producto)}
            >
              Agregar
            </button>
          </div>
        ))}
    </section>
  )
}

// Exportamos el componente
export default ListaProductos
