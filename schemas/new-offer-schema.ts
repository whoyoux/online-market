import { z } from "zod"

export const newOfferSchema = z.object({
    title: z.string().min(3, "min 3 znaki").max(50, "max 50 znakow"),
    description: z.string().max(500, "max 500 znakow"),
    price: z.coerce.number().nonnegative("cena nie moze byc niedodatnia!").max(1_000_000, "max 1 million!"),
})