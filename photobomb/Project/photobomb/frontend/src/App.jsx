import './styles.css'
import img from './assets/fallback.png'
import { useState } from 'react';

function App() {
    const [click, setClick] = useState(0)
    return (
        <div>
            <h1>Hello from React</h1>
            <img src={img} alt="image" />
            <button onClick={() => setClick(click+1)}>{click}</button>
        </div>
    )
}

export default App;