import React from "react";
import {
  ShoppingCart,
  Heart,
  Search,
  Truck,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Mail,
} from "lucide-react";

/**
 * Tumbas Marketplace Landing Page Component
 * Built with: Next.js (App Router), Tailwind CSS, TypeScript, Lucide React
 */

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-[#84cc16] tracking-tight">
              Tumbas
            </h1>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a
                href="#"
                className="text-[#84cc16] border-b-2 border-[#84cc16] pb-1"
              >
                Shop
              </a>
              <a href="#" className="hover:text-[#84cc16] transition-colors">
                Categories
              </a>
              <a href="#" className="hover:text-[#84cc16] transition-colors">
                Deals
              </a>
              <a href="#" className="hover:text-[#84cc16] transition-colors">
                Support
              </a>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-10 hidden lg:block">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-[#84cc16]/20 focus:border-[#84cc16] transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 text-slate-600 mr-2">
              <button className="hover:text-[#84cc16] transition-colors">
                <Heart size={22} />
              </button>
              <div className="relative">
                <button className="hover:text-[#84cc16] transition-colors">
                  <ShoppingCart size={22} />
                </button>
                <span className="absolute -top-2 -right-2 bg-[#84cc16] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l pl-5 border-slate-200">
              <a
                href="/login"
                className="text-sm font-bold text-slate-700 hover:text-[#84cc16] transition-colors"
              >
                Sign In
              </a>
              <a
                href="/register"
                className="bg-[#84cc16] hover:bg-[#65a30d] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-lime-100 transition-all active:scale-95"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <span className="inline-block bg-[#bef264] text-[#3f6212] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              New Arrivals
            </span>
            <h2 className="text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Upgrade Your <br />
              <span className="text-[#84cc16]">Style & Life</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Discover the latest trends in fashion, cutting-edge tech, and
              premium home goods all in one place.
            </p>
            <button className="bg-[#84cc16] hover:bg-[#65a30d] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-lime-200 transition-all flex items-center gap-3 active:scale-95 group">
              Shop Now
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-[#84cc16]/10 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop"
                alt="Featured product"
                className="relative z-10 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              Featured Categories
            </h3>
            <p className="text-slate-500">
              Explore our handpicked collections for you
            </p>
          </div>
          <a
            href="#"
            className="text-[#84cc16] font-bold flex items-center gap-1 hover:underline"
          >
            View All <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <CategoryCard
            title="Fashion"
            image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            className="md:col-span-2 md:row-span-2 h-[500px]"
            isLarge
          />
          <CategoryCard
            title="Electronics"
            image="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop"
            className="h-[238px]"
          />
          <CategoryCard
            title="Home & Living"
            image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
            className="h-[238px]"
          />
          <CategoryCard
            title="Beauty & Care"
            image="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1976&auto=format&fit=crop"
            className="md:col-span-2 h-[238px]"
          />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <TrustItem
            icon={<Truck size={32} />}
            title="Fast Delivery"
            description="Get your orders delivered swiftly and reliably."
          />
          <TrustItem
            icon={<ShieldCheck size={32} />}
            title="Secure Payment"
            description="100% secure payment gateways for peace of mind."
          />
          <TrustItem
            icon={<Headphones size={32} />}
            title="24/7 Customer Care"
            description="We are here to help you anytime, anywhere."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-[#84cc16]">Tumbas</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              &copy; 2026 Tumbas Marketplace. All rights reserved. <br />
              Your one-stop destination for premium shopping experiences.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#84cc16] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#84cc16] transition-colors">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#84cc16] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-[#84cc16] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#84cc16] transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#84cc16] transition-colors">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Stay Updated</h5>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#84cc16]/20 focus:border-[#84cc16]"
                />
              </div>
              <button className="bg-[#84cc16] hover:bg-[#65a30d] text-white p-3 rounded-xl transition-all active:scale-95 shadow-md shadow-lime-100">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-50 text-center text-xs text-slate-400">
          Designed with precision for Tumbas Marketplace. Built with Next.js &
          Tailwind CSS.
        </div>
      </footer>
    </div>
  );
};

/** Helper Components **/

const CategoryCard: React.FC<{
  title: string;
  image: string;
  className?: string;
  isLarge?: boolean;
}> = ({ title, image, className, isLarge }) => (
  <div
    className={`group relative overflow-hidden rounded-3xl cursor-pointer ${className}`}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
      <h4
        className={`${isLarge ? "text-3xl" : "text-xl"} font-bold text-white mb-2`}
      >
        {title}
      </h4>
      <button className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors text-sm font-semibold">
        Shop Now <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

const TrustItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center space-y-4">
    <div className="bg-white p-4 rounded-2xl text-[#84cc16] shadow-sm border border-slate-100">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default LandingPage;
