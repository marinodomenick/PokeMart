import React from "react";
import useCart from "../Hooks/useCart";

// export default function Cart() {
//   const { cartItems } = useCart();
//   console.log(cartItems, "big win here");
//   console.log(cartItems);
//   return (
//     <>
//       <div>
//         {cartItems.map((item, index) => {
//           return (
//             <div className="wrapper">
//               <h4 key={`Key: ${index}`} className="itemCard">
//                 <div>
//                   {item.userId} <img id={item.id} src={item.imgUrl} />
//                 </div>
//                 <div>Price: {item.totalPrice}₽</div>
//               </h4>
//               {item.orderitems.map((orderitem, index) => {
//                 return (
//                   <>
//                     <h4>{orderitem.itemId}</h4>
//                     <h4>break</h4>
//                   </>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

export default function Cart() {
  const { cartItems } = useCart();
  console.log(cartItems, "big win here");
  console.log(cartItems);
  return (
    <>
      <div>
        {cartItems.map((item, index) => {
          return (
            <div className="wrapper">
              <h4 key={`Key: ${index}`} className="itemCard">
                <div>
                  Your UserId:{item.userId}{" "}
                  <img id={item.id} src={item.imgUrl} />
                </div>
                <div>Total: {item.totalPrice}₽</div>
                {item.orderitems.map((orderitem, index) => {
                  return (
                    <>
                      <p>
                        Item:{orderitem.itemId} Quantity:{orderitem.quantity}
                      </p>
                    </>
                  );
                })}
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
