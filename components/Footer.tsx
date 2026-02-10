import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-black text-white relative mt-32">
      <div className="container mx-auto px-6 relative z-20">
        <div className="bg-white dark:bg-slate-800 rounded-3xl footer-contact-card overflow-hidden -mt-48 mb-16 flex flex-col lg:flex-row">
          <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-0">
            <img alt="Contact us" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoasbqORdU0_fbz-IgRENX44_OEM0smVdamN4yivYR7iD21jTQgh_tllHKY2JpFI36WRKPI8BZL1ojqXYM1ows9gBbcFR6ajqhZ2F4TfEzNC2SV2ZKjACFM4rG-ptK4B9lpTF7mTb8iNp9-A0Xr7phFyAx6CXtMoH5CqC2LPJP_5iHxhkBGKj7O1Fj7D20IuoeKKEGJldWAK9_v0oaUcSoRYTbYzmsGqHVR2kGWg7BRVt5ZNcLHr78J_VfIDNghiy8n7EJCp0obZ3O" />
          </div>
          <div className="lg:w-7/12 bg-accent p-8 lg:p-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-purple-600"></span>
              <span className="text-primary font-bold text-sm">Liên Hệ</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-8">Hãy gửi suy nghĩ.</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input className="w-full bg-accent/50 border-b border-primary/20 focus:border-primary px-0 py-3 text-primary placeholder-primary/60 focus:ring-0 transition-colors" placeholder="Tên" type="text" />
                <input className="w-full bg-accent/50 border-b border-primary/20 focus:border-primary px-0 py-3 text-primary placeholder-primary/60 focus:ring-0 transition-colors" placeholder="Email" type="email" />
              </div>
              <textarea className="w-full bg-accent/50 border-b border-primary/20 focus:border-primary px-0 py-3 text-primary placeholder-primary/60 focus:ring-0 transition-colors h-24 resize-none" placeholder="Nội dung"></textarea>
              <div className="pt-4">
                <button className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">
                  Gửi Tin Nhắn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pb-8 pt-4">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-16 border-b border-white/10 pb-16">
          <div>
            <h4 className="font-bold mb-4 text-sm text-white/70">Số Điện Thoại</h4>
            <p className="font-display font-bold text-lg md:text-xl text-white">(+84) 123 456 789</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm text-white/70">Địa Chỉ</h4>
            <p className="font-medium text-white/90 text-sm leading-relaxed">
              Tầng 12, Tòa nhà Ruby Tower,<br />
              Quận 1, TP. Hồ Chí Minh
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm text-white/70">Email:</h4>
            <a className="font-medium text-white/90 hover:text-accent transition-colors" href="mailto:info@rubyvietnam.vn">info@rubyvietnam.vn</a>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm text-white/70">Mạng Xã Hội</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-white/90">
              <a className="hover:text-accent transition-colors" href="#">Facebook</a>
              <span className="text-white/30">-</span>
              <a className="hover:text-accent transition-colors" href="#">Youtube</a>
              <span className="text-white/30">-</span>
              <a className="hover:text-accent transition-colors" href="#">Instagram</a>
              <span className="text-white/30">-</span>
              <a className="hover:text-accent transition-colors" href="#">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-primary font-black italic">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-widest text-white uppercase">RuBY</span>
              <span className="text-[10px] tracking-[0.3em] font-medium text-white/60 uppercase">VIETNAM</span>
            </div>
          </div>
          <p className="text-xs text-white/50 font-medium">
            © Copyright 2024 | Thiết kế website bởi <span className="text-accent">RuBY Tech Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;