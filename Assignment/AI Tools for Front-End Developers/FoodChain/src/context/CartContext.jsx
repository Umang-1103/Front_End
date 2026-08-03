import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // Load initial cart and user from local storage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('foodchain_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('foodchain_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('foodchain_theme');
    return savedTheme ? savedTheme : 'dark';
  });

  // Persist theme to localStorage and HTML root element
  useEffect(() => {
    localStorage.setItem('foodchain_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Persist cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('foodchain_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Persist user to localStorage when session changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('foodchain_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('foodchain_user');
    }
  }, [user]);

  // Cart operations
  const addToCart = (item, quantity = 1) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      toast.info(`Increased ${item.name} quantity in cart.`);
      setCartItems((prevItems) =>
        prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      );
    } else {
      toast.success(`${item.name} added to cart!`);
      setCartItems((prevItems) => [...prevItems, { ...item, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    const item = cartItems.find((i) => i.id === id);
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
    if (item) {
      toast.warn(`${item.name} removed from cart.`);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Auth operations
  const login = (userData) => {
    setUser(userData);
    toast.success(`Welcome back, ${userData.name}!`);
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully.');
  };

  // Calculated values
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        user,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        login,
        logout,
        theme,
        toggleTheme,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
