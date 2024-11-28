import { motion } from 'framer-motion';

import React from 'react';

export const motion = () => {
    function App() {
        return <motion.div className="box" animate={{ x: 100 }} />;
    }
};

export default motion;
