import React from 'react';
import { FaChartBar, FaStar, FaShoppingBag, FaDollarSign, FaCommentAlt } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { foodService, orderService, reviewService } from '../../services/api';
import { SkeletonBox, CategoryListSkeleton, ReviewListSkeleton } from '../../components/admin/SkeletonLoader';

const Analytics = () => {
  // Fetch foods, orders, and reviews in parallel
  const { data, loading, error } = useFetch(async () => {
    const [foods, orders, reviews] = await Promise.all([
      foodService.getAll(),
      orderService.getAll(),
      reviewService.getAll(),
    ]);
    return { foods, orders, reviews };
  });

  if (loading) {
    return (
      <div className="slide-up">
        {/* KPI Cards skeleton */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
              <div className="d-flex align-items-center gap-3">
                <SkeletonBox width="48px" height="48px" className="rounded-4" />
                <div className="flex-grow-1">
                  <SkeletonBox width="50%" height="14px" className="mb-2" />
                  <SkeletonBox width="30%" height="28px" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
              <div className="d-flex align-items-center gap-3">
                <SkeletonBox width="48px" height="48px" className="rounded-4" />
                <div className="flex-grow-1">
                  <SkeletonBox width="50%" height="14px" className="mb-2" />
                  <SkeletonBox width="30%" height="28px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Tables */}
        <div className="row g-4 mb-4">
          <div className="col-lg-6">
            <CategoryListSkeleton items={4} />
          </div>
          <div className="col-lg-6">
            <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
              <SkeletonBox width="40%" height="20px" className="mb-4" />
              <div className="d-flex flex-column gap-4 justify-content-center h-100" style={{ minHeight: '150px' }}>
                <div className="d-flex justify-content-between border-bottom pb-2">
                  <SkeletonBox width="35%" height="18px" />
                  <SkeletonBox width="20%" height="18px" />
                </div>
                <div className="d-flex justify-content-between border-bottom pb-2">
                  <SkeletonBox width="35%" height="18px" />
                  <SkeletonBox width="20%" height="18px" />
                </div>
                <div className="d-flex justify-content-between">
                  <SkeletonBox width="35%" height="18px" />
                  <SkeletonBox width="20%" height="18px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <ReviewListSkeleton items={3} />
      </div>
    );
  }
  if (error) return <div className="alert alert-danger text-center m-4">{error}</div>;

  const { foods = [], orders = [], reviews = [] } = data || {};

  // 1. Calculate General Metrics
  const totalSales = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const averageOrderValue = orders.length > 0 ? totalSales / orders.length : 0;
  
  // 2. Status counts
  const preparingCount = orders.filter((o) => o.status === 'Preparing').length;
  const deliveryCount = orders.filter((o) => o.status === 'Out for Delivery').length;
  const deliveredCount = orders.filter((o) => o.status === 'Delivered').length;

  // 3. Category revenue computation
  const categoryRevenue = {};
  orders.forEach((order) => {
    order.items.forEach((item) => {
      // Find food to get category
      const foodItem = foods.find((f) => f.id === item.id);
      const cat = foodItem ? foodItem.category : 'Other';
      categoryRevenue[cat] = (categoryRevenue[cat] || 0) + item.price * item.quantity;
    });
  });

  const categorySales = Object.keys(categoryRevenue).map((key) => ({
    name: key,
    value: categoryRevenue[key],
  })).sort((a, b) => b.value - a.value);

  // 4. Map food names to reviews
  const mappedReviews = reviews.map((rev) => {
    const food = foods.find((f) => f.id === rev.foodId);
    return {
      ...rev,
      foodName: food ? food.name : 'Unknown Dish',
    };
  });

  return (
    <div className="fade-in">
      {/* Cards Row */}
      <div className="row g-4 mb-4">
        {/* Total Revenue */}
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
            <div className="d-flex align-items-center gap-3">
              <div
                className="p-3 rounded-4"
                style={{ backgroundColor: 'rgba(255, 107, 0, 0.12)', color: '#FF6B00' }}
              >
                <FaDollarSign size={24} />
              </div>
              <div>
                <span className="text-muted small text-uppercase tracking-wider fw-bold">Gross Lifetime Earnings</span>
                <h3 className="fw-extrabold text-dark mt-1 mb-0">${totalSales.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Avg Order Value */}
        <div className="col-md-6">
          <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
            <div className="d-flex align-items-center gap-3">
              <div
                className="p-3 rounded-4"
                style={{ backgroundColor: 'rgba(255, 107, 0, 0.12)', color: '#FF6B00' }}
              >
                <FaShoppingBag size={24} />
              </div>
              <div>
                <span className="text-muted small text-uppercase tracking-wider fw-bold">Average Transaction Value</span>
                <h3 className="fw-extrabold text-dark mt-1 mb-0">${averageOrderValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Breakdown Grid */}
      <div className="row g-4 mb-4">
        {/* Category Revenue weights */}
        <div className="col-lg-6">
          <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
            <h5 className="fw-bold mb-4 text-dark d-flex align-items-center gap-2">
              <FaChartBar style={{ color: '#FF6B00' }} /> Revenue Share by Category
            </h5>
            
            {categorySales.length > 0 ? (
              <div className="d-flex flex-column gap-3">
                {categorySales.map((cat, idx) => {
                  const percentage = Math.round((cat.value / totalSales) * 100);
                  return (
                    <div key={idx}>
                      <div className="d-flex justify-content-between mb-1 small fw-semibold text-dark">
                        <span>{cat.name}</span>
                        <span>${cat.value.toFixed(2)} ({percentage}%)</span>
                      </div>
                      <div className="progress rounded-pill" style={{ height: '8px', backgroundColor: '#e9ecef' }}>
                        <div
                          className="progress-bar rounded-pill"
                          role="progressbar"
                          style={{
                            width: `${percentage}%`,
                            backgroundColor: '#FF6B00',
                          }}
                          aria-valuenow={percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center text-muted py-5">No sales data compiled yet.</div>
            )}
          </div>
        </div>

        {/* Order Status Breakdown weights */}
        <div className="col-lg-6">
          <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
            <h5 className="fw-bold mb-4 text-dark">Order Dispatch Statistics</h5>
            
            <div className="d-flex flex-column gap-4 justify-content-center h-100">
              <div className="d-flex align-items-center justify-content-between border-bottom pb-2">
                <span className="fw-semibold text-dark">🍳 Kitchen Preparing</span>
                <span className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill fs-6">{preparingCount} orders</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom pb-2">
                <span className="fw-semibold text-dark">🚴 Out for Delivery</span>
                <span className="badge bg-info text-white fw-bold px-3 py-2 rounded-pill fs-6">{deliveryCount} orders</span>
              </div>
              <div className="d-flex align-items-center justify-content-between pb-1">
                <span className="fw-semibold text-dark">✅ Successfully Delivered</span>
                <span className="badge bg-success text-white fw-bold px-3 py-2 rounded-pill fs-6">{deliveredCount} orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="card border-0 rounded-4 shadow-sm bg-white p-4">
        <h5 className="fw-bold mb-4 text-dark d-flex align-items-center gap-2">
          <FaCommentAlt style={{ color: '#FF6B00' }} /> Live Customer Reviews
        </h5>
        
        {mappedReviews.length > 0 ? (
          <div className="row g-3">
            {mappedReviews.map((rev) => (
              <div key={rev.id} className="col-md-6 col-lg-4">
                <div className="p-3 bg-light rounded-4 border h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong className="text-dark small">{rev.userName}</strong>
                      <span className="text-warning small fw-bold">
                        {[...Array(rev.rating)].map((_, i) => (
                          <FaStar key={i} className="me-0.5" />
                        ))}
                      </span>
                    </div>
                    <p className="text-muted small mb-3 italic">"{rev.comment}"</p>
                  </div>
                  <div className="pt-2 border-top border-secondary-subtle d-flex justify-content-between align-items-center text-muted" style={{ fontSize: '0.75rem' }}>
                    <span>On: <strong className="text-dark">{rev.foodName}</strong></span>
                    <span>{new Date(rev.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted py-5">No customer reviews available.</div>
        )}
      </div>

      <style>{`
        .fade-in {
          animation: fadeIn 0.4s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Analytics;
