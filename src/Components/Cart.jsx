import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCartDetails = async () => {
      const responce = await fetch("https://dummyjson.com/carts/4");
      const data = await responce.json();
      setCart(data);
      console.log(data);
    };

    fetchCartDetails();
    console.log("useeffect called");
  }, []);

  return (
    <div style={{ display: "flex", padding: "40px" }}>
      <div style={Cart_details}>
        <h2>Cart</h2>
        <CartItem cart={cart} />
      </div>
      <div style={Cart_summery}></div>
    </div>
  );
};

export default Cart;

const Cart_details = {
  width: "70%",
};

const Cart_summery = {
  width: "30%",
  background: "skyblue",
};

const CartItem = ({ cart }) => {
  const { products } = cart;
  console.log(products?.length);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {products?.length > 0 ? (
        <>
          {products.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap:'100px',
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    background: "#f0f0f0",
                    borderRadius: "10px",
                    marginRight: "10px",
                  }}
                  width={50}
                  height={50}
                  src={item.thumbnail}
                  alt={item.title}
                />
                <span>{item.title}</span>
              </div>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:"flex", alignItems:'center', justifyContent:'space-between'}}>
                  <span>-</span>
                  <span>{item.quantity}</span>
                  <span>+</span>
                </div>

                <div>
                  <span>{item.price}</span>
                </div>

                <div>
                  <span>{item.total}</span>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>Empty Cart</>
      )}
    </div>
  );
};
