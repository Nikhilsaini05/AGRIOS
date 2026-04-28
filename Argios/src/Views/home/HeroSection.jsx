import SupaData from '../../Backend/backend_calls';
import HomeImage from '/Images/Home_Image.png';

export default function HeroSection() {

    return (
        <>
            <section className="relative h-screen w-full bg-cover flex items-center justify-center bg-center "
                style={{
                    backgroundImage: `url(${HomeImage})`,

                }}>
                <div className='absolute top-0 left-0 z-50'>
                    <img src="Images/home-leaf.png" alt="" className='h-140 w-140 ' />
                </div>
                <SupaData/>
            </section>
            
        </>
    )
}

