import React from 'react';

const GlobalNetwork: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-y-12 transform origin-top translate-x-32 z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="font-bold uppercase tracking-widest text-accent text-sm">GLOBAL NETWORK</span>
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight">
              Mạng Lưới <br /><span className="text-accent">Thương Mại Toàn Cầu</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              RuBY Việt Nam tự hào sở hữu mạng lưới đối tác chiến lược tại các thị trường trọng điểm, đảm bảo hàng hóa của bạn được lưu thông không giới hạn.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all flex items-center justify-center border border-white/20">
                <i className="material-icons">arrow_back</i>
              </button>
              <button className="w-12 h-12 rounded-full bg-accent text-primary hover:bg-white hover:text-primary transition-all flex items-center justify-center shadow-lg shadow-accent/20">
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            
            {/* EU */}
            <div className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img alt="Châu Âu" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYmbqn6qCLN2jLpgUMOellh-xjnikZpWRPsV0NBWMefgdTN3i66JeRkKgA7JOvtQDhrEuQaHcyC4Xg7GBXf7hk_d172adQmyVAieW5A3utcfuMcNnRO3oBlxp1JDv4J-LWpANKlhx6BKjANAZpUlwqDBbkej6jhgVNmjZc3UC-8shmqCujFN8L7JnLCf0tD5_ZCqgbbtkwJD1IWOny3ipd0KfT-S2fS0hwiXf_h7vngMhD20QlB7weq9XHmDYjrjC3QupTIBAEfDQJ" />
                <div className="absolute top-4 right-4 z-20 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">EU Market</div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl mb-3 text-white">Thị Trường Châu Âu</h3>
                <p className="text-white/70 text-sm mb-6 line-clamp-3">
                  Kết nối trực tiếp tới các cảng lớn tại Hamburg, Rotterdam. Hỗ trợ thủ tục EORI và tiêu chuẩn CE cho hàng xuất khẩu.
                </p>
                <a className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:text-white transition-colors uppercase tracking-wider" href="#">
                  Khám phá <i className="material-icons text-base">east</i>
                </a>
              </div>
            </div>

            {/* ASEAN */}
            <div className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img alt="Đông Nam Á" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFs3tzDy8xZxBNhg_-bgXeqZXhYT0K1-6qjJZ5SVvdjnWUeLZJoLH4hnSeTVfXkcr3qQUI2eBRSWGdCiZ-k0PvwbFa4cD4A35hipq6vbUP3jJBPFcCZFtkEfe-b_SdNG7D40wGzlVl5EytOWrjOK4gm5kPTiqG91cZ_vjLJ2hKGgTcmFDURzzN3WuazMZmPthB0czaNcyFIVzGG4n7TijmptQb6IpLNzgaB1tqRYqKVbthtKQp5JQ3PcwLYnEgc_p2zFOJyr_19Ic8" />
                <div className="absolute top-4 right-4 z-20 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">ASEAN</div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl mb-3 text-white">Kết Nối Đông Nam Á</h3>
                <p className="text-white/70 text-sm mb-6 line-clamp-3">
                  Vận tải đa phương thức xuyên biên giới Lào, Campuchia, Thái Lan với thời gian thông quan nhanh nhất khu vực.
                </p>
                <a className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:text-white transition-colors uppercase tracking-wider" href="#">
                  Khám phá <i className="material-icons text-base">east</i>
                </a>
              </div>
            </div>

            {/* US */}
            <div className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img alt="Mỹ" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzE4RugcJ-EjRwaQXXcPLFPYy4ZMJwzMezFKLP0B2Udetj1077VtvcOcVvVhfpGP-tQmL5mV86gX9AHShAjTB8_MXIBzbTGPh84n8n0SmC_qXr-t-W_AP4m_VHf0ZBfTAgaIupHD0eeRk1a1M7jpVGCJc11HD7X__41LmrhklRazr3B7NR8U3gXt10ItkSVgrCE-T6LN4hs1pmUG70FrAV7KAOSmLr3m_QrSDpOZVWIgCPmdxSIJdfDcH0kTJprGnJa1FxvPv6Kb6b" />
                <div className="absolute top-4 right-4 z-20 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">US Trade</div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl mb-3 text-white">Thương Mại Mỹ - Việt</h3>
                <p className="text-white/70 text-sm mb-6 line-clamp-3">
                  Chuyên tuyến Bờ Đông - Bờ Tây nước Mỹ. Tư vấn mã FDA và các quy định an ninh hàng hóa nghiêm ngặt.
                </p>
                <a className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:text-white transition-colors uppercase tracking-wider" href="#">
                  Khám phá <i className="material-icons text-base">east</i>
                </a>
              </div>
            </div>

            {/* North East Asia */}
            <div className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img alt="Nhật Bản" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7RPK4c0bUKvgSQQf9_ryDgFO7oWjOu-wG9S7R8hRK3ORZubVoFWDC1bJamq77o2q28kb-sR8eTjyDIMLIpo5-1rZHWDiSTYgSDIH0-InxWb6d_Sf6i0CHOvT3B5GX4-21ajO5g8Ou7ZNdOqSp3C8jx2UTn2ylxduqBt2oPnJso2pFmiDCddOCN2KQ7B664NWvz06f_5AwijRGGwAi4jIX7-GJsLdZygsSVzwqzHcDuInW46uVqV3crm8tEcTf45V7CBPxvviw61WQ" />
                <div className="absolute top-4 right-4 z-20 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">Japan - Korea</div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl mb-3 text-white">Thị Trường Đông Bắc Á</h3>
                <p className="text-white/70 text-sm mb-6 line-clamp-3">
                  Mạng lưới logistics phủ sóng Nhật Bản, Hàn Quốc, Trung Quốc với các giải pháp kho bãi ngoại quan hiện đại.
                </p>
                <a className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:text-white transition-colors uppercase tracking-wider" href="#">
                  Khám phá <i className="material-icons text-base">east</i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;