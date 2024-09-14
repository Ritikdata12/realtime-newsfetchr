import './Services.css';

const Services = () => {
  const servicesData = [
    {
      icon: '📰',
      title: 'BBC News',
      description: 'Trusted global news provider delivering breaking news, features, and analysis on the latest world events.',
    },
    {
      icon: '🌐',
      title: 'CNN',
      description: 'One of the most influential news channels, covering global events, politics, and entertainment with in-depth reports.',
    },
    {
      icon: '⚡',
      title: 'Reuters',
      description: 'A global leader in breaking news, providing fast, reliable, and unbiased information on politics, markets, and more.',
    },
    {
      icon: '📡',
      title: 'Al Jazeera',
      description: 'Offering an alternative perspective on global news, covering politics, business, and culture from around the world.',
    },
    {
      icon: '🖥️',
      title: 'The New York Times',
      description: 'Award-winning journalism with reports on politics, culture, business, and breaking news around the globe.',
    },
    {
      icon: '🎥',
      title: 'Fox News',
      description: 'Providing the latest breaking news, opinions, and headlines on U.S. politics and global events.',
    },
    {
      icon: '📱',
      title: 'The Guardian',
      description: 'Known for investigative journalism and in-depth coverage of world affairs, technology, and environment.',
    },
    {
      icon: '🔍',
      title: 'Bloomberg',
      description: 'Focused on delivering business and financial news, market data, and analysis from around the globe.',
    },
  ];

  return (
   
    <section className="services-section">
      <div className="container">
        <h2>SERVICES</h2>
        <p className="description">Our platform aggregates news from multiple trusted sources to keep you informed with real-time updates on various topics like politics, business, technology, and more</p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
