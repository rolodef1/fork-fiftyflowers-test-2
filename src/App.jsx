import products from "./data/products.json";
import ProductGrid from "./components/ProductGrid";

function App() {
  const categories = Array.from(
    new Set(products.map((product) => product.category).filter(Boolean))
  );
  const types = Array.from(
    new Set(products.map((product) => product.type).filter(Boolean))
  );
  return (
    <main>
      <h1 className="text-underline">Product Listing</h1>
      <ProductGrid products={products} categories={categories} types={types} />
    </main>
  );
}

export default App;
