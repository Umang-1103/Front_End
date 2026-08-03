import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  { name: 'All', label: 'All Items' },
  { name: 'Burger', label: 'Burgers' },
  { name: 'Pizza', label: 'Pizzas' },
  { name: 'Pasta', label: 'Pastas' },
  { name: 'Salad', label: 'Salads' },
  { name: 'Sushi', label: 'Sushi' },
  { name: 'Chicken', label: 'Chicken' },
  { name: 'Mexican', label: 'Mexican' },
  { name: 'Sides', label: 'Sides' },
  { name: 'Dessert', label: 'Desserts' },
  { name: 'Drinks', label: 'Drinks' },
];

const Category = ({ activeCategory, onSelectCategory }) => {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  // Check scroll position to dynamically show/hide buttons
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftBtn(scrollLeft > 10);
      // Tolerance of 10px to account for browser zoom and subpixel rendering
      setShowRightBtn(scrollWidth - scrollLeft - clientWidth > 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Delay check slightly to ensure rendering is complete
      setTimeout(checkScroll, 100);
      
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  // Update scroll check on category list updates
  useEffect(() => {
    checkScroll();
  }, [activeCategory]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6; // Scroll 60% of current viewport
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="category-container mb-4 position-relative px-3 px-md-4">
      {/* Scroll Left Button */}
      {showLeftBtn && (
        <button
          onClick={() => handleScroll('left')}
          className="btn btn-warning rounded-circle shadow border-0 d-flex align-items-center justify-content-center position-absolute"
          style={{
            left: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '38px',
            height: '38px',
            zIndex: 10,
            backgroundColor: '#FF6B00',
            color: '#ffffff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            transition: 'all 0.2s',
          }}
          aria-label="Scroll left"
        >
          <FaChevronLeft size={16} />
        </button>
      )}

      {/* Categories Horizontal Track */}
      <div 
        ref={scrollRef}
        className="d-flex justify-content-start align-items-center flex-nowrap overflow-auto py-2 px-1 scrollbar-hidden gap-2"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`btn px-4 py-2 rounded-pill fw-bold text-nowrap transition-all shadow-sm ${
                isActive
                  ? 'btn-warning text-dark'
                  : 'btn-outline-secondary text-light hover-bg-warning hover-text-dark border-secondary'
              }`}
              style={{
                fontSize: '0.85rem',
                minWidth: '100px',
                borderWidth: '1.5px',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Scroll Right Button */}
      {showRightBtn && (
        <button
          onClick={() => handleScroll('right')}
          className="btn btn-warning rounded-circle shadow border-0 d-flex align-items-center justify-content-center position-absolute"
          style={{
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '38px',
            height: '38px',
            zIndex: 10,
            backgroundColor: '#FF6B00',
            color: '#ffffff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            transition: 'all 0.2s',
          }}
          aria-label="Scroll right"
        >
          <FaChevronRight size={16} />
        </button>
      )}
      
      {/* Custom Styles */}
      <style>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hover-bg-warning:hover {
          background-color: #FF6B00 !important;
          border-color: #FF6B00 !important;
          color: #ffffff !important;
        }
        .category-container {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Category;
