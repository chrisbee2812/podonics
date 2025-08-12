"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm, type ContactFormState } from "./actions"
import { Loader2 } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  )
}

export function ContactForm() {
  const { toast } = useToast()
  const [state, formAction] = useActionState<ContactFormState, FormData>(submitContactForm, {
    message: "",
  })

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success!",
          description: state.message,
        })
        form.reset()
      }
    }
  }, [state, toast, form])

  const { register, formState: { errors } } = form

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <Input {...register("name")} placeholder="Your Name" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Input {...register("email")} placeholder="Your Email" type="email" />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Input {...register("subject")} placeholder="Subject" />
        {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
      </div>
      <div>
        <Textarea {...register("message")} placeholder="Your Message" rows={6} />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>
      <SubmitButton />
    </form>
  )
}
