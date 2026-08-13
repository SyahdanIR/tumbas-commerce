"use client";
import React, { useState } from "react";
import { ShieldCheck, Headphones, Diamond, LogIn } from "lucide-react";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

/**
 * Tumbas Login Page Component
 * Built with: Next.js (App Router compatible), Tailwind CSS, TypeScript, Lucide React
 */

const LoginPage: React.FC = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const response = await login({ email, password });
      toast.success("Login Suksess!");
      route.replace("/products");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen bg-[#f7fee7] flex items-center justify-center p-4 font-sans selection:bg-[#bef264] selection:text-[#3f6212]">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-lime-100">
        {/* Left Side: Branding & Value Propositions (Consistent with Register) */}
        <div className="w-full md:w-5/12 bg-[#ecfccb] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#bef264]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold text-[#4d7c0f] mb-6 tracking-tight">
              Tumbas
            </h1>
            <p className="text-[#3f6212] text-lg mb-10 leading-relaxed font-medium">
              Selamat Datang Kembali! Masuk untuk melanjutkan pengalaman belanja
              organik berkualitas Anda.
            </p>

            <div className="space-y-8">
              <FeatureItem
                icon={<ShieldCheck size={24} />}
                title="Secure Login"
                description="Keamanan data Anda adalah prioritas utama kami."
              />
              <FeatureItem
                icon={<Headphones size={24} />}
                title="24/7 Support"
                description="Bantuan selalu tersedia di setiap langkah Anda."
              />
              <FeatureItem
                icon={<Diamond size={24} />}
                title="Exclusive Deals"
                description="Dapatkan akses ke promo khusus pengguna terdaftar."
              />
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Masuk ke Tumbas
              </h2>
              <p className="text-slate-500">
                Silakan masukkan detail akun Anda untuk melanjutkan.
              </p>
            </header>

            <form className="space-y-5" onSubmit={handleLogin}>
              <InputField
                label="Alamat Email"
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-bold text-slate-700">
                    Kata Sandi
                  </label>
                </div>
                <input
                  type="password"
                  placeholder="Masukkan kata sandi"
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#84cc16] focus:bg-white focus:border-transparent transition-all placeholder:text-slate-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white font-bold py-4 rounded-2xl shadow-lg shadow-lime-200 transition-all transform active:scale-[0.98] mt-2 text-lg flex items-center justify-center gap-2">
                <LogIn size={20} />
                Masuk Sekarang
              </button>
            </form>

            <p className="text-center mt-10 text-slate-600">
              Belum punya akun?{" "}
              <a
                href="/register"
                className="text-[#65a30d] font-bold hover:underline transition-all"
              >
                Daftar sekarang
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Helper Components **/

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 group">
    <div className="bg-[#bef264] p-3 rounded-2xl text-[#3f6212] group-hover:scale-110 transition-transform duration-300 shadow-sm">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-[#3f6212] text-xl">{title}</h3>
      <p className="text-[#4d7c0f]/80 leading-snug">{description}</p>
    </div>
  </div>
);

const InputField: React.FC<
  {
    label: string;
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-bold text-slate-700 mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#84cc16] focus:bg-white focus:border-transparent transition-all placeholder:text-slate-400"
    />
  </div>
);

export default LoginPage;
