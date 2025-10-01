import { z } from "zod";

export const contactSchema = z
  .object({
    name: z.string().min(2, "Please share your name."),
    email: z.string().email("Provide a valid email address."),
    mobile: z
      .string()
      .default("")
      .refine((value) => {
        const trimmed = value.trim();
        if (trimmed.length === 0) return true;
        return /^[+\d\s()-]{7,20}$/.test(trimmed);
      }, {
        message: "Use an international phone format.",
      }),
    message: z.string().min(20, "Tell me a bit more so I can help."),
    honeypot: z.string().optional(),
  })
  .refine((data) => !data.honeypot, {
    message: "Spam detected.",
    path: ["honeypot"],
  });

export type ContactFormInput = z.input<typeof contactSchema>;
export type ContactFormValues = z.output<typeof contactSchema>;
