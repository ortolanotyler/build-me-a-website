import React, { useState, useEffect } from 'react';
import ParallaxSection from './Parallax';
import BlogPost1 from '../components/BlogPost1';
import BlogPost2 from '../components/BlogPost2';
import BlogPost3 from '../components/BlogPost3';
import BlogPost4 from '../components/BlogPost4';

function BlogPage() {
  const [currentPost, setCurrentPost] = useState('CSS');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const blogPosts = [
    { id: 'CSS', label: 'CSS', component: <BlogPost1 /> },
    { id: 'Why React?', label: 'Why React?', component: <BlogPost2 /> },
    { id: 'Responsiveness in Web Development', label: 'Responsiveness in Web Development', component: <BlogPost3 /> },
    { id: 'CSS Grid and Flexbox', label: 'Mastering CSS Grid + Flexbox', component: <BlogPost4 /> },
  ];

  const renderBlogPost = () => {
    const currentBlog = blogPosts.find(post => post.id === currentPost);
    return currentBlog ? currentBlog.component : <BlogPost1 />;
  };

  return (
    <div className="App" style={{ backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Blog.jpg`} />
      {!isMobile && (
        <>
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Blog.jpg`} />
          <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/Blog.jpg`} />
        </>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '10px',
          justifyContent: 'center',
          margin: '5rem 0',
          marginBottom: '2rem',
          padding: '0 2rem',
        }}
      >
        {blogPosts.map(post => (
          <button
            key={post.id}
            onClick={() => setCurrentPost(post.id)}
            style={{
              cursor: 'pointer',
              padding: '10px 20px',
              borderRadius: '20px',
              backgroundColor: currentPost === post.id ? '#3a3a3a' : '#f8f8f8' ,
              color: currentPost === post.id ? '#f8f8f8':'#3a3a3a' ,
              border: '1px solid #3a3a3a',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            {post.label}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '50px' }}>
        {renderBlogPost()}
      </div>
    </div>
  );
}

export default BlogPage;
