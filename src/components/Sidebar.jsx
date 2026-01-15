import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Mail, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar({ activeSection, isCollapsed, setIsCollapsed }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Desktop Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden md:flex fixed top-4 z-50 items-center justify-center w-9 h-9 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
        style={{ left: isCollapsed ? '68px' : '244px' }}
      >
        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-black bg-opacity-20 z-30 backdrop-blur-sm"
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-white shadow-sm transition-all duration-300 z-40 ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } ${isCollapsed ? 'md:w-20' : 'w-64'}`}>
        <div className="h-full flex flex-col py-6">
          {/* Logo/Brand */}
          {/* <div className={`px-6 mb-8 ${isCollapsed ? 'flex justify-center px-0' : ''}`}>
            <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex-shrink-0"></div>
              {!isCollapsed && <span className="font-semibold text-lg text-gray-800">Portfolio</span>}
            </div>
          </div> */}

          {/* Navigation */}
          <nav className={`flex-1 space-y-1 ${isCollapsed ? 'px-3' : 'px-4'}`}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                  title={isCollapsed ? item.label : ''}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Footer - Optional User Section */}
          {!isCollapsed && (
            <div className="px-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">Nara Dev</p>
                  <p className="text-xs text-gray-500 truncate">nara@example.com</p>
                </div>
              </div>
            </div>
          )}

          {isCollapsed && (
            <div className="px-3 pt-4 border-t border-gray-100 flex justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full"></div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}