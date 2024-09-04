import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ParallaxSection from './Parallax';
import BlogPost1 from '../components/BlogPost1';
import BlogPost2 from '../components/BlogPost2';
import BlogPost3 from '../components/BlogPost3';
import BlogPost4 from '../components/BlogPost4';
import SubmitButton from '../components/SubmitButtonComponent';

const blogPosts = [
  {
    id: 'css',
    label: 'CSS',
    component: <BlogPost1 />,
  },
  {
    id: 'why-react',
    label: 'Why React?',
    component: <BlogPost2 />,
  },
  {
    id: 'responsiveness-in-web-development',
    label: 'Responsiveness in Web Development',
    component: <BlogPost3 />,
  },
  {
    id: 'mastering-css-grid-flexbox',
    label: 'Mastering CSS Grid + Flexbox',
    component: <BlogPost4 />,
  },
];

const formatPostId = (id) => {
  return blogPosts.find((post) => post.id === id)?.label || 'CSS';
};

function BlogPage() {
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState(formatPostId(postId));

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPost(formatPostId(postId));
  }, [postId]);

  const renderBlogPost = () => {
    const currentBlog = blogPosts.find((post) => post.label === currentPost);
    return currentBlog ? currentBlog.component : <BlogPost1 />;
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: '#fcfaf4', minHeight: '100vh',  paddingTop: '10rem'}}
    >
      <Helmet>
        <title>
          {currentPost} - Build Me A Website | Web Development Insights & Tips
        </title>
        <meta
          name="description"
          content={`Read about ${currentPost} on the Build Me A Website blog. Stay updated with the latest trends in web design, development, and digital marketing.`}
        />
        <link
          rel="canonical"
          href={`https://buildmeawebsite.ca/blog/${postId || 'css'}`}
        />
        {/* Add other meta tags and scripts as needed */}
      </Helmet>

   

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr 1fr'
            : 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '10px',
          justifyContent: 'center',
          margin: '5rem 0 2rem 0',
          padding: '5rem 2rem',
        }}
      >
        {blogPosts.map((post) => (
          <button
            key={post.id}
            onClick={() => setCurrentPost(post.label)}
            style={{
              cursor: 'pointer',
              padding: '10px 20px',
              borderRadius: '20px',
              backgroundColor:
                currentPost === post.label ? '#3a3a3a' : '#fcfaf4',
              color: currentPost === post.label ? '#fcfaf4' : '#3a3a3a',
              border: '1px solid #3a3a3a',
              width: '100%',
              boxSizing: 'border-box',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            {post.label}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '50px' }}>{renderBlogPost()}</div>
      

      <SubmitButton to="/consultation" text="Book a Free Consultation" />
    </div>
  );
}

export default BlogPage;
