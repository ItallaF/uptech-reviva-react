import Footer from './components/footer/footer';
import Cart from './pages/cart';
import Home from './pages/home';
import PatternPage from './pages/patternPage/patternPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound/notFoud';
import Details from './pages/details';



export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PatternPage />}>
                    <Route index element={<Home />} />
                    {/* <Route path='/Details/:id' element={<Details />} />
                    <Route path='/Cart/:id' element={<Cart />} /> */}
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}