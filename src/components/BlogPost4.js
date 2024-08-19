import React, { useState, useEffect } from 'react';

const BlogPost4 = () => {
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
          Mastering Layouts with CSS Grid and Flexbox
        </h1>
      </header>
      <main style={{ maxWidth: '800px', margin: '1rem auto', lineHeight: '1.75', textAlign: 'justify' }}>
        {!isSmallScreen ? (
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              <p>
                In the world of web development, creating responsive and visually appealing layouts is a crucial task. CSS Grid and Flexbox are two powerful layout models that have revolutionized the way developers approach design. These tools provide developers with the flexibility to create complex and adaptive layouts with ease, making them indispensable in modern web design.
              </p>
              <p>
                CSS Grid is a two-dimensional layout system that allows you to create grid-based designs. It provides a simple and intuitive way to arrange elements into rows and columns, enabling you to build intricate layouts without relying on floats or positioning hacks. With CSS Grid, you can define a grid container and specify the number of rows and columns, as well as the size and position of grid items.
              </p>
              <p>
                One of the standout features of CSS Grid is its ability to handle both horizontal and vertical alignment. Unlike traditional methods, where aligning elements vertically could be challenging, CSS Grid makes it straightforward. By using properties like <code>grid-template-rows</code> and <code>grid-template-columns</code>, you can create a grid that perfectly aligns elements both horizontally and vertically, resulting in a clean and organized layout.
              </p>
              <p>
                Another advantage of CSS Grid is its support for grid gaps. Grid gaps allow you to create space between grid items without the need for margin or padding hacks. This feature is particularly useful when designing layouts that require consistent spacing between elements, such as image galleries or card-based designs. By setting the <code>grid-gap</code> property, you can easily control the spacing between grid items, enhancing the visual appeal of your design.
              </p>
              <p>
                Flexbox, on the other hand, is a one-dimensional layout model that excels at distributing space within a container and aligning items along a single axis. Whether you want to align items horizontally or vertically, Flexbox provides a range of properties to achieve your desired layout. The <code>display: flex;</code> property defines a flex container, and within it, you can use properties like <code>justify-content</code> and <code>align-items</code> to control the alignment of flex items.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <p>
                One of the most powerful features of Flexbox is its ability to handle flexible sizing. Flexbox allows you to create layouts where elements can grow, shrink, and distribute space based on the available container size. By using the <code>flex</code> property, you can define how much an item should grow or shrink relative to others, ensuring that your layout adapts to different screen sizes without breaking.
              </p>
              <p>
                Flexbox also simplifies the process of creating equal-height columns. In traditional CSS, achieving equal-height columns required complex hacks or JavaScript solutions. However, with Flexbox, this task becomes effortless. By setting the <code>align-items: stretch;</code> property on the flex container, you can ensure that all flex items within the container have equal height, making your layouts more consistent and visually balanced.
              </p>
              <p>
                While CSS Grid and Flexbox are powerful on their own, they can also be used together to create even more advanced layouts. For example, you can use CSS Grid to define the overall structure of a layout, with Flexbox controlling the alignment and distribution of elements within individual grid items. This combination allows you to take advantage of the strengths of both models, resulting in highly flexible and adaptable designs.
              </p>
              <p>
                When deciding whether to use CSS Grid or Flexbox, consider the nature of your layout. If you need to create a complex two-dimensional layout with rows and columns, CSS Grid is likely the better choice. On the other hand, if you're working with a one-dimensional layout where you need to align items along a single axis, Flexbox may be more suitable.
              </p>
              <p>
                In conclusion, mastering CSS Grid and Flexbox is essential for any web developer looking to create modern, responsive layouts. These tools provide the flexibility and control needed to design layouts that are both visually appealing and functional across different devices. By understanding the strengths of each model and knowing when to use them, you can elevate your web design skills and build layouts that stand out in today's competitive digital landscape.
              </p>
            </div>
          </div>
        ) : (
            <div
            style = {{padding: '1rem 2rem', textAlign: 'left' }}>
            <p>
              In the world of web development, creating responsive and visually appealing layouts is a crucial task. CSS Grid and Flexbox are two powerful layout models that have revolutionized the way developers approach design. These tools provide developers with the flexibility to create complex and adaptive layouts with ease, making them indispensable in modern web design.
            </p>
            <p>
              CSS Grid is a two-dimensional layout system that allows you to create grid-based designs. It provides a simple and intuitive way to arrange elements into rows and columns, enabling you to build intricate layouts without relying on floats or positioning hacks. With CSS Grid, you can define a grid container and specify the number of rows and columns, as well as the size and position of grid items.
            </p>
            <p>
              One of the standout features of CSS Grid is its ability to handle both horizontal and vertical alignment. Unlike traditional methods, where aligning elements vertically could be challenging, CSS Grid makes it straightforward. By using properties like <code>grid-template-rows</code> and <code>grid-template-columns</code>, you can create a grid that perfectly aligns elements both horizontally and vertically, resulting in a clean and organized layout.
            </p>
            <p>
              Another advantage of CSS Grid is its support for grid gaps. Grid gaps allow you to create space between grid items without the need for margin or padding hacks. This feature is particularly useful when designing layouts that require consistent spacing between elements, such as image galleries or card-based designs. By setting the <code>grid-gap</code> property, you can easily control the spacing between grid items, enhancing the visual appeal of your design.
            </p>
            <p>
              Flexbox, on the other hand, is a one-dimensional layout model that excels at distributing space within a container and aligning items along a single axis. Whether you want to align items horizontally or vertically, Flexbox provides a range of properties to achieve your desired layout. The <code>display: flex;</code> property defines a flex container, and within it, you can use properties like <code>justify-content</code> and <code>align-items</code> to control the alignment of flex items.
            </p>
            <p>
              One of the most powerful features of Flexbox is its ability to handle flexible sizing. Flexbox allows you to create layouts where elements can grow, shrink, and distribute space based on the available container size. By using the <code>flex</code> property, you can define how much an item should grow or shrink relative to others, ensuring that your layout adapts to different screen sizes without breaking.
            </p>
            <p>
              Flexbox also simplifies the process of creating equal-height columns. In traditional CSS, achieving equal-height columns required complex hacks or JavaScript solutions. However, with Flexbox, this task becomes effortless. By setting the <code>align-items: stretch;</code> property on the flex container, you can ensure that all flex items within the container have equal height, making your layouts more consistent and visually balanced.
            </p>
            <p>
              While CSS Grid and Flexbox are powerful on their own, they can also be used together to create even more advanced layouts. For example, you can use CSS Grid to define the overall structure of a layout, with Flexbox controlling the alignment and distribution of elements within individual grid items. This combination allows you to take advantage of the strengths of both models, resulting in highly flexible and adaptable designs.
            </p>
            <p>
              When deciding whether to use CSS Grid or Flexbox, consider the nature of your layout. If you need to create a complex two-dimensional layout with rows and columns, CSS Grid is likely the better choice. On the other hand, if you're working with a one-dimensional layout where you need to align items along a single axis, Flexbox may be more suitable.
            </p>
            <p>
              In conclusion, mastering CSS Grid and Flexbox is essential for any web developer looking to create modern, responsive layouts. These tools provide the flexibility and control needed to design layouts that are both visually appealing and functional across different devices. By understanding the strengths of each model and knowing when to use them, you can elevate your web design skills and build layouts that stand out in today's competitive digital landscape.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogPost4;

