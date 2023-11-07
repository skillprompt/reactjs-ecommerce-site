import z from "zod";

const product = {
  id: 1,
  title: "one product afhjhafjkah hfakjh",
  price: 100,
  email: "test@test.com",
  tags: ["electronic", "clothing"],
};

const ProductSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(5)
    .transform((v) => v.slice(0, 20)),
  price: z.number().min(50).max(1000),
  // price: z.string().transform((v) => Number(v)),
  email: z.string().email(),
  tags: z.array(z.enum(["electronic", "clothing"])).optional(),
});

export function ZodPage() {
  const isValidData = ProductSchema.safeParse(product);
  if (isValidData.success) {
    return <div>Valid data {JSON.stringify(isValidData.data, null, 2)}</div>;
  }

  return <p>Invalid Data {JSON.stringify(isValidData.error, null, 2)}</p>;
}
