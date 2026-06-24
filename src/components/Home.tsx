import React, { useState } from 'react';
import { Search, Home as HomeIcon, ShoppingBag, User, MapPin } from 'lucide-react';

interface Props {
  onNavigate: (screen: string) => void;
}

const Home: React.FC<Props> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Pizza', 'Sushi', 'Burgers', 'Desserts'];

  const restaurants = [
    { id: 1, name: 'Big Bun Theory', tags: '$ • Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Kyoto Zen Sushi', tags: '$$ • Japanese', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Pizza Paradise', tags: '$$ • Italian', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Sweet Delights', tags: '$ • Desserts', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <div className="home-layout">
      {/* Desktop Sidebar (Hidden on mobile) */}
      <aside className="home-sidebar">
        <div style={{ padding: '0 16px', marginBottom: '32px' }}>
          <h1 style={{ color: 'var(--color-primary)', fontSize: '24px' }}>Rk Pure Veg</h1>
        </div>
        <nav className="sidebar-nav">
          <div className="sidebar-nav-item active"><HomeIcon size={20} /> Home</div>
          <div className="sidebar-nav-item"><Search size={20} /> Search</div>
          <div className="sidebar-nav-item"><ShoppingBag size={20} /> Orders</div>
          <div className="sidebar-nav-item"><User size={20} /> Profile</div>
        </nav>
        <div style={{ marginTop: 'auto', padding: '16px' }}>
           <button className="btn btn-secondary" onClick={() => onNavigate('splash')} style={{ width: '100%' }}>
            Log out
          </button>
        </div>
      </aside>

      <main className="home-main">
        {/* Mobile App Header */}
        <header className="app-header">
          <div className="container app-header-content">
            <div>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Delivering to</p>
              <h2 style={{ fontSize: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={16} color="var(--color-primary)" /> Home, 123 Street
              </h2>
            </div>
            <div className="user-profile-btn" onClick={() => onNavigate('splash')}>
              <div className="avatar">U</div>
            </div>
          </div>
        </header>

        <div className="container">
          {/* Search Section */}
          <div style={{ margin: 'var(--space-md) 0' }}>
            <div className="input-group">
              <Search size={20} color="var(--color-text-muted)" style={{ marginRight: '8px' }} />
              <input 
                type="text" 
                className="input-field" 
                placeholder="Search for dishes, restaurants..." 
              />
            </div>
          </div>

          {/* Categories */}
          <div className="categories-section">
            <h3 style={{ marginBottom: 'var(--space-sm)' }}>Categories</h3>
            <div className="category-chips">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`category-chip ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Restaurant Grid */}
          <div style={{ margin: 'var(--space-lg) 0' }}>
            <h3 style={{ marginBottom: 'var(--space-sm)' }}>Popular Near You</h3>
            <div className="restaurant-grid">
              {restaurants.map(restaurant => (
                <div key={restaurant.id} className="restaurant-card">
                  <div className="restaurant-image">
                    <img src={restaurant.image} alt={restaurant.name} />
                  </div>
                  <div className="restaurant-info">
                    <div className="restaurant-name">{restaurant.name}</div>
                    <div className="restaurant-meta">{restaurant.tags}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <HomeIcon size={24} />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <Search size={24} />
          <span>Search</span>
        </div>
        <div className="nav-item">
          <ShoppingBag size={24} />
          <span>Orders</span>
        </div>
        <div className="nav-item" onClick={() => onNavigate('splash')}>
          <User size={24} />
          <span>Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default Home;
