import './styles.scss'
import { useState } from 'react';

import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {
    const categories = [
        {name: 'Oil-painting', id: '001'},
        {name: 'Music', id: '002'},
        {name: 'Carving', id: '003'},
        {name: 'Gigs', id: '004'},
        {name: 'Photography', id: '005'},
        {name: 'Modelling', id: '006'},
    ]    
    return (
        <>
            <Navbar />
            <Body categories={categories}/>
        </>
    )
}

export default App;