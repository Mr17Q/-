import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => (
  <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <Link to="/" className="flex items-center gap-3">
           <div className="w-10 h-10 bg-soe-red rounded flex items-center justify-center text-white font-bold text-xl">
             央
           </div>
           <div className="flex flex-col">
             <span className="text-2xl font-bold text-gray-900 tracking-wide">中国大唐集团有限公司</span>
             <span className="text-xs text-gray-500 uppercase tracking-widest">China Datang Corporation Ltd.</span>
           </div>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {['首页', '新闻中心', '信息公开', '关于我们'].map((item) => (
            <a key={item} href="#" className="text-gray-700 hover:text-soe-red px-3 py-2 text-sm font-medium transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
    <div className="h-1 bg-soe-red w-full"></div>
  </header>
);

export const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white mt-12 py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="mb-2">版权所有 © 中国大唐集团有限公司 | 京ICP备00000001号</p>
      <p className="text-gray-400 text-sm">地址：北京市西城区 | 邮编：100033</p>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {children}
    </main>
    <Footer />
  </div>
);