import { BaseLayout } from "../components/base-layout";
import { ProductList } from "../components/products-list";
import { useAuth } from "../store/authentication";

export function DashboardPage() {
  const auth = useAuth();

  if (auth.isLoggedIn) {
    return (
      <BaseLayout>
        <div>
          <ProductList />
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <p>You are not logged in. Please login to see the dashboard.</p>
    </BaseLayout>
  );
}
