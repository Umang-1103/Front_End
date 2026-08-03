import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text, className = '' }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<FaStar key={i} className="text-warning me-1" />);
    } else if (value >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-warning me-1" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-muted me-1" />);
    }
  }

  return (
    <div className={`d-flex align-items-center ${className}`}>
      <span className="d-flex align-items-center me-2">{stars}</span>
      {text && <span className="small fw-semibold text-muted">{text}</span>}
      {!text && value && <span className="small fw-bold text-warning ms-1">{value}</span>}
    </div>
  );
};

export default Rating;
