import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import React, { Suspense } from "react"
import Loader from "./components/Loader.jsx"

const Home = React.lazy(() => import("./Pages/Home.jsx"))
const Servicos = React.lazy(() => import("./Pages/Servicos.jsx"))
const Projectos = React.lazy(() => import("./Pages/Projectos.jsx"))
const Sobre = React.lazy(() => import("./Pages/Sobre.jsx"))
const Contacto = React.lazy(() => import("./Pages/Contacto.jsx"))

function App() {

  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/projectos" element={<Projectos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
