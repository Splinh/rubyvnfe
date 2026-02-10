import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-10 h-1 bg-accent rounded-full"></span>
              <span className="text-accent font-bold uppercase tracking-wider text-sm">QUY TRÌNH & SỨ MỆNH</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-primary dark:text-white leading-tight">Sứ Mệnh & Quy Trình Chuyên Nghiệp</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Chúng tôi không chỉ vận chuyển hàng hóa, chúng tôi vận chuyển niềm tin và kiến tạo giá trị bền vững cho doanh nghiệp Việt trên toàn cầu thông qua quy trình chuẩn hóa quốc tế.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 border-2 border-accent/20 flex items-center justify-center font-display font-black text-2xl text-accent group-hover:bg-accent group-hover:text-primary transition-all">01</div>
                <div>
                  <h4 className="font-bold text-xl text-primary dark:text-white">Tư vấn giải pháp</h4>
                  <p className="text-slate-500 dark:text-slate-400">Nghiên cứu thị trường và đề xuất phương án tối ưu nhất.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 border-2 border-accent/20 flex items-center justify-center font-display font-black text-2xl text-accent group-hover:bg-accent group-hover:text-primary transition-all">02</div>
                <div>
                  <h4 className="font-bold text-xl text-primary dark:text-white">Tối ưu chi phí</h4>
                  <p className="text-slate-500 dark:text-slate-400">Cân đối ngân sách và lựa chọn tuyến đường vận tải hiệu quả.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 border-2 border-accent/20 flex items-center justify-center font-display font-black text-2xl text-accent group-hover:bg-accent group-hover:text-primary transition-all">03</div>
                <div>
                  <h4 className="font-bold text-xl text-primary dark:text-white">Vận hành & Giám sát</h4>
                  <p className="text-slate-500 dark:text-slate-400">Theo dõi lộ trình 24/7 và hỗ trợ cập nhật thông tin tức thời.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative px-4">
            <div className="blob-shape w-full aspect-[4/5] max-w-[500px] mx-auto overflow-hidden shadow-2xl relative z-10">
              <img alt="Our Team" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2NG3p4OH8r1qEOrGIaAs95z9AlJEdN3BFgTSiRUuXRgKomc_fFXeFSDkPBvD8o0WeAeHBEFQmpo7SKMD4xF1QuEWvPRFFHq-DZrppoFv0pVEPi5pcSWP8uS2Pnfnq1ZdbqoIbQNoiOw6mgQ7tBeRBUTeeb1OXuI8cmABGU9HBOPQmLjwneQzxEpDVH3_83hIkM2GJWeh9_GQodt_XA5pf8Vn9RJN5OU6bUuLEWHRcmpRH5EEERIPDhKVQ0E8wwrO7vXwlT8Ylh91R" />
            </div>
            <div className="absolute -top-6 left-0 z-20 bg-primary p-6 rounded-2xl shadow-xl text-white transform -rotate-3 hover:rotate-0 transition-transform w-48 text-center">
              <div className="text-3xl font-black mb-1">+15</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">Năm kinh nghiệm</div>
            </div>
            <div className="absolute bottom-10 -left-4 z-20 bg-accent p-6 rounded-2xl shadow-xl text-primary transform rotate-6 hover:rotate-0 transition-transform w-52 text-center">
              <div className="text-3xl font-black mb-1">+500</div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary/80">Dự án hoàn thành</div>
            </div>
            <div className="absolute bottom-20 -right-4 z-20 bg-primary p-6 rounded-2xl shadow-xl text-white transform -rotate-6 hover:rotate-0 transition-transform w-44 text-center">
              <div className="text-3xl font-black mb-1">99%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">Hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;