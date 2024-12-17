'use client'

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"
import { Send, RefreshCw } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email().optional().or(z.literal("")),
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }).refine((val) => val.trim().split(/\s+/).length >= 10, {
    message: "Description must be at least 10 words",
  }),
})

type ComplaintFormValues = z.infer<typeof formSchema>

export default function ComplaintForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ComplaintFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      title: "",
      description: "",
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(values: ComplaintFormValues) {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast({
        title: "Complaint Submitted",
        description: "Your complaint has been successfully submitted.",
      })
      form.reset()
    } catch (error) {
    console.log("error", error)
      toast({
        title: "Error",
        description: "There was a problem submitting your complaint.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl my-3 mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-2xl font-bold">
          Reason or Description for complaint
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => form.reset()}
          className="h-8 w-8"
          type="button"
        >
          <RefreshCw className="h-4 w-4" />
          <span className="sr-only">Reset form</span>
        </Button>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    EMAIL ADDRESS (OPTIONAL)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    TITLE <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter complaint title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    DESCRIPTION (MINIMUM 10 WORDS) <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please provide detailed description of your complaint"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit complaint
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

