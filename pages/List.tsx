import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOT_NEWS, TOPIC_NEWS } from '../constants';

export const List: React.FC = () => {
  // Generate sufficient mock data for pagination (approx 32 items)
  const baseNews = [...HOT_NEWS, ...TOPIC_NEWS];
  const allNews = [
    ...baseNews,
    ...baseNews.map(i => ({...i, id: i.id + '_p2'})),
    ...baseNews.map(i => ({...i, id: i.id + '_p3'})),
    ...baseNews.map(i => ({...i, id: i.id + '_p4'})),
  ];

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(allNews.length / itemsPerPage);

  // Get current page items
  const currentItems = allNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 min-h-[600px] animate-fade-in">
      <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
        <h1 className="text-2xl font-bold text-soe-red">资讯列表</h1>
        <div className="text-sm text-gray-500">
            当前位置：<Link to="/" className="hover:text-soe-red">首页</Link> &gt; 列表页
        </div>
      </div>

      <div className="space-y-4">
        {currentItems.map((item) => (
          <div key={item.id} className="group border-b border-gray-50 pb-4 last:border-0">
            {/* Pass state={{ from: '/list' }} to tell Detail page where we came from */}
            <Link 
              to={`/detail/${item.id.split('_')[0]}`} 
              state={{ from: '/list' }}
              className="flex flex-col sm:flex-row justify-between sm:items-center gap-2"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full shrink-0 group-hover:bg-soe-red transition-colors"></span>
                <h3 className="text-base text-gray-800 group-hover:text-soe-red transition-colors truncate">
                  {item.title}
                </h3>
                {item.tag && (
                    <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded hidden md:inline-block">
                        {item.tag}
                    </span>
                )}
              </div>
              <span className="text-sm text-gray-400 shrink-0 font-mono">
                {item.date}
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* Functional Pagination UI */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-200 rounded text-gray-500 hover:text-soe-red hover:border-soe-red bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            上一页
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 border rounded text-sm transition-colors ${
                currentPage === page 
                  ? 'border-soe-red bg-soe-red text-white' 
                  : 'border-gray-200 text-gray-500 hover:text-soe-red hover:border-soe-red bg-white'
              }`}
            >
              {page}
            </button>
          ))}

          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-200 rounded text-gray-500 hover:text-soe-red hover:border-soe-red bg-white text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            下一页
          </button>
        </div>
      )}
    </div>
  );
};