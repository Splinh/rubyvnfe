import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900/50 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 organic-shape shadow-2xl shadow-primary/20 border-8 border-white dark:border-slate-800">
              <img alt="Professional Logistics Expert" className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdMafMrJLthOei2zfa3clGV_BR8DdkuGXjm4rAByvW6BXocQ1DJ28jEvYMohCXoY1NgoPV-UycGY1CWcN6jPtfqZLkEIhEF621GWT3QLAFpddISkg5d90b67JgDs9PDkZWFaSA_OfkOI8ofPfrdxZ56KebD1k-89h1kxsYnByOnDXnDudyk40WKrzb6jH_moE1n3PEbHRlg7ghaSo3hxIA8jf7tSgTKOr7abfe38UemeJnX9u-yxtEs8Fw6SYQwcJBydBd2xvCvl4R" />
            </div>
            <div className="absolute top-10 -right-6 md:-right-12 z-20 animate-bounce delay-100">
              <div className="bg-accent text-primary px-6 py-4 rounded-xl shadow-lg flex flex-col items-center justify-center min-w-[140px] transform rotate-3">
                <span className="text-3xl font-black">99%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-center">Khách hàng<br />Hài lòng</span>
              </div>
            </div>
            <div className="absolute -bottom-6 left-10 z-20">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg text-white transform -rotate-6">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-accent rounded-full"></div>
              <span className="text-accent font-bold uppercase tracking-wider text-sm">VỀ CHÚNG TÔI</span>
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-primary dark:text-white leading-tight">
              Tại sao chọn <br /><span className="text-accent">RuBY Việt Nam?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Sự lựa chọn tốt nhất cho doanh nghiệp thành công của bạn! Với kinh nghiệm dày dặn trong ngành logistics và xúc tiến thương mại, chúng tôi cam kết mang đến giải pháp tối ưu nhất.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-primary dark:text-white">Mạng lưới toàn cầu</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Kết nối với hơn 200 quốc gia và vùng lãnh thổ.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-primary dark:text-white">Chi phí tối ưu</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Giải pháp tiết kiệm chi phí vận hành cho doanh nghiệp.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-primary dark:text-white">Hỗ trợ 24/7</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Đội ngũ chuyên viên sẵn sàng hỗ trợ mọi lúc mọi nơi.</p>
                </div>
              </li>
            </ul>
            <button className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;