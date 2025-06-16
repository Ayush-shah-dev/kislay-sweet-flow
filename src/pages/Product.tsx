
import { CheckCircle, Droplet } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Product = () => {
  const products = [
    { size: "10 ml", price: "₹149", servings: "120-150 servings" },
    { size: "30 ml", price: "₹399", servings: "360-450 servings" },
    { size: "50 ml", price: "₹599", servings: "600-750 servings" }
  ];

  const benefits = [
    "Zero calories and zero glycemic index",
    "300x sweeter than sugar - a little goes a long way",
    "Heat stable - perfect for baking and hot beverages",
    "No bitter aftertaste like stevia",
    "Rich in antioxidants called mogrosides",
    "Gut-friendly and doesn't cause bloating",
    "Safe for diabetics and keto dieters",
    "No artificial chemicals or preservatives"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Finally found a sweetener that doesn't spike my blood sugar! Perfect for my morning tea.",
      rating: 5
    },
    {
      name: "Raj Patel",
      text: "As a diabetic, this has been a game-changer. No aftertaste and works great in baking.",
      rating: 5
    },
    {
      name: "Meera Singh",
      text: "Love that it's completely natural. My whole family has switched to Kislay Naturals.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is liquid better than powder?",
      answer: "Yes! Liquid monk fruit dissolves instantly without any grittiness. It's more convenient for beverages and provides consistent sweetness without clumping."
    },
    {
      question: "How long does a 10ml bottle last?",
      answer: "A 10ml bottle provides 120-150 servings when using 3-4 drops per cup. For daily tea/coffee drinkers, this typically lasts 15-20 weeks."
    },
    {
      question: "Can I use it in tea, coffee, and baking?",
      answer: "Absolutely! Our monk fruit is heat-stable and works perfectly in hot beverages, baking, and cooking. It won't break down at high temperatures."
    },
    {
      question: "How much should I use?",
      answer: "Start with 3-4 drops per cup and adjust to taste. Remember, monk fruit is 300x sweeter than sugar, so a little goes a long way!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Liquid Monk Fruit Sweetener
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Premium quality, zero-calorie natural sweetener that's 300x sweeter than sugar. Perfect for diabetics, keto dieters, and health-conscious individuals.
              </p>
              <div className="flex items-center space-x-2 mb-6">
                <Droplet className="h-6 w-6 text-green-600" />
                <span className="text-lg font-medium text-gray-800">Serving guide: 3–4 drops per cup</span>
              </div>
              <WhatsAppButton 
                text="Order Now on WhatsApp" 
                size="large"
              />
            </div>
            <div className="lg:text-center">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                alt="Natural liquid sweetener drops"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Liquid Monk Fruit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Size
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-gray-900 mb-2">{product.size}</div>
                <div className="text-sm text-gray-600 mb-4">{product.servings}</div>
                <div className="text-3xl font-bold text-green-600 mb-6">{product.price}</div>
                <WhatsAppButton 
                  text="Order Now" 
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            All prices inclusive of GST. Free shipping across India.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Ready to make the switch to natural sweetness?
            </p>
            <WhatsAppButton 
              text="Order on WhatsApp" 
              size="large"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
