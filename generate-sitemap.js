const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.9 },
  { url: '/consultation', changefreq: 'monthly', priority: 0.7 },
  // Add other routes here as needed
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://buildmeawebsite.ca' });
  const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

  sitemapStream.pipe(writeStream);

  // Write each link to the sitemap
  links.forEach(link => sitemapStream.write(link));

  sitemapStream.end();

  // Wait for the stream to finish
  await streamToPromise(sitemapStream);

  console.log('Sitemap created successfully!');
}

generateSitemap().catch(console.error);
