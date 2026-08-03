import React from 'react';

// Common Skeleton Shimmer Box Component
export const SkeletonBox = ({ width = '100%', height = '20px', className = '' }) => (
  <div
    className={`skeleton-box rounded ${className}`}
    style={{ width, height }}
  />
);

// Skeleton for the Dashboard Metrics cards
export const StatsSkeleton = ({ cards = 4 }) => {
  return (
    <div className="row g-4 mb-4">
      {[...Array(cards)].map((_, idx) => (
        <div key={idx} className="col-md-6 col-xl-3">
          <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div className="flex-grow-1">
                <SkeletonBox width="60%" height="14px" className="mb-2" />
                <SkeletonBox width="40%" height="28px" />
              </div>
              <SkeletonBox width="48px" height="48px" className="rounded-4 ms-3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Skeleton for the Tables (Foods, Orders, Customers)
export const TableSkeleton = ({ rows = 5, cols = 6 }) => {
  return (
    <div className="card border-0 rounded-4 shadow-sm bg-white p-4 w-100">
      {/* Table search bar skeleton */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <SkeletonBox width="280px" height="38px" className="rounded-3" />
        <SkeletonBox width="100px" height="20px" />
      </div>

      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead>
            <tr>
              {[...Array(cols)].map((_, idx) => (
                <th key={idx}>
                  <SkeletonBox width="70%" height="16px" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(rows)].map((_, rIdx) => (
              <tr key={rIdx}>
                {[...Array(cols)].map((_, cIdx) => (
                  <td key={cIdx}>
                    {cIdx === 0 ? (
                      <div className="d-flex align-items-center gap-2">
                        {/* Image or avatar skeleton */}
                        <SkeletonBox width="48px" height="40px" className="rounded-3" />
                        <SkeletonBox width="100px" height="16px" className="d-none d-sm-block" />
                      </div>
                    ) : (
                      <SkeletonBox width={cIdx === cols - 1 ? '50%' : '80%'} height="16px" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination skeleton */}
      <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
        <SkeletonBox width="200px" height="16px" />
        <SkeletonBox width="180px" height="32px" className="rounded-3" />
      </div>
    </div>
  );
};

// Skeleton for Category progress list on the Dashboard
export const CategoryListSkeleton = ({ items = 5 }) => {
  return (
    <div className="card border-0 rounded-4 shadow-sm bg-white p-4 h-100">
      <SkeletonBox width="50%" height="20px" className="mb-4" />
      <div className="d-flex flex-column gap-3">
        {[...Array(items)].map((_, idx) => (
          <div key={idx}>
            <div className="d-flex justify-content-between mb-1">
              <SkeletonBox width="30%" height="14px" />
              <SkeletonBox width="20%" height="14px" />
            </div>
            <SkeletonBox width="100%" height="8px" className="rounded-pill" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Skeleton for Customer Reviews cards
export const ReviewListSkeleton = ({ items = 3 }) => {
  return (
    <div className="card border-0 rounded-4 shadow-sm bg-white p-4">
      <SkeletonBox width="200px" height="20px" className="mb-4" />
      <div className="row g-3">
        {[...Array(items)].map((_, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="p-3 bg-light rounded-4 border h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <SkeletonBox width="40%" height="14px" />
                  <SkeletonBox width="30%" height="14px" />
                </div>
                <SkeletonBox width="100%" height="14px" className="mb-2" />
                <SkeletonBox width="85%" height="14px" className="mb-3" />
              </div>
              <div className="pt-2 border-top d-flex justify-content-between">
                <SkeletonBox width="45%" height="12px" />
                <SkeletonBox width="25%" height="12px" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Dashboard Layout Skeleton
export const DashboardSkeleton = () => {
  return (
    <div className="slide-up">
      {/* 4 Cards */}
      <StatsSkeleton cards={4} />

      {/* Main Grid */}
      <div className="row g-4">
        {/* Table skeleton */}
        <div className="col-xl-8">
          <TableSkeleton rows={5} cols={6} />
        </div>
        {/* Category list skeleton */}
        <div className="col-xl-4">
          <CategoryListSkeleton items={5} />
        </div>
      </div>
    </div>
  );
};
