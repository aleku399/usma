"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Captcha } from "./captcha";

import { loginClient } from "@/api/";
import { useAuth } from "@/context/auth-context";

export default function LoginPage() {
  const [useVirtualKeyboard, setUseVirtualKeyboard] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const client = await loginClient(loginId, password);

      if (client) {
        login(client.loginId);
        
        router.push(client.route);
  
      } else {
        setError("Invalid login credentials. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Log In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
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
              <Input placeholder="Enter Security Code above." required />
              <p className="text-sm text-gray-500">
                (Letters are case sensitive)
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="virtualKeyboard"
                checked={useVirtualKeyboard}
                onCheckedChange={(checked) =>
                  setUseVirtualKeyboard(checked as boolean)
                }
              />
              <Label
                htmlFor="virtualKeyboard"
                className="text-sm text-gray-600"
              >
                Use Virtual KeyBoard For Password
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Log In"
              )}
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
  );
}
