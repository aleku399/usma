'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RefreshCw } from 'lucide-react'

export function Captcha() {
  const [captchaText, setCaptchaText] = useState('')

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let text = ''
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setCaptchaText(text)
  }

  useEffect(() => {
    generateCaptcha()
  }, [])

  return (
    <div className="flex items-center gap-2">
      <div className="bg-gray-100 p-2 rounded-md font-mono text-lg tracking-wider">
        {captchaText}
      </div>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={generateCaptcha}
        aria-label="Refresh captcha"
      >
        <RefreshCw className="h-4 w-4" />
      </Button>
    </div>
  )
}

