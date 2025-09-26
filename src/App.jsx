import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './ProductCard.jsx'

//Array de productos
const products = [
  { id: 1, name: "Procesador Intel i9", price: 499.99, description: "Procesador de alto rendimiento con 10 núcleos y 20 hilos, ideal para gaming y tareas pesadas." },
  { id: 2, name: "Tarjeta gráfica NVIDIA RTX 3080", price: 699.99, description: "Tarjeta gráfica de última generación, excelente para juegos 4K y tareas de renderizado." },
  { id: 3, name: "Memoria RAM Corsair Vengeance 16GB", price: 79.99, description: "Módulo de memoria RAM DDR4 de 16GB, ideal para multitarea y juegos exigentes." },
  { id: 4, name: "Placa base ASUS ROG Strix", price: 249.99, description: "Placa base de alta calidad con soporte para overclocking, ideal para gamers y entusiastas." },
  { id: 5, name: "Disco SSD Samsung 970 EVO 1TB", price: 119.99, description: "Unidad de estado sólido M.2 NVMe de 1TB, con altas velocidades de lectura y escritura." },
  { id: 6, name: "Fuente de alimentación Corsair RM750x", price: 109.99, description: "Fuente de alimentación modular de 750W con certificación 80+ Gold." },
  { id: 7, name: "Refrigeración líquida NZXT Kraken X63", price: 179.99, description: "Sistema de refrigeración líquida con un radiador de 280mm, ideal para mantener temperaturas bajas en CPUs de alto rendimiento." },
  { id: 8, name: "Teclado mecánico Logitech G Pro", price: 129.99, description: "Teclado mecánico con interruptores Romer-G, diseñado para eSports y gaming de alta velocidad." },
  { id: 9, name: "Monitor ASUS ROG Swift 27\" 144Hz", price: 499.99, description: "Monitor gaming con resolución 2560x1440 y frecuencia de actualización de 144Hz para un rendimiento gráfico fluido." },
  { id: 10, name: "Mouse Logitech G502 HERO", price: 49.99, description: "Mouse gaming con sensor HERO de 25K DPI, ergonómico y con botones programables." },
  { id: 11, name: "Tarjeta de sonido Creative Sound BlasterX", price: 79.99, description: "Tarjeta de sonido interna para una experiencia de audio envolvente en juegos y películas." },
  { id: 12, name: "Altavoces Logitech Z623", price: 149.99, description: "Altavoces con sistema de sonido 2.1 certificado THX para una calidad de audio profesional." },
  { id: 13, name: "Unidad de disco duro Seagate Barracuda 2TB", price: 59.99, description: "HDD de 2TB con alta capacidad de almacenamiento para backups y almacenamiento masivo de archivos." },
  { id: 14, name: "Cámara web Logitech C920", price: 79.99, description: "Cámara web Full HD 1080p con micrófono integrado, ideal para videollamadas y streaming." },
  { id: 15, name: "Auriculares HyperX Cloud II", price: 99.99, description: "Auriculares gaming con sonido envolvente 7.1 y micrófono con cancelación de ruido." }

]


function App() {
  const [count, setCount] = useState(0)
  //Definimos el estado para el precio mínimo y máximo
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000)

  //Filtramos productos según rango de precio
  const filteredProducts = products.filter(product => {
    return product.price >= minPrice && product.price <= maxPrice;
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>

      <div className='app-container'>
        <h1>Nuestros Productos</h1>
        <div className='filter-container'>
          <label>
            Precio mínimo:
            <input 
            type='number'
            value={minPrice}
            onChange={e=> setMinPrice(Number(e.target.value))}
            />
          </label>
          <label>
            Precio máximo:
            <input
            type='number'
            value={maxPrice}
            onChange={e=>setMaxPrice(Number(e.target.value))}
            />
          </label>
        </div>

        <div className='products-list'>
          {filteredProducts.map(product =>(
          <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          />
          ))}
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
