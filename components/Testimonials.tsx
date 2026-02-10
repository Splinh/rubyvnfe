import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl text-primary dark:text-white mb-4">Khách Hàng Nói Gì Về RuBY Việt Nam</h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto pt-12">
          <div className="absolute -top-4 -left-12 w-32 h-32 bg-accent opacity-80 rounded-full z-0 blob-shape"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary rounded-full z-0"></div>
          
          <div className="absolute bottom-4 right-16 grid grid-cols-6 gap-2 opacity-30">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            ))}
          </div>
          
          <div className="relative z-10 bg-white dark:bg-slate-800 p-12 md:p-16 rounded-[2rem] quote-card-shadow border border-slate-50 dark:border-slate-700">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
                <i className="material-icons text-6xl text-accent">format_quote</i>
              </div>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-medium italic leading-relaxed mb-10">
                "RuBY Việt Nam là đối tác logistics đáng tin cậy nhất mà chúng tôi từng làm việc. Hiệu quả vận hành và sự am hiểu sâu sắc về thị trường quốc tế của họ đã giúp chúng tôi tối ưu 30% chi phí vận chuyển và đạt được những thành công vượt bậc trong xuất khẩu sang thị trường EU."
              </p>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xl text-primary dark:text-accent uppercase tracking-wider">Hồng Châu</h4>
                <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Giám đốc Vận hành - TechGlobal Corp</p>
              </div>
              <div className="flex gap-2 mt-8">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              </div>
            </div>
          </div>
          
          <img alt="Client" className="absolute -left-16 top-1/4 w-16 h-16 rounded-full border-4 border-white shadow-xl z-20 hidden md:block object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoasbqORdU0_fbz-IgRENX44_OEM0smVdamN4yivYR7iD21jTQgh_tllHKY2JpFI36WRKPI8BZL1ojqXYM1ows9gBbcFR6ajqhZ2F4TfEzNC2SV2ZKjACFM4rG-ptK4B9lpTF7mTb8iNp9-A0Xr7phFyAx6CXtMoH5CqC2LPJP_5iHxhkBGKj7O1Fj7D20IuoeKKEGJldWAK9_v0oaUcSoRYTbYzmsGqHVR2kGWg7BRVt5ZNcLHr78J_VfIDNghiy8n7EJCp0obZ3O" />
          <img alt="Client" className="absolute -right-12 top-1/2 w-14 h-14 rounded-full border-4 border-white shadow-xl z-20 hidden md:block object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVK8ON5FZXjjcEGn5CX9080mmcEM8tLgUyR-2XkCYvTlJ12WqD2NITqEtowWEUotOyJa3HxZwH2KdkP4Jia5CGr9BVTGLYfLawP5ARR3KZTRtn1-CqnCT4XG7-dJsCX1sB6iXGW3qiw9vivmVyjHD4aafCW9RlurHzaDflBgdBnMyTSIe2u3SvKOiIG8QJU2RdtuAdxBLezfy5ZP_PyWDixEIWepNB4w71Tn-ZMy0uw0KWZM0Q76sJbbTSLCkfFM5wa9OQA4Tus7by" />
          <img alt="Client" className="absolute -left-12 bottom-1/4 w-14 h-14 rounded-full border-4 border-white shadow-xl z-20 hidden md:block object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuVDkQdK8yI1UjAHfPiof_46bR3DJZ4tRvR9IwH7oNGpRRDfvVm9UZQlYwY1bzHie2Nla5g5WqoS3w6A4UuU1XgVaw2Wu86U83LK9CtmtAP5FJazIiUb0sikTRf_3A6Sx6vlJkzXMfKT4NcCRbr5BQDomK5oEiYildGVICQAlVwXu33C7JTKBgjv5wbYtGYXz0H9A8XskN5sjRLp0p3XaxHVEGbVztz1kNtsdjI5Njaxj0TNmZ59FYaxBRNSQdlgX9otvrg0Fkbt2q" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;