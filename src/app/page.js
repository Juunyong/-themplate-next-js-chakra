'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import { Container } from '@chakra-ui/react';
import Home from './home/home';
import IntroSwiper from './home/intro';
import App from '@/app/home/App';

export default function Page() {
    return (
        <>
            <Header />
            <Main>
                <Home />
            </Main>
            <Footer />
            rootElement
        </>
    );
}
