import { useForm } from "react-hook-form";
import { TProduct } from "../data/product";

export function EditProductForm({
  selectedProduct,
}: {
  selectedProduct: TProduct;
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
  });

  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input defaultValue="" id="title" {...register("title")} />
          {errors.title && <span>Error in title field</span>}
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            defaultValue=""
            id="price"
            type="number"
            {...register("price")}
          />
          {errors.price && <span>Error in title field</span>}
        </div>

        <div>
          <label htmlFor="category">Category</label>

          <input defaultValue="" id="category" {...register("category")} />
          {errors.category && <span>Error in title field</span>}
        </div>

        <div>
          <label htmlFor="description">Description</label>

          <textarea
            defaultValue=""
            id="description"
            {...register("description")}
          />
          {errors.description && <span>Error in title field</span>}
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
