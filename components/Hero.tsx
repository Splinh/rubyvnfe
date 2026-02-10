import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-primary hero-gradient">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top translate-x-20"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-accent animate-pulse"></span>
              <span className="font-display font-bold text-accent uppercase tracking-[0.2em] text-sm">Chào mừng đến với RuBY Vietnam</span>
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl leading-tight">
              RuBY Việt Nam - <br />
              <span className="text-white">Giải Pháp Logistics & </span><br />
              <span className="text-accent">Xúc Tiến Thương Mại Toàn Cầu</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              Sứ mệnh của chúng tôi là cung cấp dịch vụ vận tải hàng đầu thông qua mạng lưới kết nối toàn cầu chuyên nghiệp, giúp doanh nghiệp bứt phá trong kỷ nguyên thương mại số.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-accent text-primary font-bold rounded-xl text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
                Liên Hệ Ngay <i className="material-icons">arrow_forward</i>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Xem Dịch Vụ
              </button>
            </div>
            
            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div className="flex -space-x-3">
                <img alt="Client 1" className="w-12 h-12 rounded-full border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoasbqORdU0_fbz-IgRENX44_OEM0smVdamN4yivYR7iD21jTQgh_tllHKY2JpFI36WRKPI8BZL1ojqXYM1ows9gBbcFR6ajqhZ2F4TfEzNC2SV2ZKjACFM4rG-ptK4B9lpTF7mTb8iNp9-A0Xr7phFyAx6CXtMoH5CqC2LPJP_5iHxhkBGKj7O1Fj7D20IuoeKKEGJldWAK9_v0oaUcSoRYTbYzmsGqHVR2kGWg7BRVt5ZNcLHr78J_VfIDNghiy8n7EJCp0obZ3O" />
                <img alt="Client 2" className="w-12 h-12 rounded-full border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVK8ON5FZXjjcEGn5CX9080mmcEM8tLgUyR-2XkCYvTlJ12WqD2NITqEtowWEUotOyJa3HxZwH2KdkP4Jia5CGr9BVTGLYfLawP5ARR3KZTRtn1-CqnCT4XG7-dJsCX1sB6iXGW3qiw9vivmVyjHD4aafCW9RlurHzaDflBgdBnMyTSIe2u3SvKOiIG8QJU2RdtuAdxBLezfy5ZP_PyWDixEIWepNB4w71Tn-ZMy0uw0KWZM0Q76sJbbTSLCkfFM5wa9OQA4Tus7by" />
                <img alt="Client 3" className="w-12 h-12 rounded-full border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuVDkQdK8yI1UjAHfPiof_46bR3DJZ4tRvR9IwH7oNGpRRDfvVm9UZQlYwY1bzHie2Nla5g5WqoS3w6A4UuU1XgVaw2Wu86U83LK9CtmtAP5FJazIiUb0sikTRf_3A6Sx6vlJkzXMfKT4NcCRbr5BQDomK5oEiYildGVICQAlVwXu33C7JTKBgjv5wbYtGYXz0H9A8XskN5sjRLp0p3XaxHVEGbVztz1kNtsdjI5Njaxj0TNmZ59FYaxBRNSQdlgX9otvrg0Fkbt2q" />
                <div className="w-12 h-12 rounded-full border-2 border-primary bg-slate-800 flex items-center justify-center text-xs font-bold text-accent">+500</div>
              </div>
              <p className="text-sm font-medium text-white/70">Được tin dùng bởi hơn 500+ doanh nghiệp xuất nhập khẩu trên toàn thế giới.</p>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-10 blur-2xl"></div>
            <div className="blob-shape w-full max-w-[500px] aspect-square relative z-10 border-8 border-white/10">
              <img alt="Logistics Warehouse Scene" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPLLdTNni2WHFczfoo_pdtwc4sk5Y_4fTq9l-I-t2-as96QFBF8BPmvZkShfJkRc2KLoexHelSML46BUDED7Kh0BOekRXVmHcyHBvjxSwI2c5bqO1gFYbKjJ5Z_1WW7apwtQUMNIp9KTJJHeDoGjP2zCH4pd_LKPDx7r1AOavwGEby6aGnkoJSnONPbJ8mYkb03zuudoH-jGtHvVVIjAaEPuzxYh3LP1ux2ZJq_6ZOdfs44GNgvxK3Zg310XT6oW9bVsupBloEyFZj" />
              <div className="absolute bottom-8 right-8 bg-white dark:bg-primary p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce border border-slate-100 dark:border-slate-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <i className="material-icons text-green-600 dark:text-green-400">check_circle</i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-300 uppercase tracking-tighter">Vận chuyển</p>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">Thành công 100%</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent rounded-full opacity-90 z-0 flex items-center justify-center text-primary shadow-xl">
              <i className="material-icons text-6xl">public</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;