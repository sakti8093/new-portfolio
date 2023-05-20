import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import SideBar from './components/SideBar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className='main' >
    <SideBar />
    <div className='content' >
      <Hero />
    </div>
  </div>
)
