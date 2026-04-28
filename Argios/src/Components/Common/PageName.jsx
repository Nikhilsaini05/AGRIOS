import { useLocation,  useSearchParams } from 'react-router'
import Projects from '/Images/Page_name.png'
import { FormatPathName } from '../../Services/formatters';
export default function PageName(){
    const location = useLocation();
    const [search] = useSearchParams();

    return(<>
        <section className="w-full h-84 flex justify-center items-center"
                style={{
                    backgroundImage:`url(${Projects})`
                }}>
                    <main>
                        <header>
                            
                            <p className='uppercase text-[14px] mt-30 leading-7 text-[#FFFFFFB2]'>Home<span className='px-2'>/</span> {FormatPathName(location.pathname)}</p>
                            <h1 className='text-[30px] lg:text-[50px] text-white font-extrabold'>{FormatPathName(search.get("title") ?? location.pathname)}</h1>
                        </header>
                    </main>
                </section>
    </>)
}