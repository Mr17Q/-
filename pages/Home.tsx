import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, PlaceholderImage, Tag, VideoModal } from '../components/UiComponents';
import { CATEGORIES, HEADLINE_NEWS, HOT_NEWS, TOPIC_NEWS, VIDEO_NEWS } from '../constants';
import { NewsItem, VideoItem } from '../types';

// Component for the Top "Hero" Section
const HeroSection: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left: Featured Headlines (40% width approx) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative group cursor-pointer overflow-hidden rounded-md">
            {/* Using a placeholder as requested for the gray bottom style, but for the Hero we want it to look like the design. 
                I'll use the placeholder component but styled. */}
             <div className="relative h-64 w-full bg-gray-800">
                <img 
                    src={HEADLINE_NEWS.imageUrl} 
                    alt="Featured" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('bg-gray-300', 'flex', 'items-center', 'justify-center');
                    }}
                />
                 {/* Fallback visual if image fails or for purely 'gray' requirements */}
                 <div className="absolute inset-0 hidden group-hover:flex items-center justify-center text-white/50">
                    <span className="sr-only">Image</span>
                 </div>
                 
                 {/* Badge */}
                 <div className="absolute top-0 left-0 bg-soe-red text-white text-xs px-3 py-1 rounded-br-lg font-bold">
                    重点新闻
                 </div>
             </div>
          </div>

          <div>
            <Link to={`/detail/${HEADLINE_NEWS.id}`} className="block group">
              <h1 className="text-xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-soe-red transition-colors">
                {HEADLINE_NEWS.title}
              </h1>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed text-justify line-clamp-3">
              {HEADLINE_NEWS.summary}
            </p>
            <div className="mt-3 flex justify-between items-center text-xs text-gray-400 border-t border-dashed pt-2">
                <span>{HEADLINE_NEWS.date}</span>
                <Link to={`/detail/${HEADLINE_NEWS.id}`} className="text-soe-red hover:underline">查看详情 &gt;</Link>
            </div>
          </div>
        </div>

        {/* Right: Hot News List (60% width approx) */}
        <div className="lg:col-span-3">
           <SectionHeader title="热点资讯" />
           <div className="space-y-5">
             {HOT_NEWS.map((item) => (
               <div key={item.id} className="group">
                 <Link to={`/detail/${item.id}`} className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                   <h3 className="text-[15px] font-medium text-gray-800 group-hover:text-soe-red truncate max-w-lg">
                     {item.title}
                   </h3>
                   <span className="text-xs text-soe-red sm:text-gray-400 shrink-0 group-hover:text-soe-red transition-colors">
                     {item.date}
                   </span>
                 </Link>
                 <p className="text-xs text-gray-500 mt-1 line-clamp-1 group-hover:text-gray-600">
                   {item.summary}
                 </p>
                 <div className="h-px bg-gray-100 mt-3 group-last:hidden"></div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

// Define colors for random tag backgrounds
const TAG_COLORS = [
  'bg-blue-50 text-blue-600 hover:bg-blue-100',
  'bg-green-50 text-green-700 hover:bg-green-100',
  'bg-orange-50 text-orange-700 hover:bg-orange-100',
  'bg-purple-50 text-purple-700 hover:bg-purple-100',
  'bg-teal-50 text-teal-700 hover:bg-teal-100',
  'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
  'bg-rose-50 text-rose-700 hover:bg-rose-100',
];

const getTagColor = (id: string) => {
  // Simple hash to get consistent color for same ID
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % TAG_COLORS.length;
  return TAG_COLORS[index];
};

// Component for the Middle "Topics" Section
const TopicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [displayedNews, setDisplayedNews] = useState<NewsItem[]>([]);

  // Simulate filtering/API call
  useEffect(() => {
    // In a real app, this would be an API fetch based on activeTab
    // For now, we rotate or filter local constants
    if (activeTab === 'all') {
      setDisplayedNews(TOPIC_NEWS);
    } else {
      // Just shuffling or repeating for demo purposes since we have limited mock data
      const filtered = TOPIC_NEWS.map(item => ({
        ...item, 
        id: item.id + activeTab, // unique key
        tag: CATEGORIES.find(c => c.id === activeTab)?.label || item.tag
      }));
      setDisplayedNews(filtered);
    }
  }, [activeTab]);

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-xl font-bold text-soe-red">国资监管专题资讯</h2>
        <Link to="/list" className="text-sm text-gray-500 hover:text-soe-red transition-colors mb-1">更多 &gt;&gt;</Link>
      </div>
        
      {/* Scrollable Tabs */}
      <div className="w-full overflow-x-auto pb-2 mb-4 scrollbar-hide">
          <div className="flex space-x-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  px-3 py-1.5 text-xs sm:text-sm rounded-full transition-all whitespace-nowrap
                  ${activeTab === cat.id 
                    ? 'bg-soe-red text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedNews.map((item) => (
          <Link 
            to={`/detail/${item.id}`} 
            key={item.id} 
            className="border border-gray-100 p-4 rounded-md hover:shadow-md transition-shadow bg-white flex flex-col h-full group block"
          >
            <div className="mb-3">
               <h3 className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug min-h-[2.5em] mb-2 group-hover:text-soe-red transition-colors">
                 {item.title}
               </h3>
               <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed h-9">
                 {item.summary}
               </p>
            </div>
            <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-50">
               <span className="text-xs text-gray-400">{item.date}</span>
               {item.tag && (
                 <span 
                   className={`text-xs px-2 py-0.5 rounded transition-colors ${getTagColor(item.id)}`}
                 >
                   {item.tag}
                 </span>
               )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

// Component for the Bottom "Video/Construction" Section
const ConstructionSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <SectionHeader title="国资监管信息化建设工作" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VIDEO_NEWS.map((video) => (
          <div key={video.id} className="group cursor-pointer" onClick={() => setSelectedVideo(video)}>
            {/* Video Placeholder with Duration Overlay */}
            <div className="relative overflow-hidden rounded-md mb-3">
               <PlaceholderImage height="h-40" text="视频预览" className="group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded">
                 {video.duration}
               </div>
               {/* Play Icon Overlay */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                 <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg">
                   <svg className="w-4 h-4 text-soe-red" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
               </div>
            </div>

            <h3 className="text-sm font-medium text-gray-800 line-clamp-1 group-hover:text-soe-red transition-colors mb-1">
              {video.title}
            </h3>
            <p className="text-xs text-gray-400 flex gap-2">
              <span>发布日期: {video.date}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <HeroSection />
      <TopicsSection />
      <ConstructionSection />
    </div>
  );
};