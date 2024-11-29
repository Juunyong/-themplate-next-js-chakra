import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Item } from './Item';
import { List } from './List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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

export default function App() {
    return (
        <div className="container">
            <Header />
            <Router>
                <Routes>
                    <Route path="/:id" component={Store} />
                    <Route path="/" component={Store} />
                </Routes>
            </Router>
        </div>
    );
}
