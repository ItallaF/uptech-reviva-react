import Footer from './components/footer/footer';
import Header from './components/header/header_index';
import Cart from './pages/cart';
import Home from './pages/home';
import PatternPage from './pages/patternPage/patternPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound/notFoud';



export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PatternPage />}>
                    <Route index element={<Home />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
                
            </Routes>
            <Footer />
        </Router>
    )
}