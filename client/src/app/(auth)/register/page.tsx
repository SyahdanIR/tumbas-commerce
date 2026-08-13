"use client";
import React, { useState } from "react";
import { ShieldCheck, Headphones, Diamond } from "lucide-react";
import { register } from "@/services/authService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const response = await register({
        name,
        email,
        password,
      });
      console.log(response);
      toast.success("Registrasi Berhasil!");
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen bg-[#f7fee7] flex items-center justify-center p-4 font-sans selection:bg-[#bef264] selection:text-[#3f6212]">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-lime-100">
        {/* Left Side: Branding & Value Propositions */}
        <div className="w-full md:w-5/12 bg-[#ecfccb] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#bef264]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold text-[#4d7c0f] mb-6 tracking-tight">
              Tumbas
            </h1>
            <p className="text-[#3f6212] text-lg mb-10 leading-relaxed font-medium">
              Belanja Halus & Secure. Temukan produk berkualitas dengan layanan
              terbaik dari kurasi kami.
            </p>

            <div className="space-y-8">
              <FeatureItem
                icon={<ShieldCheck size={24} />}
                title="Secure Payment"
                description="Transaksi aman dan terenkripsi untuk kenyamanan Anda."
              />
              <FeatureItem
                icon={<Headphones size={24} />}
                title="24/7 Support"
                description="Tim dukungan kami siap membantu Anda kapan saja."
              />
              <FeatureItem
                icon={<Diamond size={24} />}
                title="Quality Products"
                description="Kurasi ketat untuk memastikan hanya produk terbaik."
              />
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Daftar ke Tumbas
              </h2>
              <p className="text-slate-500">
                Buat akun untuk mulai pengalaman belanja yang lebih baik.
              </p>
            </header>

            <form className="space-y-5" onSubmit={handleRegister}>
              <InputField
                label="Nama Lengkap"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputField
                label="Email"
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                label="Kata Sandi"
                type="password"
                placeholder="Minimal 8 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputField
                label="Konfirmasi Kata Sandi"
                type="password"
                placeholder="Ulangi kata sandi"
              />

              <button
                type="submit"
                className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white font-bold py-4 rounded-2xl shadow-lg shadow-lime-200 transition-all transform active:scale-[0.98] mt-4 text-lg"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center mt-10 text-slate-600">
              Sudah punya akun?{" "}
              <a
                href="/login"
                className="text-[#65a30d] font-bold hover:underline transition-all"
              >
                Masuk di sini
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

export default RegisterPage;
