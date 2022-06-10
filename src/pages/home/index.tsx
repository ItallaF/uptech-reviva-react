import React, { useState } from 'react';
import Banner from '../../components/banner/banner';
import Blog from '../../components/blog/blog_index';
import Footer from '../../components/footer/footer';
import Form from '../../components/form/form';
import Header from '../../components/header/header_index';
import ProductList from '../../components/listProduct/listProduc';
import ProductListSummer from '../../components/listProduct/lIstProductSummer';
import Navbar from '../../components/navbar/navbar';
import style from './index.module.scss';


export default function Home(){
      
    return (
        <aside>
            <Header />
            <Navbar />
            <Form />
            <ProductList />      
            <Banner />
            <ProductListSummer />
            <Blog />
            <Footer />
        </aside>
    )
}



