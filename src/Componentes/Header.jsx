import Logo from '../assets/viagens.jpg'
import Lupa from '../assets/lupa.png'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <div className=""> 
            <div className=' justify-center flex gap-10 items-center '>
                <img className='h-32 mx-12' src={Logo} alt="" />   
                <Link to='/' className='font-normal text-lg hover:scale-x-110 duration-100'>Home</Link>
                <Link to='/canyon'  className='font-normal text-lg hover:scale-x-110 duration-100'>Grand Canyon</Link>
                <Link to='/escocia' className='font-normal text-lg hover:scale-x-110 duration-100'>Escócia</Link>
                <Link to='/china' className='font-normal text-lg hover:scale-x-110 duration-100'>Muralhas da China</Link>
                <Link to='/aruba' className='font-normal text-lg hover:scale-x-110 duration-100'>Aruba</Link>
                <input className='bg-gray-200 rounded-2xl p-1' type="search" />
                <img className='w-7 h-7' src={Lupa} alt="" />
            </div>
        </div>
    )
}
export default Header