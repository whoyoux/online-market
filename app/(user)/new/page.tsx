"use client";

import { newOfferSchema } from "@/schemas/new-offer-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

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
import { Textarea } from "@/components/ui/textarea";

const NewOfferPage = () => {
	const form = useForm<z.infer<typeof newOfferSchema>>({
		resolver: zodResolver(newOfferSchema),
		defaultValues: {
			title: "",
			description: "",
			price: 0,
		},
	});

	async function onSubmit(values: z.infer<typeof newOfferSchema>) {
		console.log(values);
	}
	return (
		<div className="max-w-screen-md">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<h2 className="text-2xl font-semibold">Add new offer</h2>
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="IPhone 15 Pro Max" {...field} />
								</FormControl>
								<FormDescription>
									This is your offer public display title.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Used IPhone 15 Pro Max for sell..."
										{...field}
										rows={6}
									/>
								</FormControl>
								<FormDescription>
									there is gonna be a wyswig editor, maybe like notion, idk yet
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="price"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Price</FormLabel>
								<FormControl>
									<Input
										type="number"
										{...field}
										onKeyDown={(evt) =>
											["e", "E", "+", "-"].includes(evt.key) &&
											evt.preventDefault()
										}
									/>
								</FormControl>
								<FormDescription>
									This is your offer public display price.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
};

export default NewOfferPage;
