"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export type ContactFormState = {
    message: string;
    fields?: Record<string, string>;
    issues?: string[];
}


export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
        fields[key] = formData[key].toString();
    }
    return {
        message: "Invalid form data.",
        fields,
        issues: parsed.error.issues.map((issue) => issue.message),
    }
  }

  // Simulate sending an email or saving to a database
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log("Form submitted successfully!");
  console.log(parsed.data);

  return { message: "Thank you for your message! We will get back to you shortly." }
}
