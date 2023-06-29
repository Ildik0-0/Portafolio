import './code.scss'
import country from '../../assets/images/Primera Pagina.PNG'
import Animate from '../AnimateLetter/animate';
import { Link } from 'react-router-dom';
const Code = () => {
    return(
        <div>
            <div className='code-page'>
                <div className='text-zone'>
                    <h1>
                <Animate
                    strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
                    idx={15}
                />
                </h1> 

                <div className='image'>
                    <img src={country} alt='contries'/>
                    <Link to='https://github.com/Ildik0-0/Proyecto_Countries' className='flat-button'>Countries Proyect</Link>
                    
                </div>
                
                </div>
                
            </div>
           
           
</div>


        
    )
}

export default Code;