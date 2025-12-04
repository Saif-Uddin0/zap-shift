import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Root = () => {


    return (
        <div className='bg-[#EAECED] '>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer className='pb-10'>
                <Footer />
            </footer>



        </div>
    );
};

export default Root;