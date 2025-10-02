import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex relative overflow-hidden">
      {/* Animated Background with Glass Morphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Floating Glass Orbs - Mobile Optimized */}
        <div className="absolute top-20 left-4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      {/* Back to Home Button - Desktop */}
      <div className="fixed hidden lg:block top-6 left-6 z-50">
        <Button
          variant="ghost"
          asChild
          className="bg-white/10 backdrop-blur-xl hover:bg-white/20 active:bg-white/30 text-white border border-white/30 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            กลับหน้าหลัก
          </Link>
        </Button>
      </div>

      {/* Back to Home Button - Mobile */}
      <div className="fixed lg:hidden top-4 left-4 z-50">
        <Button
          variant="ghost"
          asChild
          className="bg-white/10 backdrop-blur-xl hover:bg-white/20 active:bg-white/30 text-white border border-white/30 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation p-2"
        >
          <Link href="/" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">กลับ</span>
          </Link>
        </Button>
      </div>

      {/* Left Column - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')",
          }}
        />

        {/* Enhanced Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/80 to-indigo-800/90 backdrop-blur-sm" />

        {/* Additional Glass Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 backdrop-blur-xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="max-w-md">
            <div className="flex items-center space-x-2 mb-8">
              <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg shadow-white/10">
                <span className="text-white font-bold text-lg drop-shadow-sm">
                  AI
                </span>
              </div>
              <span className="text-2xl font-bold drop-shadow-lg">
                Genius AI
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6 leading-tight drop-shadow-lg">
              เข้าสู่โลกแห่ง
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text drop-shadow-xl">
                ปัญญาประดิษฐ์
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed drop-shadow-sm">
              ประสบการณ์การสนทนากับ AI ที่ฉลาดและเข้าใจคุณมากที่สุด
              พร้อมช่วยเหลือคุณในทุกเรื่องที่ต้องการ
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                <span className="text-blue-100 drop-shadow-sm">
                  ตอบสนองแบบเรียลไทม์
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                <span className="text-blue-100 drop-shadow-sm">
                  ความปลอดภัยระดับสูง
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                <span className="text-blue-100 drop-shadow-sm">
                  รองรับภาษาไทยอย่างสมบูรณ์
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 relative">
        {/* Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-indigo-100/80 dark:from-slate-900/80 dark:via-slate-800/60 dark:to-slate-900/80 backdrop-blur-xl"></div>
        
        {/* Glass Container */}
        <div className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/10 dark:bg-slate-800/20 dark:border-slate-700/30 dark:shadow-black/20">
          {children}
        </div>
      </div>
    </div>
  );
}
