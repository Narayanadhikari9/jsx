import { useState } from "react"
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0);

  return ( 
  <>
    <div>
      <header style ={{background:"green", color:"white", margin: "1rem"}}>
        <a style ={{color: "red", textDecoration:"none"}} href="https://github.com">GitHub</a>
        
        <nav>This is my task 4</nav>
      </header>
      <main style ={{background:"blue", color:"white", margin: "1rem"}}>
        <aside>This is my JSX</aside>
      
        <section style ={{background:"red", color:"white", margin: "1rem"}}>
          This is my week 1
        </section>
        <article style ={{background:"purple", color:"white", margin: "1rem"}}>
          <div>This is GitHub</div>
        </article>
      </main>
      <footer style ={{background:"orange", color:"white", margin: "1rem"}}>
        <div>This is my colorfull task</div>
      </footer>
    </div>
  </>
  )
}

export default App
