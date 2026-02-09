import { useState } from "react";

export default function ProductGrid({ products, categories, types }) {

  var filteredProducts = products;

  const [selectedCategory, setSelectedCategory] = useState("");

  filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const [selectedType, setSelectedType] = useState("");

  filteredProducts = selectedType
    ? filteredProducts.filter((product) => product.type === selectedType)
    : filteredProducts;

  const [selectedOrder, setSelectedOrder] = useState("");

  if (selectedOrder === "price-asc") {
    filteredProducts = filteredProducts.slice().sort((a, b) => a.price - b.price);
  } else if (selectedOrder === "price-desc") {
    filteredProducts = filteredProducts.slice().sort((a, b) => b.price - a.price);
  }

  return (
    <section aria-labelledby="filters-heading">
      <div>
        <h2 className="text-underline" id="filters-heading">Filters</h2>
        <fieldset className="grid card">
          <legend className="sr-only">Filters</legend>
          <div className="grid">
            <label htmlFor="category-filter" className="text-underline"> Category: </label>
            <select
              name="category"
              id="category-filter"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="grid">
            <label htmlFor="type-filter" className="text-underline"> Type: </label>
            <select
              name="type"
              id="type-filter"
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
            >
              <option value="">All</option>
              {types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </fieldset>
      </div>
      <div>
        <div className="grid-header ma-4">
          <p role="status" aria-live="polite" className="text-underline">
            {filteredProducts.length} products available.
          </p>
          <div className="flex-column gap-1">
            <label htmlFor="orderBy"> Order by: </label>
            <select
              name="orderBy"
              id="orderBy"
              value={selectedOrder}
              onChange={(event) => setSelectedOrder(event.target.value)}
            >
              <option value="">None</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 && (
          <ul className="grid">
            {filteredProducts.map((product) => (
              <li key={product.id} className="card">
                <h2 className="card-title">{product.name || "Unnamed Product"}</h2>
                <p>{product.price ? "$" + product.price.toFixed(2) : "Price not available"}</p>

                {!product.inStock && (
                  <p className="out-of-stock">Out of stock</p>
                )}

                {product.inStock && (
                  <p className="in-stock">In stock</p>
                )}

                {product.badge && (
                  <span className="badge">{product.badge}</span>
                )}
              </li>
            ))}
          </ul>
        )}

        {filteredProducts.length === 0 && (
          <fieldset className="card center">
            <p role="status" aria-live="polite">
              No results to display.
            </p>
          </fieldset>
        )}
      </div>
    </section>
  );
}
