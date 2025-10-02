import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default async function Page({ searchParams }: { searchParams: Promise<{ error: string }> }) {
  const params = await searchParams

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        <Card className="bg-white/10 backdrop-blur-xl border-white/30 shadow-2xl shadow-black/10 dark:bg-slate-800/10 dark:border-slate-700/30 dark:shadow-black/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center shadow-lg shadow-red-500/25">
                <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white drop-shadow-sm">
              เกิดข้อผิดพลาด
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-600 dark:text-red-400">
                {params?.error ? (
                  <>รหัสข้อผิดพลาด: <span className="font-mono font-semibold">{params.error}</span></>
                ) : (
                  'เกิดข้อผิดพลาดที่ไม่ระบุ'
                )}
              </p>
            </div>
            <div className="space-y-4">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-sm border border-white/30 hover:from-blue-600/95 hover:to-purple-700/95 active:from-blue-700/95 active:to-purple-800/95 text-white font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 active:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
              >
                <Link href="/auth/login" className="flex items-center justify-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  กลับไปเข้าสู่ระบบ
                </Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 active:bg-white/30 text-slate-700 dark:text-slate-200 dark:bg-slate-800/10 dark:border-slate-700/30 dark:hover:bg-slate-800/20 dark:active:bg-slate-800/30 shadow-lg shadow-black/5 dark:shadow-black/20 active:shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
              >
                <Link href="/">
                  กลับหน้าหลัก
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
