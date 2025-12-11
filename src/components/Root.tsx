import { Outlet } from 'react-router-dom';
import useScrollToTop from '../hooks/use-scroll-to-top';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Root() {
    useScrollToTop();   

    return (
        <div className="">
            <div className="sticky top-0 z-50 bg-brand-bg">
                <NavBar />
            </div>
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}