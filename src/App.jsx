import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/hero/hero'
import { About } from './components/About/About'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
