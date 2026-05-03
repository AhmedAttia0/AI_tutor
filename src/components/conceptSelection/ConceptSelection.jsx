import { useState } from "react";
import {LuSearch, LuChevronRight, LuX } from "react-icons/lu";
import pdf from "../../assets/pdf.png";
import { CgMaximize, CgMinimize } from "react-icons/cg";
const ConceptSelection = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.tabs[1]?.id || data.tabs[0]?.id);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const currentTab = data.tabs.find((t) => t.id === activeTab);

  const filteredTabs = data.tabs.filter((tab) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const defMatch = tab.content?.definition?.text?.toLowerCase().includes(q) || tab.content?.definition?.title?.toLowerCase().includes(q);
    const exMatch = tab.content?.example?.text?.toLowerCase().includes(q) || tab.content?.example?.title?.toLowerCase().includes(q);
    const mistMatch = tab.content?.mistakes?.text?.toLowerCase().includes(q) || tab.content?.mistakes?.title?.toLowerCase().includes(q);
    
    return (
      tab.title.toLowerCase().includes(q) ||
      tab.subtitle.toLowerCase().includes(q) ||
      defMatch || exMatch || mistMatch
    );
  });

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 ${isMaximized ? "fixed inset-4 z-50 overflow-y-auto" : ""}`}>
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2  rounded-lg self-center">
            <img src={pdf} alt="pdf" className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight">{data.title}</h2>
            <p className="text-blue-100 text-xs">{data.subtitle}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {isSearchOpen && (
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search concepts..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-3 pr-8 py-1.5 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-white border-none w-48 transition-all"
                autoFocus
              />
              <button 
                onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <LuX className="w-4 h-4" />
              </button>
            </div>
          )}
          {!isSearchOpen && (
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <LuSearch className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            {isMaximized ? <CgMinimize className="w-4 h-4" /> : <CgMaximize  className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-5">
          <span>{data.chapter}</span>
          <LuChevronRight className="w-4 h-4" />
          <span>{data.section}</span>
          <LuChevronRight className="w-4 h-4" />
          <span className="text-blue-600 font-medium">{data.topic}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {filteredTabs.length > 0 ? filteredTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-left p-3 rounded-lg border transition-all ${
                activeTab === tab.id
                  ? "border-blue-500 bg-blue-50/30 ring-1 ring-blue-500"
                  : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`font-semibold text-sm ${activeTab === tab.id ? "text-blue-700" : "text-slate-700"}`}>
                  {tab.title}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${tab.badgeColor}`}>
                  {tab.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500">{tab.subtitle}</p>
            </button>
          )) : (
            <div className="col-span-full py-4 text-center text-sm text-slate-500">
              No concepts found matching "{searchQuery}"
            </div>
          )}
        </div>

        {currentTab && currentTab.content && (
          <div className="flex flex-col gap-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100/50 border-dashed">
            {currentTab.content.definition && (
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">{currentTab.content.definition.title}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {currentTab.content.definition.text}
                  <br />
                  <span className="font-bold text-slate-800"> {currentTab.content.definition.formula}</span>
                </p>
                <div className="flex gap-2">
                  <span className={`${currentTab.content.definition.difficultyColor} text-xs font-semibold px-2.5 py-1 rounded`}>{currentTab.content.definition.difficulty}</span>
                  <span className={`${currentTab.content.definition.tagColor} text-xs font-semibold px-2.5 py-1 rounded`}>{currentTab.content.definition.tag}</span>
                </div>
              </div>
            )}

            {currentTab.content.example && (
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">{currentTab.content.example.title}</h3>
                <p className="text-sm text-slate-600 mb-3">
                  {currentTab.content.example.text}
                </p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm font-mono text-slate-800 mb-4">
                  {currentTab.content.example.formula}
                </div>
                <div className="flex gap-2">
                  <span className={`${currentTab.content.example.difficultyColor} text-xs font-semibold px-2.5 py-1 rounded`}>{currentTab.content.example.difficulty}</span>
                  <span className={`${currentTab.content.example.tagColor} text-xs font-semibold px-2.5 py-1 rounded`}>{currentTab.content.example.tag}</span>
                </div>
              </div>
            )}

            {currentTab.content.mistakes && (
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">{currentTab.content.mistakes.title}</h3>
                <p className="text-sm text-slate-600 mb-4">
                  {currentTab.content.mistakes.text}
                </p>
                <div className="flex gap-2">
                  <span className={`${currentTab.content.mistakes.difficultyColor} text-xs font-semibold px-2.5 py-1 rounded`}>{currentTab.content.mistakes.difficulty}</span>
                  <span className={`${currentTab.content.mistakes.tagColor} text-xs font-semibold px-2.5 py-1 rounded`}>{currentTab.content.mistakes.tag}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConceptSelection;
