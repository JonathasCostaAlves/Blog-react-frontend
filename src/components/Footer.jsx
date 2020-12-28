import React from 'react'
import './Footer.css'
import SociaisMedias from './SociaisMedias'
import Brand from './Brand'


export default props => 
    <footer className="footer">
       <Brand />        
       <SociaisMedias />
       <p>Desenvolvido por <strong><a href="https://www.linkedin.com/in/jonathas-costa-a9844ab1/" target="_black">Jonathas Costa</a></strong></p>
    </footer>