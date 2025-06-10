import { useEffect, useState } from "react";
import ProductListFilter from "./ProductListFilter";
import StarRating from "./StarRating";
import { useCart } from "../Hooks/useCart";
import { useFilter } from "../Hooks/useFilter";

const ProductList = () => {
    const [productList, setProductList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({}); // State for selected category
    const [loading, setLoading] = useState(true); // State for loading
    const {addItemToCart, cartItems, removeItemFromCart} = useCart()
    const filteredItems = useFilter(productList, selectedCategory);

    useEffect(() => {
        const fetchProductList = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                console.log(data);
                setProductList(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchProductList();
    }, []);

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All' 
        ? productList 
        : filteredItems;

    return (
        <div className="e-commerse-container" style={{ display: 'flex', padding: '40px', gap: '10px' }}>
            <div style={{ width: '20%', display:'flex', flexDirection:'column'}}>
                <ProductListFilter 
                    productFilterConfig={productFilterConfig} 
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory} // Pass the function to update category
                />
                <Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart}/>
            </div>
            <div style={{ width: '80%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '26px' }}>
                {loading ? ( // Show loading indicator while fetching
                    <div>Loading...</div>
                ) : (
                    filteredProducts.length ? (
                        filteredProducts.map((product) => {    
                            const isInCart = cartItems.find(item => item.id == product.id);
                           return( <div key={product.id} style={{ border: '1px solid #d8d8d8', display: 'flex', padding: '10px' }}>
                                <img width={150} height={150} src={product.thumbnail} alt={product.title} />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative' }}>
                                    <span style={{ fontSize: '15px' }}>{product.title}</span>
                                    <StarRating defaultStar={Math.floor(product.rating)} />
                                    <span style={{ fontSize: '12px', background: `${product.availabilityStatus === 'In Stock' ? '#bfffbf' : '#fab3ae'}`, padding: '2px 4px', width: '56px' }}>
                                        {product.availabilityStatus}
                                    </span>
                                    <span style={{ fontSize: '14px' }}>${product.price}</span>
                                    {isInCart ?<button style={{ 
                                                    marginTop: '6px', 
                                                    border: '1px solid #d8d8d8', 
                                                    padding: '8px 12px', 
                                                    cursor:'pointer', 
                                                    borderRadius: '8px',
                                                    transition: 'background 0.3s'}}
                                                    onClick={()=>removeItemFromCart(product.id)}
                                                    > Remove from cart</button> 

                                                    : <button style={{ 
                                                    marginTop: '6px', 
                                                    border: '1px solid #d8d8d8', 
                                                    padding: '8px 12px', 
                                                    cursor:'pointer', 
                                                    borderRadius: '8px',
                                                    transition: 'background 0.3s'}}
                                                    className="cart-btn"
                                                    onClick={()=>addItemToCart(product)}
                                                    >
                                        Add to cart
                                    </button> }
                                </div>
                            </div>
                         ) })
                    ) : (
                        <>No Product Found</>
                    )
                )}
            </div>
        </div>
    );
};

export default ProductList;

const productFilterConfig = {
    categories: [
        'All',
        'beauty',
        'fragrances',
        'furniture',
        'groceries'
    ]
};

const Cart = ({cartItems, removeItemFromCart}) => {
    console.log({cartItems})
    return    <div>
    <h2>Cart</h2>
    {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
    ) : (
        cartItems.map(item => (
            <div key={item.id} style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <img width={36} height={36} src={item.thumbnail} alt={item.title} />
                <span>{item.title}</span>
                <span onClick={() =>removeItemFromCart(item.id)}>🗑️</span>
                <span>{item.quantity}</span>
            </div>
        ))
    )}
</div>
}
