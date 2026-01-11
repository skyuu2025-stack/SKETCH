
import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Palette, 
  PenTool, 
  Users, 
  MessageCircle,
  Sparkles,
  Home,
  Menu,
  X,
  ClipboardList,
  Wrench,
  Image as ImageIcon,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { LESSONS } from './constants';
import { Lesson, ChatMessage } from './types';

// Components
const SidebarItem: React.FC<{ 
  lesson: Lesson; 
  isActive: boolean; 
  onClick: () => void 
}> = ({ lesson, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center p-3 mb-2 rounded-xl transition-all ${
      isActive 
      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
      : 'hover:bg-indigo-50 text-gray-600'
    }`}
  >
    <span className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 text-sm font-bold shrink-0 ${
      isActive ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-500'
    }`}>
      {lesson.id}
    </span>
    <div className="text-left overflow-hidden">
      <p className="text-sm font-semibold truncate">{lesson.title}</p>
      <p className={`text-xs truncate ${isActive ? 'text-indigo-100' : 'text-gray-400'}`}>
        {lesson.category}
      </p>
    </div>
  </button>
);

const App: React.FC = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const currentLesson = LESSONS[currentLessonIndex];

  // AI Guidance Suggestions based on category
  const getSuggestions = (category: string) => {
    switch (category) {
      case '基础': return ['如何练习线条的稳定性？', '排线疏密不均怎么解决？', '马克笔不出水了怎么办？'];
      case '人体': return ['九头身比例总是找不准？', '动态重心如何确定？', '侧面人体怎么画更立体？'];
      case '款式': return ['款式图细节太多，如何取舍？', '明线和缝迹线怎么表达专业？', '领口结构怎么画对称？'];
      case '表现': return ['马克笔叠色总是脏脏的？', '丝绸面料的高光怎么留？', '皱褶的深浅层次怎么分？'];
      case '综合': return ['如何提升作品集的商业感？', '系列设计的色彩如何统一？', '这种风格适合什么背景？'];
      default: return ['如何画出真实的纹理？', '给点构图建议吧。'];
    }
  };

  const handleNext = () => {
    if (currentLessonIndex < LESSONS.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1);
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSendMessage = async (text?: string) => {
    const messageToSend = text || chatInput;
    if (!messageToSend.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: messageToSend };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsChatLoading(true);

    // If calling from suggestion, also scroll to chat area on mobile if needed
    if (window.innerWidth < 1280) {
       // Focus UI on the message
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `你是一名资深的服装设计教师。当前学生正在学习《${currentLesson.title}》。
        学生的问题是：${messageToSend}
        请用专业且富有鼓励性的语气回答，帮助学生更好地理解手绘效果图或款式图的技巧。如果学生问到具体的绘画方法，请拆解成步骤。`,
        config: {
          systemInstruction: "你是一个服装设计名师，精通马克笔、彩铅、面料表现、九头身比例和款式图绘制。你的回答应该专业、简洁且富有启发性。",
        }
      });
      
      const botMsg: ChatMessage = { role: 'model', text: response.text || "抱歉，我现在无法回答。" };
      setChatMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("AI Error:", error);
      setChatMessages(prev => [...prev, { role: 'model', text: "连接导师失败，请检查网络或稍后再试。" }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-2xl"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-100 flex flex-col 
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-50">
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <Palette size={20} />
            </div>
            <h1 className="font-bold text-xl tracking-tight">服装设计手绘课</h1>
          </div>
          <p className="text-xs text-gray-400 font-medium">10课时精品全流程指南</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {LESSONS.map((lesson, idx) => (
            <SidebarItem 
              key={lesson.id} 
              lesson={lesson} 
              isActive={currentLessonIndex === idx}
              onClick={() => {
                setCurrentLessonIndex(idx);
                if (window.innerWidth < 1024) setIsSidebarOpen(false);
              }}
            />
          ))}
        </nav>

        <div className="p-4 bg-gray-50 m-4 rounded-2xl">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2 font-medium">
            <span>学习进度</span>
            <span>{Math.round(((currentLessonIndex + 1) / LESSONS.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-indigo-600 h-full transition-all duration-500" 
              style={{ width: `${((currentLessonIndex + 1) / LESSONS.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-gray-50 bg-white sticky top-0 z-30">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Home size={14} />
            <span>/</span>
            <span className="text-indigo-600 font-medium">{currentLesson.category}</span>
            <span>/</span>
            <span className="font-medium text-gray-700">{currentLesson.title}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handlePrev}
              disabled={currentLessonIndex === 0}
              className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-bold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg">
              {currentLessonIndex + 1} / {LESSONS.length}
            </span>
            <button 
              onClick={handleNext}
              disabled={currentLessonIndex === LESSONS.length - 1}
              className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar">
          <div className="max-w-5xl mx-auto space-y-16">
            
            {/* Hero Section */}
            <section className="relative space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-md uppercase tracking-[0.2em]">
                  Module {currentLesson.id}
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-none">
                  {currentLesson.title}
                </h2>
                <p className="text-xl lg:text-2xl text-gray-400 font-light max-w-2xl">
                  {currentLesson.subtitle}
                </p>
              </div>
              
              <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-100 aspect-[21/9]">
                <img 
                  src={currentLesson.imageUrl} 
                  alt={currentLesson.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-medium opacity-80 mb-1">本课主视觉</p>
                  <h4 className="text-xl font-bold">{currentLesson.title}应用场景</h4>
                </div>
              </div>
            </section>

            {/* Grid Content */}
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left Column: Content & AI Entrance */}
              <div className="lg:col-span-8 space-y-12">
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center">
                    <span className="w-2 h-8 bg-indigo-600 rounded-full mr-4"></span>
                    核心教学内容
                  </h3>
                  <div className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap bg-indigo-50/20 p-8 lg:p-10 rounded-[2rem] border border-indigo-100/50">
                    {currentLesson.content}
                  </div>
                </section>

                {/* NEW: AI Drawing Assistant Entry Section */}
                <section className="relative p-10 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-[3rem] shadow-2xl overflow-hidden group">
                   <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-400/10 transition-colors duration-700"></div>
                   <div className="relative z-10 space-y-8">
                     <div className="flex items-center space-x-4">
                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                           <Sparkles className="text-indigo-200" size={28} />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold">AI 辅助绘画指导</h3>
                           <p className="text-indigo-200/60 text-sm">基于当前课时内容，为你提供专属建议</p>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <p className="text-sm font-semibold text-indigo-100 uppercase tracking-widest">你可以这样问老师：</p>
                        <div className="flex flex-wrap gap-3">
                           {getSuggestions(currentLesson.category).map((s, i) => (
                             <button 
                               key={i}
                               onClick={() => handleSendMessage(s)}
                               className="px-5 py-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl text-sm font-medium transition-all hover:scale-105 hover:border-white/30 flex items-center group/btn"
                             >
                               {s}
                               <ArrowRight size={14} className="ml-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                             </button>
                           ))}
                        </div>
                     </div>

                     <div className="pt-4">
                        <div className="relative group/input">
                           <input 
                              type="text"
                              value={chatInput}
                              onChange={(e) => setChatInput(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                              placeholder="描述你的绘图疑惑，例如：如何表现真丝的光泽？"
                              className="w-full bg-white/10 border border-white/10 rounded-[1.5rem] py-5 px-8 pr-16 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/15 focus:border-white/40 transition-all text-lg"
                           />
                           <button 
                              onClick={() => handleSendMessage()}
                              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white text-indigo-900 rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all"
                           >
                              <Lightbulb size={24} />
                           </button>
                        </div>
                     </div>
                   </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center">
                    <Wrench className="mr-3 text-indigo-600" size={24} />
                    准备工具与材料
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {currentLesson.materials.map((m, i) => (
                      <div key={i} className="px-5 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center space-x-2 text-gray-700 font-medium hover:border-indigo-300 transition-colors">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center">
                    <ImageIcon className="mr-3 text-indigo-600" size={24} />
                    参考画廊
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {currentLesson.gallery.map((img, i) => (
                      <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg aspect-square">
                        <img src={img} alt="Gallery item" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column: Key Points & Homework */}
              <div className="lg:col-span-4 space-y-10">
                <section className="bg-indigo-600 text-white rounded-[2rem] p-8 shadow-xl shadow-indigo-100 space-y-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Sparkles className="mr-3" size={22} />
                    要点笔记
                  </h3>
                  <ul className="space-y-4">
                    {currentLesson.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3 text-indigo-50 text-sm leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-300 rounded-full shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm space-y-6">
                  <div className="flex items-center space-x-3 text-indigo-600 mb-2">
                    <ClipboardList size={24} />
                    <h3 className="text-xl font-bold text-gray-900">课后作业</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {currentLesson.homework}
                  </p>
                  <div className="pt-4 border-t border-gray-50">
                    <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-colors">
                      上传我的练习
                    </button>
                  </div>
                </section>
                
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-[2rem] border border-indigo-100 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <PenTool className="text-indigo-600" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900">手绘小贴士</h4>
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    “画画的时候，不要只盯着你要画的对象，要尝试画出它带给你的‘感觉’。”
                  </p>
                </div>
              </div>

            </div>
          </div>
          {/* Footer margin */}
          <div className="h-32"></div>
        </div>
      </main>

      {/* AI Assistant Sidebar */}
      <aside className="hidden xl:flex w-80 bg-white border-l border-gray-100 flex-col shadow-2xl shadow-gray-200/50">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">导师实时咨询</p>
              <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                Online Now
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {chatMessages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
                <Users size={64} className="text-indigo-100 relative" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-gray-700">我是你的专属助教</p>
                <p className="text-xs text-gray-400 max-w-[180px] leading-relaxed">
                  对《{currentLesson.title}》有任何疑问？随时问我。
                </p>
              </div>
            </div>
          ) : (
            chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-3xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none shadow-lg shadow-indigo-100' 
                  : 'bg-gray-50 text-gray-700 rounded-bl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))
          )}
          {isChatLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-50 px-4 py-3 rounded-2xl animate-pulse flex space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-6 border-t border-gray-50">
          <div className="relative group">
            <textarea 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="输入你的问题..."
              className="w-full bg-gray-50 border border-transparent rounded-2xl py-4 px-5 pr-14 text-sm focus:outline-none focus:bg-white focus:border-indigo-600/20 focus:ring-4 focus:ring-indigo-600/5 transition-all resize-none min-h-[100px]"
            />
            <button 
              onClick={() => handleSendMessage()}
              disabled={isChatLoading || !chatInput.trim()}
              className="absolute bottom-4 right-4 p-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0 transition-all"
            >
              <Sparkles size={18} />
            </button>
          </div>
        </div>
      </aside>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #e2e8f0;
        }
      `}</style>
    </div>
  );
};

export default App;
