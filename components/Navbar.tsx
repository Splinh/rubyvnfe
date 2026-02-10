import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-slate-100 dark:bg-slate-900/50 py-2 hidden lg:block border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs font-medium text-slate-600 dark:text-slate-400">
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <i className="material-icons text-[14px]">phone</i> +84 123 456 789
            </span>
            <span className="flex items-center gap-1">
              <i className="material-icons text-[14px]">email</i> info@rubyvietnam.vn
            </span>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-primary transition-colors" href="#">Facebook</a>
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent font-black text-xl italic">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tighter text-primary dark:text-white">RuBY</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 -mt-1">Vietnam Logistics</span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a className="font-semibold text-primary dark:text-white hover:text-accent transition-colors" href="#">Trang Chủ</a>
            <a className="font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors" href="#">Dịch Vụ</a>
            <a className="font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors" href="#">Về Chúng Tôi</a>
            <a className="font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors" href="#">Tin Tức</a>
            <a className="font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors" href="#">Liên Hệ</a>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/20 border border-transparent hover:border-accent/30">
              NHẬN BÁO GIÁ
            </button>
            <button className="bg-primary text-white p-2 rounded-lg lg:hidden">
              <i className="material-icons">menu</i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;