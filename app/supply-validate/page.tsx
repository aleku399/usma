'use client'

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Form validation schema
const formSchema = z.object({
  certificateNumber: z.string().min(1, {
    message: "Certificate number is required",
  }),
})

export default function RegistrationForm() {
  const [isValidating, setIsValidating] = useState(false)

  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      certificateNumber: "",
    },
  })

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsValidating(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Validation Successful",
        description: `Certificate number ${values.certificateNumber} has been validated.`,
      })
    } catch (error) {
        console.log("error Form", error)
      toast({
        title: "Validation Failed",
        description: "Please check your certificate number and try again.",
        variant: "destructive",
      })
    } finally {
      setIsValidating(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl my-3 mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Supplier Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="certificateNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    CERTIFICATE NUMBER #:{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <div className="flex gap-4">
                    <FormControl>
                      <Input 
                        placeholder="Supplier Registration Number" 
                        {...field}
                        className="flex-1"
                      />
                    </FormControl>
                    <Button 
                      type="submit" 
                      disabled={isValidating}
                      className="w-24"
                    >
                      {isValidating ? "Validating..." : "Validate"}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

