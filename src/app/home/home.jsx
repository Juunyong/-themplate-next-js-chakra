import React from 'react';
import IntroSwiper from './intro';
import News from './news';
import { motion, useScroll } from 'framer-motion';
import './styles.css';
const Home = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            {/* swiper */}
            <IntroSwiper />
            {/* news */}
            <News />
            {/* stock */}

            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            />
        </div>
    );
};

export default Home;
