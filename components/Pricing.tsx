import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-background-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <span className="text-accent font-bold uppercase tracking-widest text-xs">CHI PHÍ</span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-primary dark:text-white">Giải Pháp Chi Phí Linh Hoạt</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Lựa chọn gói dịch vụ phù hợp nhất với quy mô và nhu cầu của doanh nghiệp bạn.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col">
            <div className="bg-primary p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">CÁ NHÂN</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Bắt đầu với</p>
                <div className="flex items-baseline justify-center text-primary dark:text-white">
                  <span className="text-3xl font-extrabold">22.000.000</span>
                  <span className="text-sm font-medium ml-1">VNĐ</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-300 flex-1">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-base">check</span>
                  <span>Tư vấn thủ tục HQ cơ bản</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-base">check</span>
                  <span>1 Mã vận đơn</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-base">check</span>
                  <span>Hỗ trợ 24/7 qua Email</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <span className="material-symbols-outlined text-slate-300 text-base">close</span>
                  <span>Báo cáo thị trường</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-accent hover:bg-yellow-400 text-primary font-bold rounded-lg transition-colors shadow-md">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </div>
          
          {/* Plan 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 transform md:-translate-y-4 border-2 border-accent flex flex-col relative">
            <div className="absolute top-0 inset-x-0 h-1 bg-accent"></div>
            <div className="bg-accent p-6 text-center">
              <h3 className="font-display font-bold text-xl text-primary uppercase tracking-wider">TIÊU CHUẨN</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Phổ biến nhất</p>
                <div className="flex items-baseline justify-center text-primary dark:text-white">
                  <span className="text-4xl font-extrabold">154.000.000</span>
                  <span className="text-sm font-medium ml-1">VNĐ</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-300 flex-1">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-base">check</span>
                  <span className="font-medium">Tất cả tính năng gói Cá Nhân</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-base">check</span>
                  <span>Ủy thác xuất nhập khẩu trọn gói</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-base">check</span>
                  <span>5 Mã vận đơn / tháng</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-base">check</span>
                  <span>Hỗ trợ ưu tiên 24/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-base">check</span>
                  <span>Kho bãi lưu trữ 15 ngày</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-lg transition-colors shadow-lg">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </div>
          
          {/* Plan 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col">
            <div className="bg-primary p-6 text-center relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-10 -mb-10"></div>
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">CAO CẤP</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Doanh nghiệp lớn</p>
                <div className="flex items-baseline justify-center text-primary dark:text-white">
                  <span className="text-3xl font-extrabold">352.000.000</span>
                  <span className="text-sm font-medium ml-1">VNĐ</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-600 dark:text-slate-300 flex-1">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-base">check</span>
                  <span><strong>Full</strong> dịch vụ Logistics & XTTM</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-base">check</span>
                  <span>Không giới hạn mã vận đơn</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-base">check</span>
                  <span>Chuyên viên tư vấn riêng 1:1</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-base">check</span>
                  <span>Báo cáo thị trường chuyên sâu</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-base">check</span>
                  <span>Kho bãi lưu trữ 30 ngày</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-accent hover:bg-yellow-400 text-primary font-bold rounded-lg transition-colors shadow-md">
                ĐĂNG KÝ NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;