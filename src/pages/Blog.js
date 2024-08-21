import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParallaxSection from './Parallax';
import BlogPost1 from '../components/BlogPost1';
import BlogPost2 from '../components/BlogPost2';
import BlogPost3 from '../components/BlogPost3';
import BlogPost4 from '../components/BlogPost4';
import SubmitButton from '../components/SubmitButtonComponent';

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
      <Helmet>
        <title>Blog - Build Me A Website | Web Development Insights & Tips</title>
        <meta
          name="description"
          content="Explore web development insights, tips, and tutorials on the Build Me A Website blog. Stay updated with the latest trends in web design, development, and digital marketing."
        />
      <meta name="keywords" content="web development, Ontario, Toronto, website design, web hosting, DNS management, SEO services, SEM strategies, digital marketing, responsive design, ecommerce solutions, UX/UI design, content management systems, website optimization, online branding, website maintenance, professional web services, web security, custom websites, domain registration, web analytics" />

        <link rel="canonical" href="https://buildmeawebsite.ca/blog" />
        <meta property="og:title" content="Blog - Build Me A Website | Web Development Insights & Tips" />
        <meta
          property="og:description"
          content="Explore web development insights, tips, and tutorials on the Build Me A Website blog. Stay updated with the latest trends in web design, development, and digital marketing."
        />
        <meta property="og:url" content="https://buildmeawebsite.ca/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://buildmeawebsite.ca/og-image-blog.jpg" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "mainEntityOfPage": "https://buildmeawebsite.ca/blog",
            "headline": "Build Me A Website Blog",
            "description": "Explore web development insights, tips, and tutorials on the Build Me A Website blog.",
            "publisher": {
              "@type": "Organization",
              "name": "Build Me A Website",
              "sameAs": [
                "https://www.facebook.com/buildmecanada",
                "https://www.twitter.com/buildmewebsites",
                "https://www.linkedin.com/company/buildmecanada"
              ],
              "logo": {
                "@type": "ImageObject",
                "url": "https://buildmeawebsite.ca/logo.png"
              }
            },
            "author": {
              "@type": "Person",
              "name": "Tyler Ortolano"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.label,
              "url": `https://buildmeawebsite.ca/blog/${post.id.toLowerCase().replace(/\s+/g, '-')}`,
              
              "datePublished": "2024-08-21",
              "author": {
                "@type": "BusinessEntity",
                "name": "Build Me Digital Marketing",
              }
            }))
          })}
        </script>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-YYTCRX2PFK`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYTCRX2PFK');
          `}
        </script>
      </Helmet>

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
              backgroundColor: currentPost === post.id ? '#3a3a3a' : '#f8f8f8',
              color: currentPost === post.id ? '#f8f8f8' : '#3a3a3a',
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
      <SubmitButton to='/consultation' text="Book a Free Consultation" />
    </div>
  );
}

export default BlogPage;
