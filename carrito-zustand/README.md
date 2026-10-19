# Carrito de compras con React y Zustand

Tienda sencilla con un carrito compartido entre componentes usando Zustand, sin props y sin Provider.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente `http://localhost:5173`).

## Funcionalidades

- Catálogo de productos desde [Fake Store API](https://fakestoreapi.com/products).
- Agregar productos y acumular cantidades.
- Botón `−` para restar una unidad; si llega a 0, el producto se elimina.
- Subtotal por producto y total general.
- Quitar un producto o vaciar todo el carrito.
- Carrito persistente con `persist` de Zustand (localStorage).
- Diseño adaptable: dos columnas en escritorio y una en pantalla angosta.

## Captura de la tienda funcionando

<!-- Guarda tu captura como captura.png en la raíz del proyecto -->
![Captura de la tienda](captura.png)

## Preguntas de reflexión

Las respuestas están en el documento [`../Preguntas_reflexion_carrito.docx`](../Preguntas_reflexion_carrito.docx).

## Retos implementados

1. **Disminuir cantidad:** acción `disminuirCantidad` y botón `−`.
2. **Subtotal por producto:** se muestra `cantidad x precio = subtotal` en cada fila.
3. **Carrito persistente:** middleware `persist` con nombre `carrito-zustand`.
4. **Productos desde una API:** `fetch` a `https://fakestoreapi.com/products` con estados de carga y error.
