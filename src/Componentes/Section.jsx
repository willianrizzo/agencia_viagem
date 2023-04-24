import Mala from '../assets/mala.jpg'

function Section(){
    return(
        <div className="w-full h-auto flex my-10 items-center">
            <img className='w-1/4 h-1/4  m-auto' src={Mala} alt="" />
            <div className='w-1/2'>
                <h3 className='w-5/6 text-center font-medium text-4xl'>Encontre aqui a viagem dos seus sonhos!!</h3>
                <br />
                <br />
                <p className='w-5/6 text-xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro sapiente qui, dolore sint, earum assumenda temporibus illo quae pariatur aliquid cumque delectus obcaecati accusantium. Impedit a at quisquam ullam suscipit?Dolor modi facere fugiat consectetur.*</p>
            </div>
            
        </div>
    )
}
export default Section