'use client'

import { cn } from '@/lib/utils'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'

export function ForgotPasswordForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      // The url which will be included in the email. This URL needs to be configured in your redirect URLs in the Supabase dashboard at https://supabase.com/dashboard/project/_/auth/url-configuration
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      })
      if (error) throw error
      setSuccess(true)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {success ? (
        <Card className="bg-white/10 backdrop-blur-xl border-white/30 shadow-2xl shadow-black/10 dark:bg-slate-800/10 dark:border-slate-700/30 dark:shadow-black/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white drop-shadow-sm">
              ตรวจสอบอีเมลของคุณ
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300 drop-shadow-sm">
              คำแนะนำการรีเซ็ตรหัสผ่านถูกส่งไปแล้ว
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <p className="text-sm text-green-600 dark:text-green-400 text-center">
                หากคุณลงทะเบียนด้วยอีเมลและรหัสผ่าน คุณจะได้รับอีเมลรีเซ็ตรหัสผ่าน
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link 
                href="/auth/login" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline underline-offset-4 hover:underline transition-colors duration-200"
              >
                กลับไปเข้าสู่ระบบ
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-white/10 backdrop-blur-xl border-white/30 shadow-2xl shadow-black/10 dark:bg-slate-800/10 dark:border-slate-700/30 dark:shadow-black/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white drop-shadow-sm">
              รีเซ็ตรหัสผ่าน
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300 drop-shadow-sm">
              กรอกอีเมลของคุณ และเราจะส่งลิงก์รีเซ็ตรหัสผ่านให้คุณ
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-slate-700 dark:text-slate-200 font-medium">
                    อีเมล
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/20 backdrop-blur-sm border-white/30 focus:bg-white/30 focus:border-white/50 transition-all duration-200 dark:bg-slate-800/20 dark:border-slate-700/30 dark:focus:bg-slate-800/30 dark:focus:border-slate-700/50"
                  />
                </div>
                {error && (
                  <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-lg p-3">
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                  </div>
                )}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-sm border border-white/30 hover:from-blue-600/95 hover:to-purple-700/95 active:from-blue-700/95 active:to-purple-800/95 text-white font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 active:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation" 
                  disabled={isLoading}
                >
                  {isLoading ? 'กำลังส่ง...' : 'ส่งอีเมลรีเซ็ต'}
                </Button>
              </div>
              <div className="mt-6 text-center text-sm">
                <span className="text-slate-600 dark:text-slate-300">
                  มีบัญชีอยู่แล้ว?{' '}
                </span>
                <Link 
                  href="/auth/login" 
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline underline-offset-4 hover:underline transition-colors duration-200"
                >
                  เข้าสู่ระบบ
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
