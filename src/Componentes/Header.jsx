import Logo from '../assets/viagens.jpg'
import Lupa from '../assets/lupa.png'

function Header(){
    return(
        <div className=""> 
            <div className=' w-9/12 m-auto flex gap-10 items-center '>
                <img className='w-32 h-32 mx-12' src={Logo} alt="" />   
                <p className='font-medium'>Home</p>
                <p className=''>Grand Canyon</p>
                <p className=''>Escócia</p>
                <p className=''>Muralhas da China</p>
                <p className=''>Aruba</p>
                <input className='bg-gray-200 rounded-2xl p-1' type="search" />
                <img className='w-8 h-8' src={Lupa} alt="" />
            </div>
        </div>
    )
}
export default Header