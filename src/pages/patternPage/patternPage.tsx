import { Outlet } from "react-router-dom";
import Header from "../../components/header/HeaderIndex/headerIndex";
import Navbar from "../../components/navbar/navbar";
import SearchForm from "../../components/search_form/searchForm";



export default function PatternPage() {
    return (
        <>
            <Header />
            <Navbar />
            <SearchForm />
            <main>
                <Outlet />
            </main>
        </>
    );
}