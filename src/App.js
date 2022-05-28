/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Blog from './component/Blog';

const App = () => {
  const title = "All Blogs";
  const [blogs, setBlogs] = useState([
    {
      title: 'Wizard of Oz',
      author: 'Brainy',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestiae enim doloremque dicta at animi beatae quos?',
      id: 1
    },
    {
      title: 'Golden Men',
      author: 'Atsu',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, placeat!',
      id: 2
    },
    {
      title: 'Youtube Eating',
      author: 'Esther',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit iure arm deserunt? Eaque, ipsum.',
      id: 3
    },
    {
      title: 'Uncaged Desires',
      author: 'Dan',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat aires velit tenetur expedita corrupti consequatur eaque nisi.',
      id: 4
    }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => id !== blog.id);
    setBlogs(newBlogs);
  }

  return ( 
    <div className="App">
      <Header Blog = {Blog}  />
      <Blog  blogs = {blogs} title ={title} handleDelete={handleDelete}/>
      <Footer />
    </div>
   );
}
 
export default App;