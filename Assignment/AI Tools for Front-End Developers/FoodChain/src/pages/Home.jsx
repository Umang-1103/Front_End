import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FoodCard from '../components/FoodCard';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
import { foodService } from '../services/api';
import { FaTag, FaTruck, FaLeaf, FaClock, FaQuoteLeft } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  const { data: foods, loading, error } = useFetch(foodService.getAll);

  // Filter popular foods
  const popularFoods = foods ? foods.filter((f) => f.isPopular).slice(0, 4) : [];

  const handleSelectCategory = (categoryName) => {
    navigate(`/menu?category=${categoryName}`);
  };

  return (
    <div className="bg-dark text-white min-vh-100 pb-5">
      {/* Hero Section */}
      <Hero />

      {/* Categories Spotlight */}
      <section className="py-5 bg-black">
        <div className="container text-center">
          <h2 className="fw-bold mb-2">Explore Our <span className="text-warning">Categories</span></h2>
          <p className="text-muted mb-4">Choose from our selected cuisines crafted for every craving</p>
          <div className="row g-3 justify-content-center mt-3">
            {[
              { name: 'Burger', icon: '🍔', desc: 'Juicy Burgers' },
              { name: 'Pizza', icon: '🍕', desc: 'Crispy Pizzas' },
              { name: 'Pasta', icon: '🍝', desc: 'Italian Pastas' },
              { name: 'Sushi', icon: '🍣', desc: 'Japanese Sushi' },
              { name: 'Dessert', icon: '🍰', desc: 'Sweet Desserts' },
              { name: 'Drinks', icon: '🥤', desc: 'Cold Drinks' },
            ].map((cat) => (
              <div key={cat.name} className="col-lg-2 col-md-4 col-6">
                <button
                  onClick={() => handleSelectCategory(cat.name)}
                  className="btn btn-outline-secondary w-100 py-4 border-secondary d-flex flex-column align-items-center gap-2 hover-card-lift bg-dark text-light rounded-4"
                >
                  <span className="fs-1">{cat.icon}</span>
                  <span className="fw-bold small text-white">{cat.desc}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Special Offers */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Today's <span className="text-warning">Special Offers</span></h2>
            <p className="text-muted">Unwrap double the deliciousness with these hand-picked deals</p>
          </div>
          <div className="row g-4">
            {/* Offer 1 */}
            <div className="col-md-6">
              <div className="card border-0 bg-dark text-white shadow rounded-4 position-relative overflow-hidden h-100" style={{ minHeight: '220px' }}>
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-20"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="card-body position-relative z-1 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-danger mb-2 px-3 py-2 text-uppercase">BOGO Deal</span>
                    <h3 className="fw-bold mb-2">Double Pizza Tuesday</h3>
                    <p className="text-muted mb-4" style={{ maxWidth: '300px' }}>Buy any gourmet pizza of your choice, and get a Margherita Pizza absolutely free!</p>
                  </div>
                  <div>
                    <button onClick={() => navigate('/menu?category=Pizza')} className="btn btn-warning fw-bold px-4">Order Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="col-md-6">
              <div className="card border-0 bg-dark text-white shadow rounded-4 position-relative overflow-hidden h-100" style={{ minHeight: '220px' }}>
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-20"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="card-body position-relative z-1 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-warning text-dark mb-2 px-3 py-2 text-uppercase">20% Off</span>
                    <h3 className="fw-bold mb-2">Burger Bliss Combo</h3>
                    <p className="text-muted mb-4" style={{ maxWidth: '300px' }}>Get 20% off on all Burgers when you order a milkshake and french fries together.</p>
                  </div>
                  <div>
                    <button onClick={() => navigate('/menu?category=Burger')} className="btn btn-warning fw-bold px-4">Claim Discount</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Foods */}
      <section className="py-5 bg-black">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 className="fw-bold mb-2">Our <span className="text-warning">Popular Foods</span></h2>
              <p className="text-muted mb-0">Customer favorites that keep people coming back for more</p>
            </div>
            <Link to="/menu" className="btn btn-outline-warning fw-bold px-4 rounded-pill">View Full Menu</Link>
          </div>

          {loading && <Loader />}
          {error && <div className="alert alert-danger border-danger bg-dark text-danger text-center">{error}</div>}

          {!loading && !error && (
            <div className="row g-4">
              {popularFoods.map((food) => (
                <div key={food.id} className="col-xl-3 col-md-6">
                  <FoodCard food={food} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-4 bg-black rounded-4 h-100 hover-card-lift">
                <FaLeaf className="text-warning mb-3" size={40} />
                <h5 className="fw-bold text-white mb-2">100% Fresh & Organic</h5>
                <p className="text-muted mb-0">All our ingredients are sourced daily from local organic farms to ensure the highest quality food.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-black rounded-4 h-100 hover-card-lift">
                <FaClock className="text-warning mb-3" size={40} />
                <h5 className="fw-bold text-white mb-2">Super Fast Delivery</h5>
                <p className="text-muted mb-0">Your order will be cooked hot and delivered straight to your doorstep in under 30 minutes, guaranteed.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-black rounded-4 h-100 hover-card-lift">
                <FaTruck className="text-warning mb-3" size={40} />
                <h5 className="fw-bold text-white mb-2">Free Delivery</h5>
                <p className="text-muted mb-0">No delivery fees on orders above $30. Enjoy gourmet meals cooked fresh at no extra delivery cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Testimonial Slider */}
      <section className="py-5 bg-black">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">What Our <span className="text-warning">Customers Say</span></h2>
            <p className="text-muted">Hear from the foodies who have tasted our chef-crafted wonders</p>
          </div>

          <div id="reviewCarousel" className="carousel slide py-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            
            <div className="carousel-inner text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {/* Testimonial 1 */}
              <div className="carousel-item active" data-bs-interval="4000">
                <div className="px-4 py-5 bg-dark border border-secondary rounded-4 shadow-sm position-relative">
                  <FaQuoteLeft className="text-warning position-absolute opacity-10" size={70} style={{ top: '20px', left: '30px' }} />
                  <p className="fs-5 italic text-light mb-4">
                    "The Classic Cheese Burger was pure bliss! It was incredibly juicy, and the brioche bun was toasted to perfection. Delivery took only 20 minutes, and the food was steaming hot!"
                  </p>
                  <h6 className="fw-bold text-warning mb-0">Marcus Aurelius</h6>
                  <span className="small text-muted">Food Blogger & Critic</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="px-4 py-5 bg-dark border border-secondary rounded-4 shadow-sm position-relative">
                  <FaQuoteLeft className="text-warning position-absolute opacity-10" size={70} style={{ top: '20px', left: '30px' }} />
                  <p className="fs-5 italic text-light mb-4">
                    "The Margherita Pizza here represents true Italian tradition. The crust is chewy, the sauce is rich and tangy, and the cheese has the perfect cheese-pull. Highly recommended!"
                  </p>
                  <h6 className="fw-bold text-warning mb-0">Sophia Loren</h6>
                  <span className="small text-muted">Regular Diner</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="carousel-item" data-bs-interval="4000">
                <div className="px-4 py-5 bg-dark border border-secondary rounded-4 shadow-sm position-relative">
                  <FaQuoteLeft className="text-warning position-absolute opacity-10" size={70} style={{ top: '20px', left: '30px' }} />
                  <p className="fs-5 italic text-light mb-4">
                    "Decadent Chocolate Lava Cake is to die for! The molten chocolate core combined with premium cold vanilla ice cream creates an absolute party of flavors in your mouth."
                  </p>
                  <h6 className="fw-bold text-warning mb-0">David Beckham</h6>
                  <span className="small text-muted">Dessert Connoisseur</span>
                </div>
              </div>
            </div>

            {/* Carousel Nav Arrows */}
            <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
