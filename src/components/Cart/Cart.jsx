import React from 'react'

const Cart = ({ cart, setCart, setView, view }) => {

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index)
    setCart(newCart)
  }

  const proceedToCheckout = () => {
    setCart([])
    alert("Thank you for your purchase!")
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className='mt-10 max-w-[600px] mx-auto p-4'>

 {/* <div className='flex justify-center gap-4 mb-6'>
        <button 
          onClick={() => setView("products")}
          className="px-4 py-2 bg-gray-200 rounded-full"
        >
           Back to Products
        </button>

        <button className='px-4 py-2 bg-gray-200 rounded-full'>
          Cart ({cart.length})
        </button>
      </div> */}

      <div className='flex justify-center gap-4 mb-6'>
  {/* Products Tab */}
  <button 
    onClick={() => setView("products")}
    className={`px-4 py-2 rounded-full font-bold transition ${
      view === "products"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        : "bg-gray-200 text-gray-700"
    }`}
  >
    Products
  </button>

  {/* Cart Tab */}
  <button 
    onClick={() => setView("cart")}
    className={`px-4 py-2 rounded-full font-bold transition ${
      view === "cart"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        : "bg-gray-200 text-gray-700"
    }`}
  >
    Cart ({cart.length})
  </button>
</div>






<div className='border border-1 border-gray-100 p-10 shadow-2xl rounded-2xl'>

      <h2 className='text-2xl font-bold mb-6 '>Your Cart</h2>

      {cart.length === 0 ? (
        <p className='text-gray-500 text-center text-lg'>🛒<br></br> Your cart is empty</p>
      ) : (
        <div className='space-y-4'>

          
          {cart.map((item, index) => (
            <div key={index} className='flex items-center justify-between bg-gray-100 rounded-lg p-3 shadow-sm'>
              
              <div className='flex items-center gap-3'>
                <img src={item.icon} alt={item.name} className='h-10 w-10 rounded-full bg-white p-1'/>
                <div>
                  <p className='font-medium'>{item.name}</p>
                  <p className='text-gray-500'>${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeItem(index)}
                className='text-pink-500 hover:underline font-medium'
              >
                Remove
              </button>
            </div>
          ))}

         
          <div className='flex justify-between mt-4 font-bold text-lg'>
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>

          
          <button
            onClick={proceedToCheckout}
            className='w-full mt-4 py-3 rounded-full text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition'
          >
            Proceed To Checkout
          </button>

        </div>
        
      )}
      </div>
    </div>
  )
}

export default Cart