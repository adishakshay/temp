import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../asserts/Blogs.css';
import blogImage1 from '../../asserts/Image/event-planning-skills.png';
import blogImage2 from '../../asserts/Image/event-planning-challenges-1024x576.jpg';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Event Management',
      date: 'July 20, 2024',
      summary: 'Discover how AI is revolutionizing the event management industry and what to expect in the coming years.',
      image: blogImage1
    },
    {
      title: 'Sustainable Event Planning',
      date: 'July 15, 2024',
      summary: 'Learn how to plan and execute sustainable events that leave a positive impact on the environment.',
      image: blogImage2
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="blogs-page-content">
        <div className="blogs-hero">
          <h1>Our Blogs</h1>
          <p>Stay updated with the latest trends, tips, and insights in the world of event management.</p>
        </div>
        <div className="featured-blogs">
          <h2>Featured Articles</h2>
          <div className="featured-blogs-list">
            {blogPosts.slice(0, 2).map((post, index) => (
              <div key={index} className="featured-blog-post">
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <p>{post.date}</p>
                <p>{post.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="recent-blogs">
          <h2>Recent Posts</h2>
          <ul>
            {blogPosts.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
                <p>{post.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default Blogs;
