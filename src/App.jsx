// --> import mirage server
import "./server/server"

// --> import pages
import Layout from "./components/Layout"
import TravelsUpdate from "./pages/TravelUpdate"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import NotFound from "./pages/NotFound"
import TravelsList from "./pages/TravelsList"

// --> import react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TravelDetail from "./pages/TravelDetail"
import TravelCreate from "./pages/TravelCreate"

// --> import tostify to use in all routes we needed
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* layout routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* travels routes */}
          <Route path="travels">
            <Route index element={<TravelsList />} />
            <Route path=":id" element={<TravelDetail />} />
            <Route path=":id/edit" element={<TravelsUpdate />} />
            <Route path="new" element={<TravelCreate />} />
          </Route>

          {/* about */}
          <Route path="about" element={<AboutPage />} />
        </Route>

        {/* not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
