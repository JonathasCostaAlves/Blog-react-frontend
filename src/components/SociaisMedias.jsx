import React from 'react'
import './SociaisMedias.css'


export default props =>
    <div className={`social-media ${props.class}`}>
       <a href="https://github.com/JonathasCostaAlves" target="_blank" ><i class="fa fa-github-square m-2"></i></a>
       <a href="https://www.linkedin.com/in/jonathas-costa-a9844ab1/" target="_blank" ><i class="fa fa-linkedin m-2"></i></a>
       <a href="https://api.whatsapp.com/send?phone=5571985136358&text=Acabei%20de%20chegar%20seu%20blog,%20vamos%20coversar?" target="_blank" ><i class="fa fa-whatsapp m-2"></i></a>
    </div>