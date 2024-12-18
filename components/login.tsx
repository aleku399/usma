'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Captcha } from "./captcha"

export default function LoginPage() {
  const [useVirtualKeyboard, setUseVirtualKeyboard] = useState(false)
  const [loginId, setLoginId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // Temporary login validation
    if (loginId === "admin" && password === "admin") {
      // Store loginId in local storage
      localStorage.setItem("loginId", loginId)
      
      // Navigate to the certificate page
      router.push('/certificate')
    } else {
      setError("Invalid login credentials. Please try again.")
    }
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Log In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="loginId">Login Id</Label>
              <Input 
                id="loginId"
                type="text"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Captcha />
              <Input 
                placeholder="Enter Security Code above."
                required
              />
              <p className="text-sm text-gray-500">
                (Letters are case sensitive)
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="virtualKeyboard" 
                checked={useVirtualKeyboard}
                onCheckedChange={(checked) => setUseVirtualKeyboard(checked as boolean)}
              />
              <Label htmlFor="virtualKeyboard" className="text-sm text-gray-600">
                Use Virtual KeyBoard For Password
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-700 hover:bg-blue-800"
            >
              Log In
            </Button>

            <div className="text-center">
              <Link 
                href="/forgot-password" 
                className="text-blue-600 hover:underline text-sm"
              >
                Forgot Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
