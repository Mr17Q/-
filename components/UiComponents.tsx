import React from 'react';
import { Link } from 'react-router-dom';
import { VideoItem } from '../types';

// Section Header with Red Icon and "More" link
export const SectionHeader: React.FC<{ title: string; link?: string }> = ({ title, link = "/list" }) => (
  <div className="flex justify-between items-end border-b-2 border-gray-100 pb-2 mb-4">
    <h2 className="text-xl font-bold text-soe-red flex items-center gap-2">
      <span className="block w-1.5 h-6 bg-soe-red rounded-sm"></span>
      {title}
    </h2>
    <Link to={link} className="text-sm text-gray-500 hover:text-soe-red transition-colors mb-1">
      更多 &gt;&gt;
    </Link>
  </div>
);

// Gray Placeholder for Images/Video
export const PlaceholderImage: React.FC<{ height?: string; text?: string; className?: string }> = ({ 
  height = "h-48", 
  text = "图片占位",
  className = ""
}) => (
  <div className={`${height} w-full bg-gray-200 flex flex-col items-center justify-center text-gray-400 ${className} relative overflow-hidden group`}>
    <svg className="w-12 h-12 mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <span className="text-sm font-medium">{text}</span>
    {/* Shine effect */}
    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shimmer_1s_infinite]"></div>
  </div>
);

export const Tag: React.FC<{ text: string }> = ({ text }) => (
  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
    {text}
  </span>
);

// Video Player Modal
export const VideoModal: React.FC<{ video: VideoItem | null; onClose: () => void }> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-black w-full max-w-4xl aspect-video relative shadow-2xl rounded-lg overflow-hidden border border-gray-700" 
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-20 transition-all"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Content Area */}
        <div className="w-full h-full flex flex-col items-center justify-center text-white bg-gray-900 relative">
          {/* Simulated Video Player UI */}
          <div className="text-center z-10">
            <div className="w-20 h-20 border-4 border-white/20 border-t-soe-red rounded-full animate-spin mx-auto mb-6"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">{video.title}</h3>
            <p className="text-gray-400 text-sm">正在模拟播放视频资源...</p>
          </div>
          
          {/* Simulated Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-center px-4 gap-4">
            <div className="text-white hover:text-soe-red cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div className="flex-1 h-1 bg-gray-600 rounded overflow-hidden">
               <div className="w-1/3 h-full bg-soe-red"></div>
            </div>
            <div className="text-xs text-gray-300">03:12 / {video.duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
};