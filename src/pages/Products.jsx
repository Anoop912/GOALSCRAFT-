import { useState, useEffect } from 'react';
import { 
  Milk, 
  Beef, 
  Cookie, 
  Coffee, 
  IceCream, 
  ShoppingCart,
  Star,
  Truck,
  Shield,
  Heart,
  ChevronRight,
  CircleStar
} from 'lucide-react';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', icon: Milk },
    { id: 'dairy', name: 'Dairy', icon: Milk },
    { id: 'cheese', name: 'Cheese', icon: Beef },
    { id: 'butter', name: 'Butter & Ghee', icon: Cookie },
    { id: 'icecream', name: 'Ice Cream', icon: IceCream },
    { id: 'processed', name: 'Processed', icon: Coffee },
     { id: 'Gold', name: 'Gold', icon: CircleStar },
  ];

  const products = [
    {
      id: 1,
      name: "Fresh Cow Milk",
      category: "dairy",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
      description: "Pure, farm-fresh milk packed with essential nutrients.",
      price: "₹52/L",
      rating: 4.8,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Buffalo Milk",
      category: "dairy",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
      description: "Rich and creamy buffalo milk, perfect for traditional recipes.",
      price: "₹68/L",
      rating: 4.7,
      badge: "Premium"
    },
    {
      id: 3,
      name: "Aged Cheddar Cheese",
      category: "cheese",
      image: "https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80",
      description: "Sharp and flavorful cheddar, aged to perfection.",
      price: "₹320/250g",
      rating: 4.9,
      badge: "Artisanal"
    },
    {
      id: 4,
      name: "Mozzarella Cheese",
      category: "cheese",
      image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Soft and stretchy mozzarella, perfect for pizzas and salads.",
      price: "₹280/200g",
      rating: 4.6,
      badge: "Fresh"
    },
    {
      id: 5,
      name: "Cultured Butter",
      category: "butter",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Rich, European-style cultured butter with a tangy flavor.",
      price: "₹180/500g",
      rating: 4.8,
      badge: "Popular"
    },
    {
      id: 6,
      name: "Pure Cow Ghee",
      category: "butter",
      image: "https://images.unsplash.com/photo-1628088069254-d97fdd1f5f8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Traditional clarified butter, made from pure cow milk.",
      price: "₹450/500ml",
      rating: 4.9,
      badge: "Premium"
    },
    {
      id: 7,
      name: "Vanilla Bean Ice Cream",
      category: "icecream",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Creamy vanilla ice cream with real vanilla bean specks.",
      price: "₹220/500ml",
      rating: 4.7,
      badge: "Favorite"
    },
    {
      id: 8,
      name: "Chocolate Brownie Ice Cream",
      category: "icecream",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Rich chocolate ice cream loaded with brownie chunks.",
      price: "₹250/500ml",
      rating: 4.9,
      badge: "New"
    },
    {
      id: 9,
      name: "Paneer (Indian Cottage Cheese)",
      category: "processed",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixmlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Fresh, soft paneer perfect for curries and snacks.",
      price: "₹120/200g",
      rating: 4.8,
      badge: "Fresh"
    },
    {
      id: 10,
      name: "Flavored Yogurt",
      category: "dairy",
      image: "https://images.unsplash.com/photo-1571212515416-fdf01fc7434f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Creamy yogurt in mango and strawberry flavors.",
      price: "₹60/100g",
      rating: 4.5,
      badge: "Kids Favorite"
    },
    {
      id: 11,
      name: "Parmesan Cheese",
      category: "cheese",
      image: "https://images.unsplash.com/photo-1553450517-169580eb5828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Aged parmesan, perfect for grating over pasta.",
      price: "₹380/200g",
      rating: 4.8,
      badge: "Imported Style"
    },
    {
      id: 12,
      name: "Processed Cheese Slices",
      category: "processed",
      image: "https://images.unsplash.com/photo-1612977512046-2bfc00a8b7f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      description: "Convenient cheese slices for sandwiches and burgers.",
      price: "₹90/10 slices",
      rating: 4.4,
      badge: "Value Pack"
    },
     {
      id: 13,
      name: "Gold Biscuit",
      category: "Gold",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxKxtVNFmLyeHr9Jaftd_pzgAzcnsavynnQ&s",
      description: "Gold Biscuits for sales",
      price: "10g 22-karat ₹1,44,909",
      rating: 4.4,
      badge: "Value Pack"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Dairy Products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60"></div>
        </div>

        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            Discover our range of premium dairy and processed food products
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Products Count */}
          <div className="mb-8 flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span> products
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="bg-white p-3 rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-600 hover:text-white">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button className="bg-white p-3 rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-100 hover:bg-green-600 hover:text-white">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">{product.rating}</span>
                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 border-t pt-3">
                    <div className="flex items-center gap-1">
                      <Truck className="w-3 h-3" />
                      <span>Free delivery</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      <span>Quality assured</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="group inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Load More Products
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by <span className="text-green-600">Category</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="group text-center p-6 rounded-xl bg-gray-50 hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-white group-hover:bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 group-hover:text-green-100 transition-colors duration-300">
                    12+ items
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-sm text-green-100">On orders above ₹500</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-green-100">100% fresh products</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Best Prices</h3>
              <p className="text-sm text-green-100">Direct from farm</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Customer Love</h3>
              <p className="text-sm text-green-100">4.8 average rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;