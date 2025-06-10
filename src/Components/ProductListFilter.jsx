const ProductListFilter = ({
  productFilterConfig,
  onCategoryChange,
  selectedCategory,
}) => {
  return (
    <div
      style={{
        border: "1px solid #000",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h3>Category</h3>
      {productFilterConfig.categories.length &&
        productFilterConfig.categories.map((category, index) => (
          <div
            onClick={() => onCategoryChange(prev => ({...prev, category}))}
            key={index}
            style={{
              background: `${
                selectedCategory.category == category ? "#a8a8a8" : "#f0f0f0"
              }`,
              cursor: "pointer",
              padding: "10px 14px",
            }}
          >
            <span>{category}</span>
          </div>
        ))}
    </div>
  );
};

export default ProductListFilter;
