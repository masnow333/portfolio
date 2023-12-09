import './App.css'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'
import MainBanner from './components/MainBanner'
import NavComponent from './components/NavComponent'
import PortfolioComponent from './components/PortfolioComponent'
import ServicesComponent from './components/ServicesComponent'

function App() {

  return (
    <>
      <NavComponent />
      <MainBanner />
      <AboutComponent />
      <ServicesComponent />
      <PortfolioComponent />
      <ContactComponent />
    </>
  )
}

export default App
