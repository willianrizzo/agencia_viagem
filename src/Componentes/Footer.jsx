import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook}  from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'



function Footer(){
    return(
        <div className="bg-gray-700 w-full h-44 m-auto ">
            <div className="m-auto w-2/5 text-center">
                <p className="text-white py-6">Siga-nos em nossas redes sociais!</p>
            </div>
            <div className=" flex gap-24 justify-center  text-center">
                <AiFillInstagram className='text-4xl invert'/>
                <AiFillFacebook className='text-4xl invert'/>
                <FaTiktok className='text-4xl invert'/>
                <FaWhatsapp className='text-4xl invert'/>
            </div>
            <div className="m-auto w-2/5 text-center">
                <p className="text-white py-5">Telefone para contato: (11) 9999-9999 </p>
            </div>
        </div>
    )
}
export default Footer