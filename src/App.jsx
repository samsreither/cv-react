import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/hero/hero'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
