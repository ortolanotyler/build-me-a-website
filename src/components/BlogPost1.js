import React, { useState, useEffect } from 'react';

const BlogPost1 = () => {
  const [config, setConfig] = useState({ size: 120, y: 30 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateStyles = () => {
    document.documentElement.style.setProperty('--size', config.size);
    document.documentElement.style.setProperty('--y', config.y);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    updateStyles();
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [config]);

  return (
    <div style={{ fontFamily: 'League Spartan, sans-serif', minHeight: '100vh', color: '#3a3a3a', backgroundColor: 'transparent' }}>
      <header style={{ padding: '2rem 0 1rem', textAlign: 'center' }}>
        <h1 style={{ margin: 0, textTransform: 'uppercase', fontSize: '2rem', fontWeight: 'normal' }}>
          Understanding CSS: The Language of Web Design
        </h1>
      </header>
      <main style={{ maxWidth: '700px', margin: '1rem auto', lineHeight: '1.5', textAlign: 'justify' }}>
        {!isSmallScreen ? (
          <div style={{ 
            display: 'flex', 
            
            flexDirection: 'row', 
            flexWrap: 'wrap' 
          }}>
            <div style={{ flex: 1 }}>
              <p>
                Cascading Style Sheets (CSS) is a stylesheet language used to control the presentation of web pages. While HTML provides the structure of a web page, CSS defines how it should look to users. CSS allows you to apply styles such as colors, fonts, and spacing to your HTML elements, creating a visually appealing and user-friendly experience.
              </p>
              <p>
                One of the key features of CSS is its cascading nature. This means that styles can be applied from multiple sources and are combined to produce the final presentation. The cascade determines which styles are applied when there are conflicting rules. Specificity, importance, and source order all play roles in the cascade, allowing developers to fine-tune their designs.
              </p>
              <p>
                CSS also offers the ability to create responsive designs that adapt to different screen sizes and devices. Media queries, for example, enable you to apply specific styles depending on the characteristics of the user’s device, such as screen width. This ensures that your website looks great on both desktop and mobile devices.
              </p>
              <p>
                Another powerful feature of CSS is the ability to use pre-processors like Sass or Less. These tools extend the functionality of CSS by allowing you to use variables, nested rules, and mixins, which make your stylesheets more maintainable and reusable. With pre-processors, you can write cleaner and more efficient CSS code.
              </p>
              <p>
                Over the years, CSS has evolved significantly, with new features and modules being added to the language. CSS Grid and Flexbox, for example, have revolutionized the way developers create complex layouts. These layout models provide powerful tools for aligning elements and distributing space within a container, making it easier to design modern, responsive web pages.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <p>
                While CSS is incredibly powerful, it also comes with its challenges. Browser compatibility issues can arise, as not all browsers interpret CSS in the same way. However, with the help of tools like Autoprefixer, which automatically adds vendor prefixes to your CSS, these issues can be minimized.
              </p>
              <p>
                Another challenge is managing large CSS files as your project grows. To address this, many developers adopt a methodology such as BEM (Block, Element, Modifier) to organize their CSS. BEM helps to create modular and reusable code by breaking down the UI into small, manageable components. This approach not only improves maintainability but also reduces the risk of style conflicts.
              </p>
              <p>
                The future of CSS looks promising, with many exciting features on the horizon. For example, CSS Houdini is an API that allows developers to write their own CSS, giving them even more control over how their web pages are rendered. Additionally, new CSS features like container queries will provide even greater flexibility for responsive design.
              </p>
              <p>
                In conclusion, CSS is an essential tool for web developers, enabling them to create visually stunning and responsive web pages. Understanding the principles of the cascade, specificity, and layout models like Grid and Flexbox is crucial for mastering CSS. With the right techniques and tools, you can write efficient, maintainable CSS that scales with your projects.
              </p>
              <p>
                Whether you're a beginner or an experienced developer, there's always something new to learn in the world of CSS. As the language continues to evolve, staying up-to-date with the latest features and best practices will help you create better web experiences for your users.
              </p>
            </div>
          </div>
        ) : (
          <div
          style = {{padding: '1rem 2rem', textAlign: 'left' }}>
          
            <p>
              Cascading Style Sheets (CSS) is a stylesheet language used to control the presentation of web pages. While HTML provides the structure of a web page, CSS defines how it should look to users. CSS allows you to apply styles such as colors, fonts, and spacing to your HTML elements, creating a visually appealing and user-friendly experience.
            </p>
            <p>
              One of the key features of CSS is its cascading nature. This means that styles can be applied from multiple sources and are combined to produce the final presentation. The cascade determines which styles are applied when there are conflicting rules. Specificity, importance, and source order all play roles in the cascade, allowing developers to fine-tune their designs.
            </p>
            <p>
              CSS also offers the ability to create responsive designs that adapt to different screen sizes and devices. Media queries, for example, enable you to apply specific styles depending on the characteristics of the user’s device, such as screen width. This ensures that your website looks great on both desktop and mobile devices.
            </p>
            <p>
              Another powerful feature of CSS is the ability to use pre-processors like Sass or Less. These tools extend the functionality of CSS by allowing you to use variables, nested rules, and mixins, which make your stylesheets more maintainable and reusable. With pre-processors, you can write cleaner and more efficient CSS code.
            </p>
            <p>
              Over the years, CSS has evolved significantly, with new features and modules being added to the language. CSS Grid and Flexbox, for example, have revolutionized the way developers create complex layouts. These layout models provide powerful tools for aligning elements and distributing space within a container, making it easier to design modern, responsive web pages.
            </p>
            <p>
              While CSS is incredibly powerful, it also comes with its challenges. Browser compatibility issues can arise, as not all browsers interpret CSS in the same way. However, with the help of tools like Autoprefixer, which automatically adds vendor prefixes to your CSS, these issues can be minimized.
            </p>
            <p>
              Another challenge is managing large CSS files as your project grows. To address this, many developers adopt a methodology such as BEM (Block, Element, Modifier) to organize their CSS. BEM helps to create modular and reusable code by breaking down the UI into small, manageable components. This approach not only improves maintainability but also reduces the risk of style conflicts.
            </p>
            <p>
              The future of CSS looks promising, with many exciting features on the horizon. For example, CSS Houdini is an API that allows developers to write their own CSS, giving them even more control over how their web pages are rendered. Additionally, new CSS features like container queries will provide even greater flexibility for responsive design.
            </p>
            <p>
              In conclusion, CSS is an essential tool for web developers, enabling them to create visually stunning and responsive web pages. Understanding the principles of the cascade, specificity, and layout models like Grid and Flexbox is crucial for mastering CSS. With the right techniques and tools, you can write efficient, maintainable CSS that scales with your projects.
            </p>
            <p>
              Whether you're a beginner or an experienced developer, there's always something new to learn in the world of CSS. As the language continues to evolve, staying up-to-date with the latest features and best practices will help you create better web experiences for your users.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogPost1;
