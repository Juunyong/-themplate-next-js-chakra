import React, { useState } from 'react';
import IntroSwiper from './intro';
import News from './news';
import { motion, useScroll } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import { Header } from '@/app/home/Header';
import { Item } from '@/app/home/Item';
import { List } from '@/app/home/List';

function Store({ match }) {
    let { id } = match.params;
    const imageHasLoaded = true;

    return (
        <>
            <List selectedId={id} />
            <AnimatePresence>{id && imageHasLoaded && <Item id={id} key="item" />}</AnimatePresence>
        </>
    );
}

const Home = () => {
    const { scrollYProgress } = useScroll();
    const [show, setShow] = useState(true);
    return (
        <div>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            {/* swiper */}
            <IntroSwiper />
            {/* news */}
            <News />
            {/* stock */}
            <div className="example">
                <div className="controls">
                    <motion.button whileTap={{ scale: 0.95 }} onClick={() => setShow(!show)}>
                        {show ? 'Remove' : 'Add'}
                    </motion.button>
                </div>

                <AnimatePresence>
                    {show ? (
                        <motion.div
                            className="box"
                            exit={{ opacity: 0, scale: 1.1 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        />
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Home;
