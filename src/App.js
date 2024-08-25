import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/new-post" element={<PostForm />} />
                    <Route path="/edit-post/:id" element={<PostForm />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
