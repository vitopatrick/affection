"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  full_name: z.string().min(2, { message: "Enter full name" }).max(50),
  email: z
    .string()
    .min(2, { message: "Enter Email" })
    .max(50)
    .email({ message: "Enter Valid Email" }),
  about: z.string().min(2, { message: "Enter full name" }).max(50),
});

export default function RequestForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // call the api
    try {
      await fetch("/api/", {
        method: "POST",
        body: JSON.stringify({
          ...values,
        }),
      });

      return toast.success("request sent");
    } catch (error: any) {
      return toast.error("Request Error");
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-6 place-content-center">
      {/* form */}
      <div>
        <h4 className="text-2xl lg:text-4xl">Find your Match</h4>
        <div className="mt-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-neutral-400 bg-transparent text-white p-5 focus:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-neutral-400 bg-transparent text-white p-5 focus:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* email */}
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="border border-neutral-400 bg-transparent text-white p-5 focus:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please Describe to use what you'd want in a spouse or
                      partner
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="capitalize bg-blue-800 block w-full hover:bg-blue-500"
              >
                Send A request
              </Button>
            </form>
          </Form>
        </div>
      </div>
      {/* picture */}
      <div>
        <img
          src="https://www.givitation.com/img/home-couple.c4ac31d2.png"
          alt="pciture"
        />
      </div>
    </div>
  );
}
