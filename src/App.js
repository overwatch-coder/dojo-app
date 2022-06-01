/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Blog from './component/Blog';
import Create from './component/Create';
import About from './component/About';
import Home from './component/Home';
import BlogDetails from './component/BlogDetails';
import FetchAPI from './component/FetchAPI';
import NotFound from './component/NotFound';

const App = () => {
  const title = "All Blog Posts";

  const { allData: blogs, isLoading, error } = FetchAPI('http://localhost:8000/posts?_sort=id&_order=desc');

  return ( 
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />

          {error && <Route path='blogs' element={ <h1 className='text-center text-2xl text-red-500 mt-36'>{error}</h1> } />}

          {isLoading && <Route path='blogs' element={ <h1 className='text-center text-4xl mt-36'>Loading...</h1> } />}

          { blogs && <Route path='blogs' element={<Blog blogs = {blogs} title ={title} />} />}

          <Route path='blogs/:id/*' element={<BlogDetails />} />

          <Route path='create' element={<Create />} />

          <Route path='about' element={<About />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );

}

export default App;