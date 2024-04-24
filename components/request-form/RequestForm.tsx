"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  full_name: z.string().min(2, { message: "Enter full name" }).max(50),
  email: z
    .string()
    .min(2, { message: "Enter Email" })
    .max(50)
    .email({ message: "Enter Valid Email" }),
  gender: z.string().min(2, { message: "Select Gender" }).max(50),
  age: z.string().min(2, { message: "Select Age" }).max(50),
  state: z.string().min(2, { message: "Select Age" }).max(50),
  country: z.string().min(2, { message: "Select Age" }).max(50),
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
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
              {/* Gender */}

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Gender</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger className="w-full bg-transparent">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-800 text-white border-none">
                          <SelectItem value="male" className="hover:bg-black">
                            Male
                          </SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Age */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Age</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full bg-transparent">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-neutral-800 text-white border-none">
                          <SelectItem value="18-25" className="hover:bg-black">
                            18-25
                          </SelectItem>
                          <SelectItem value="26-45">26-45</SelectItem>
                          <SelectItem value="46-65">46-65</SelectItem>
                          <SelectItem value="66-85">66-85</SelectItem>
                          <SelectItem value="86-100">86-100</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Country */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
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
              {/* state */}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State/Province</FormLabel>
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
              <Button
                type="submit"
                className="capitalize bg-red-800 block w-full hover:bg-red-500"
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
