import { useForm } from "react-hook-form";
import { TProduct } from "../data/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ProductSchema = z.object({
  id: z.number(),
  title: z.string().min(5).max(50),
  price: z.coerce.number().min(50).max(10000),
  category: z.enum(["clothing", "electronics"]),
  description: z.string(),
  image: z.string(),
});

export function EditProductForm({
  selectedProduct,
  afterProductUpdate,
}: {
  selectedProduct: TProduct;
  afterProductUpdate: (updatedData: TProduct) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    defaultValues: {
      id: selectedProduct.id,
      title: selectedProduct.title,
      price: selectedProduct.price,
      category: selectedProduct.category,
      description: selectedProduct.description,
      image: selectedProduct.image,
    },
    resolver: zodResolver(ProductSchema),
    mode: "all",
  });

  const onSubmit = (data: TProduct) => {
    console.log("submit data", data);

    /**
     * send request to the server to update the data
     */
    fetch(`https://fakestoreapi.com/products/${data.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image,
        category: data.category,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        /**
         * update the data on the ui as well
         */
        afterProductUpdate(data);
      });
  };

  console.error("validation error", errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" {...register("title")} />
          {errors.title && (
            <span
              style={{
                color: "red",
              }}
            >
              {errors.title.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            defaultValue=""
            id="price"
            type="number"
            {...register("price")}
          />
          {errors.price && (
            <span
              style={{
                color: "red",
              }}
            >
              {errors.price.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="category">Category</label>

          <input defaultValue="" id="category" {...register("category")} />
          {errors.category && (
            <span
              style={{
                color: "red",
              }}
            >
              {errors.category.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="description">Description</label>

          <textarea
            defaultValue=""
            id="description"
            {...register("description")}
          />
          {errors.description && (
            <span
              style={{
                color: "red",
              }}
            >
              {errors.description.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <img
            style={{
              width: 200,
              height: 200,
            }}
            src={selectedProduct.image}
            alt="product image"
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
