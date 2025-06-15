
import { Leaf, Heart, Users, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "We believe in the power of nature. Our monk fruit sweetener contains no artificial chemicals, preservatives, or additives."
    },
    {
      icon: Heart,
      title: "Health First",
      description: "Your wellness is our priority. We provide a sugar alternative that supports your health goals without compromising on taste."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "We're building a healthier India by making natural sweeteners accessible to families across the country."
    },
    {
      icon: Target,
      title: "Quality Promise",
      description: "Every bottle meets our strict quality standards. We test for purity, potency, and consistency to ensure the best product."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600">
            Making India sugar-smart, one drop at a time
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The Journey of Kislay Naturals</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-gray-700 mb-6">
                  Kislay Naturals was born from a simple yet powerful realization: millions of Indians are struggling with lifestyle diseases caused by excessive sugar consumption, yet they don't have access to truly natural, healthy alternatives.
                </p>
                <p className="text-gray-700 mb-6">
                  Our founder, while managing diabetes in the family, discovered the incredible benefits of monk fruit - a small green gourd that has been used for centuries in Traditional Chinese Medicine. Unlike artificial sweeteners that come with side effects, or stevia with its bitter aftertaste, monk fruit offered something revolutionary: pure sweetness from nature.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
                  alt="Natural forest"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Monk Fruit?</h3>
            <p className="text-gray-700 mb-6">
              After extensive research, we chose monk fruit because it's the only natural sweetener that delivers on every front:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>Zero impact on blood sugar levels</li>
              <li>No artificial chemicals or synthetic compounds</li>
              <li>Rich in antioxidants called mogrosides</li>
              <li>No digestive issues or bloating</li>
              <li>Clean, pure sweetness without any aftertaste</li>
              <li>Heat-stable for cooking and baking</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-8">
              We're on a mission to make India sugar-smart. Our goal is to provide every Indian household with access to premium, natural sweeteners that support their health goals without compromising on taste or convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <value.icon className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Quality Promise
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pure & Natural</h3>
                <p className="text-gray-700 mb-6">
                  Our monk fruit extract is sourced from the finest fruits and processed using gentle methods that preserve all the natural goodness and antioxidants.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rigorous Testing</h3>
                <p className="text-gray-700">
                  Every batch undergoes comprehensive testing for purity, potency, and safety. We ensure consistent quality in every drop.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">No Compromises</h3>
                <p className="text-gray-700 mb-6">
                  We never use fillers, artificial flavors, or chemical preservatives. What you get is pure monk fruit extract in its most natural form.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Sourcing</h3>
                <p className="text-gray-700">
                  We work with trusted suppliers who share our commitment to sustainable farming practices and fair trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the Natural Sweetness Revolution
          </h2>
          <p className="text-xl mb-8">
            Ready to make the switch to a healthier lifestyle? Start your journey with Kislay Naturals today.
          </p>
          <WhatsAppButton 
            text="Order on WhatsApp" 
            size="large"
            className="bg-white text-green-600 hover:bg-gray-100"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
