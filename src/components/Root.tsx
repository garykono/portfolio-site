import { Outlet } from 'react-router-dom';
import useScrollToTop from '../hooks/use-scroll-to-top';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Root() {
    useScrollToTop();   

    return (
        <div className="">
            <div className="">
                <NavBar />
            </div>
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}