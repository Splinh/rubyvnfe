import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-black text-4xl text-slate-900 dark:text-white uppercase tracking-tight">Dịch vụ cốt lõi</h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Chúng tôi cung cấp hệ sinh thái giải pháp logistics toàn diện nhằm tối ưu hóa chi phí và thời gian cho doanh nghiệp của bạn.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <i className="material-icons text-3xl text-primary group-hover:text-accent">directions_boat</i>
            </div>
            <h3 className="font-display font-bold text-xl mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Vận Tải Đường Biển</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Kết nối các cảng biển lớn trên thế giới với lộ trình tối ưu và cước phí cạnh tranh nhất.</p>
            <a className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-light group-hover:gap-3 transition-all" href="#">
              Xem chi tiết <i className="material-icons">arrow_right_alt</i>
            </a>
          </div>
          
          <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
              <i className="material-icons text-3xl text-accent group-hover:text-primary">airplanemode_active</i>
            </div>
            <h3 className="font-display font-bold text-xl mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Vận Tải Hàng Không</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Giải pháp giao hàng thần tốc cho những đơn hàng cần sự chính xác tuyệt đối về thời gian.</p>
            <a className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-light group-hover:gap-3 transition-all" href="#">
              Xem chi tiết <i className="material-icons">arrow_right_alt</i>
            </a>
          </div>
          
          <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <i className="material-icons text-3xl text-primary group-hover:text-accent">handshake</i>
            </div>
            <h3 className="font-display font-bold text-xl mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Xúc Tiến Thương Mại</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Cầu nối giúp doanh nghiệp Việt vươn tầm quốc tế thông qua các chương trình xúc tiến quy mô.</p>
            <a className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-light group-hover:gap-3 transition-all" href="#">
              Xem chi tiết <i className="material-icons">arrow_right_alt</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;