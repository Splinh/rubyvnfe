import React from 'react';

const News: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 pb-48">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-bold uppercase tracking-widest text-xs">KẾT NỐI TRI THỨC</span>
          <h2 className="font-display font-black text-4xl text-primary dark:text-white uppercase tracking-tight">Tin Tức & Kiến Thức Ngành</h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300">
            <div className="h-56 overflow-hidden relative">
              <img alt="Logistics Trends" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFs3tzDy8xZxBNhg_-bgXeqZXhYT0K1-6qjJZ5SVvdjnWUeLZJoLH4hnSeTVfXkcr3qQUI2eBRSWGdCiZ-k0PvwbFa4cD4A35hipq6vbUP3jJBPFcCZFtkEfe-b_SdNG7D40wGzlVl5EytOWrjOK4gm5kPTiqG91cZ_vjLJ2hKGgTcmFDURzzN3WuazMZmPthB0czaNcyFIVzGG4n7TijmptQb6IpLNzgaB1tqRYqKVbthtKQp5JQ3PcwLYnEgc_p2zFOJyr_19Ic8" />
              <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-black uppercase px-3 py-1 rounded-full">Xu hướng</div>
            </div>
            <div className="p-8">
              <p className="text-xs font-bold text-accent mb-3">15/03/2024</p>
              <h3 className="font-display font-bold text-xl mb-4 text-primary dark:text-white leading-snug group-hover:text-accent transition-colors">Xu hướng Logistics 2024: Số hóa và Bền vững</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Khám phá cách trí tuệ nhân tạo và các giải pháp vận chuyển xanh đang thay đổi bộ mặt ngành vận tải toàn cầu.</p>
              <a className="inline-flex items-center gap-2 font-bold text-accent hover:text-primary dark:hover:text-white transition-all" href="#">
                Đọc thêm <i className="material-icons text-base">east</i>
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300">
            <div className="h-56 overflow-hidden relative">
              <img alt="EU Export" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYmbqn6qCLN2jLpgUMOellh-xjnikZpWRPsV0NBWMefgdTN3i66JeRkKgA7JOvtQDhrEuQaHcyC4Xg7GBXf7hk_d172adQmyVAieW5A3utcfuMcNnRO3oBlxp1JDv4J-LWpANKlhx6BKjANAZpUlwqDBbkej6jhgVNmjZc3UC-8shmqCujFN8L7JnLCf0tD5_ZCqgbbtkwJD1IWOny3ipd0KfT-S2fS0hwiXf_h7vngMhD20QlB7weq9XHmDYjrjC3QupTIBAEfDQJ" />
              <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-black uppercase px-3 py-1 rounded-full">Kiến thức</div>
            </div>
            <div className="p-8">
              <p className="text-xs font-bold text-accent mb-3">10/03/2024</p>
              <h3 className="font-display font-bold text-xl mb-4 text-primary dark:text-white leading-snug group-hover:text-accent transition-colors">Cẩm nang chi tiết: Thủ tục xuất khẩu sang EU năm 2024</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Những thay đổi quan trọng về chính sách nhập khẩu của Liên minh Châu Âu mà doanh nghiệp Việt cần lưu ý.</p>
              <a className="inline-flex items-center gap-2 font-bold text-accent hover:text-primary dark:hover:text-white transition-all" href="#">
                Đọc thêm <i className="material-icons text-base">east</i>
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all duration-300">
            <div className="h-56 overflow-hidden relative">
              <img alt="Japan Korea" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7RPK4c0bUKvgSQQf9_ryDgFO7oWjOu-wG9S7R8hRK3ORZubVoFWDC1bJamq77o2q28kb-sR8eTjyDIMLIpo5-1rZHWDiSTYgSDIH0-InxWb6d_Sf6i0CHOvT3B5GX4-21ajO5g8Ou7ZNdOqSp3C8jx2UTn2ylxduqBt2oPnJso2pFmiDCddOCN2KQ7B664NWvz06f_5AwijRGGwAi4jIX7-GJsLdZygsSVzwqzHcDuInW46uVqV3crm8tEcTf45V7CBPxvviw61WQ" />
              <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-black uppercase px-3 py-1 rounded-full">Thị trường</div>
            </div>
            <div className="p-8">
              <p className="text-xs font-bold text-accent mb-3">05/03/2024</p>
              <h3 className="font-display font-bold text-xl mb-4 text-primary dark:text-white leading-snug group-hover:text-accent transition-colors">Kết nối Đông Bắc Á: Cơ hội từ Nhật Bản và Hàn Quốc</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Tận dụng các hiệp định thương mại tự do để bứt phá tại hai thị trường tiêu dùng hàng đầu khu vực.</p>
              <a className="inline-flex items-center gap-2 font-bold text-accent hover:text-primary dark:hover:text-white transition-all" href="#">
                Đọc thêm <i className="material-icons text-base">east</i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="px-12 py-4 bg-accent hover:bg-yellow-400 text-primary font-black rounded-xl text-lg shadow-xl shadow-accent/20 transition-all transform hover:-translate-y-1 uppercase tracking-widest">
            XEM TẤT CẢ
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;