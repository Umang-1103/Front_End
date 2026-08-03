import React from 'react';
import { FaUtensils, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-extrabold display-4 mb-2">
            About <span className="text-warning">FoodChain</span>
          </h1>
          <p className="text-muted text-uppercase tracking-wider small" style={{ letterSpacing: '2px' }}>
            A journey of flavors, passion, and culinary craftsmanship
          </p>
        </div>

        {/* Restaurant Story */}
        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Our Culinary <span className="text-warning">Legacy</span></h2>
            <p className="text-muted leading-relaxed mb-3">
              Founded in 2012, FoodChain started as a humble family-owned food truck in the heart of the culinary district. Our mission was simple: to serve high-quality, flame-grilled gourmet dishes that combine traditional recipes with a modern twist.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Over the decade, we have grown into a beloved national chain, but our core principles remain untouched. We source our vegetables from local organic farms daily, hand-pick our premium beef patties, and craft our secret sauces from scratch. Every meal that leaves our kitchen is a testament to our commitment to excellence.
            </p>
            <div className="row g-3">
              <div className="col-6">
                <div className="p-3 bg-black rounded border border-secondary text-center">
                  <h3 className="fw-extrabold text-warning mb-1">10+</h3>
                  <span className="small text-muted text-uppercase tracking-wide">Years of Passion</span>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 bg-black rounded border border-secondary text-center">
                  <h3 className="fw-extrabold text-warning mb-1">25k+</h3>
                  <span className="small text-muted text-uppercase tracking-wide">Happy Diners</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg border border-secondary" style={{ minHeight: '380px' }}>
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                alt="Chefs cooking in a professional kitchen"
                className="w-100 h-100 object-fit-cover position-absolute"
              />
            </div>
          </div>
        </div>

        {/* Brand Values / Features */}
        <div className="row g-4 mb-5 pt-4 text-center">
          <div className="col-md-4">
            <div className="p-4 bg-black border border-secondary rounded-4 h-100 hover-card-lift">
              <div className="d-inline-flex p-3 bg-warning text-dark rounded-circle mb-3">
                <FaUtensils size={24} />
              </div>
              <h5 className="fw-bold mb-2">Exquisite Taste</h5>
              <p className="text-muted mb-0 small">Curated by top-tier chefs, our recipes offer a rich explosion of balanced flavors that keep you coming back.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-black border border-secondary rounded-4 h-100 hover-card-lift">
              <div className="d-inline-flex p-3 bg-warning text-dark rounded-circle mb-3">
                <FaUsers size={24} />
              </div>
              <h5 className="fw-bold mb-2">Customer First</h5>
              <p className="text-muted mb-0 small">From custom allergy-friendly alterations to quick customer support, our hospitality is second to none.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-black border border-secondary rounded-4 h-100 hover-card-lift">
              <div className="d-inline-flex p-3 bg-warning text-dark rounded-circle mb-3">
                <FaAward size={24} />
              </div>
              <h5 className="fw-bold mb-2">Award Winning</h5>
              <p className="text-muted mb-0 small">Proud recipients of the "Best Gourmet Burger Chain" and "Best Quick Service Restaurant" awards for consecutive years.</p>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mt-5 pt-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Meet Our Culinary <span className="text-warning">Artists</span></h2>
            <p className="text-muted">The creative masterminds behind your favorite dishes</p>
          </div>

          <div className="row g-4">
            {/* Team Member 1 */}
            <div className="col-md-4">
              <div className="card bg-black text-white border-secondary rounded-4 overflow-hidden shadow h-100 hover-card-lift">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80"
                  alt="Executive Chef"
                  className="card-img-top object-fit-cover"
                  style={{ height: '300px' }}
                />
                <div className="card-body p-4 text-center">
                  <h5 className="card-title fw-bold text-white mb-1">Chef Antonio Rossi</h5>
                  <span className="text-warning small text-uppercase tracking-wider fw-semibold mb-3 d-block">
                    Executive Chef / Founder
                  </span>
                  <p className="card-text text-muted small">
                    With over 18 years of Michelin-star experience in Milan and New York, Antonio brings fine-dining technique to gourmet fast-food.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-md-4">
              <div className="card bg-black text-white border-secondary rounded-4 overflow-hidden shadow h-100 hover-card-lift">
                <img
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80"
                  alt="Pastry Chef"
                  className="card-img-top object-fit-cover"
                  style={{ height: '300px' }}
                />
                <div className="card-body p-4 text-center">
                  <h5 className="card-title fw-bold text-white mb-1">Chef Sarah Jenkins</h5>
                  <span className="text-warning small text-uppercase tracking-wider fw-semibold mb-3 d-block">
                    Head Pastry Chef
                  </span>
                  <p className="card-text text-muted small">
                    Sarah's artisan baking expertise shapes our daily fresh brioche burger buns and our signature lava cakes and desserts.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-md-4">
              <div className="card bg-black text-white border-secondary rounded-4 overflow-hidden shadow h-100 hover-card-lift">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="General Manager"
                  className="card-img-top object-fit-cover"
                  style={{ height: '300px' }}
                />
                <div className="card-body p-4 text-center">
                  <h5 className="card-title fw-bold text-white mb-1">Elena Rostova</h5>
                  <span className="text-warning small text-uppercase tracking-wider fw-semibold mb-3 d-block">
                    General Operations Manager
                  </span>
                  <p className="card-text text-muted small">
                    Elena handles supply lines and logistical operations, ensuring that the freshest organic vegetables reach our stores daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hover-card-lift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hover-card-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.5) !important;
        }
      `}</style>
    </div>
  );
};

export default About;
