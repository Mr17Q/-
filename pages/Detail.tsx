import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { PlaceholderImage } from '../components/UiComponents';
import { HEADLINE_NEWS, HOT_NEWS, TOPIC_NEWS } from '../constants';

export const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  
  // Check if we navigated from the list page
  const fromList = location.state?.from === '/list';
  const backLink = fromList ? '/list' : '/';
  const backText = fromList ? '返回列表' : '返回首页';
  
  // Flatten mock data to find the item
  const allItems = [HEADLINE_NEWS, ...HOT_NEWS, ...TOPIC_NEWS];
  const item = allItems.find(i => i.id === id);

  if (!item) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">文章未找到</h2>
        <Link to="/" className="text-soe-red mt-4 inline-block">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-4xl mx-auto animate-fade-in">
      <div className="border-b border-gray-200 pb-6 mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{item.title}</h1>
        <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
           <span>发布时间：{item.date}</span>
           <span>来源：集团公司新闻中心</span>
           <span>分类：{item.category}</span>
        </div>
      </div>

      <div className="prose prose-red max-w-none text-gray-700">
        {/* Simulating content body */}
        <div className="bg-gray-50 p-4 border-l-4 border-soe-red mb-6 text-gray-600 italic">
          {item.summary || "摘要：本文主要介绍了集团公司在相关领域的重要进展和战略部署。"}
        </div>
        
        <p className="mb-4 leading-7">
          （本网讯）{item.date}，{item.title}。会议指出，要深入贯彻落实党中央决策部署，坚持稳中求进工作总基调，完整、准确、全面贯彻新发展理念。
        </p>
        
        <div className="my-8">
           <PlaceholderImage height="h-64" text="新闻配图区域" />
           <p className="text-center text-xs text-gray-400 mt-2">图：会议现场 / 项目实景</p>
        </div>

        <p className="mb-4 leading-7">
          会议强调，要进一步提高政治站位，强化责任担当。各部门、各单位要紧紧围绕年度目标任务，狠抓工作落实。要突出重点，抓住关键，在深化改革、科技创新、绿色发展等方面取得新突破。
        </p>
        
        <p className="leading-7">
           下一步，集团公司将继续加大工作力度，完善工作机制，确保各项任务落到实处，为推动高质量发展作出新的更大贡献。
        </p>
      </div>
      
      <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between">
         <Link 
            to={backLink} 
            className="px-4 py-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
         >
            &larr; {backText}
         </Link>
         <button className="px-4 py-2 bg-soe-red text-white rounded hover:opacity-90 transition-opacity">
            打印本文
         </button>
      </div>
    </div>
  );
};