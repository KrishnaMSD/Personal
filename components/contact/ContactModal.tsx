"use client";

import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import { submitContact } from "@/app/actions/submitContact";
import { contactSchema, type ContactFormInput } from "@/lib/validation/contact";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
      honeypot: "",
    },
  });

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const onSubmit = handleSubmit(async (values) => {
    const result = await submitContact(values);

    if (!result.success) {
      const { error } = result;
      if ("general" in error) {
        toast.error(error.general.join(" "));
        return;
      }

      const fieldErrors = error as Record<string, string[]>;
      Object.entries(fieldErrors).forEach(([field, messages]) => {
        if (Array.isArray(messages) && messages.length > 0) {
          toast.error(`${field}: ${messages[0]}`);
        }
      });
      return;
    }

    toast.success("Thanks! I will reach out within one business day.");
    reset();
    onClose();
  });

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4 py-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="surface-card w-full max-w-lg rounded-[2rem] border border-white/5 p-8 shadow-md">
                <Dialog.Title className="text-2xl font-semibold text-foreground">Let&apos;s collaborate</Dialog.Title>
                <p className="mt-2 text-sm text-muted">
                  Share a bit about the problem you&apos;re tackling. I typically reply within 24 hours.
                </p>

                <form className="mt-6 space-y-5" onSubmit={onSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...register("name")}
                      className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-subtle focus-visible:focus-ring"
                    />
                    {errors.name && <p className="text-xs text-danger">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-subtle focus-visible:focus-ring"
                    />
                    {errors.email && <p className="text-xs text-danger">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-sm font-semibold text-foreground">
                      Mobile (optional)
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      autoComplete="tel"
                      {...register("mobile")}
                      className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-subtle focus-visible:focus-ring"
                    />
                    {errors.mobile && <p className="text-xs text-danger">{errors.mobile.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                      How can I help?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-subtle focus-visible:focus-ring"
                    />
                    {errors.message && <p className="text-xs text-danger">{errors.message.message}</p>}
                  </div>

                  <div className="sr-only">
                    <label htmlFor="company" className="text-sm">
                      Company
                    </label>
                    <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs text-subtle">
                    <span>Protected with spam honeypot &amp; rate limiting.</span>
                    <span>WCAG 2.1 AA compliant form.</span>
                  </div>

                  <div className="flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-muted hover:border-accent/40 hover:text-foreground"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending…" : "Send message"}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
