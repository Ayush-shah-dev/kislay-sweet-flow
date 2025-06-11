
import { CheckCircle, Leaf, Droplet, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  const benefits = [
    { icon: CheckCircle, text: "Zero Glycemic Index" },
    { icon: Leaf, text: "100% Natural (No Chemicals or Preservatives)" },
    { icon: CheckCircle, text: "Gut & Hormone Friendly" },
    { icon: Zap, text: "Heat-Stable (Ideal for hot drinks & baking)" },
    { icon: Droplet, text: "No Bitter or Cooling Aftertaste" },
    { icon: CheckCircle, text: "Rich in Antioxidants (Mogrosides)" }
  ];

  const products = [
    { size: "10 ml", price: "₹149", popular: false },
    { size: "30 ml", price: "₹399", popular: true },
    { size: "50 ml", price: "₹599", popular: false }
  ];

  const comparisonData = [
    {
      feature: "Source",
      monkFruit: "Natural Fruit",
      stevia: "Plant",
      erythritol: "Fermented",
      sugar: "Cane/Beet",
      artificial: "Synthetic"
    },
    {
      feature: "Calories per Serving",
      monkFruit: "0",
      stevia: "0",
      erythritol: "0.2",
      sugar: "High",
      artificial: "0"
    },
    {
      feature: "Glycemic Index",
      monkFruit: "0",
      stevia: "0",
      erythritol: "0",
      sugar: "High",
      artificial: "0"
    },
    {
      feature: "Taste Profile",
      monkFruit: "Clean, Sweet",
      stevia: "Bitter aftertaste",
      erythritol: "Cooling aftertaste",
      sugar: "Familiar",
      artificial: "Often chemical"
    },
    {
      feature: "Gut Friendliness",
      monkFruit: "✅ No bloating",
      stevia: "Neutral",
      erythritol: "❌ Bloating in some",
      sugar: "❌ May cause gas",
      artificial: "✅ Mostly okay"
    },
    {
      feature: "Safe for Diabetics",
      monkFruit: "✅ Yes",
      stevia: "✅ Yes",
      erythritol: "✅ Yes",
      sugar: "❌ No",
      artificial: "✅ Yes (some debate)"
    },
    {
      feature: "Antioxidants",
      monkFruit: "✅ Yes (mogrosides)",
      stevia: "❌ No",
      erythritol: "❌ No",
      sugar: "❌ No",
      artificial: "❌ No"
    },
    {
      feature: "Heat Stability",
      monkFruit: "✅ Yes",
      stevia: "✅ Yes",
      erythritol: "✅ Yes",
      sugar: "✅ Yes",
      artificial: "⚠️ Some degrade"
    },
    {
      feature: "Aftertaste",
      monkFruit: "❌ None",
      stevia: "❌ Bitter",
      erythritol: "❌ Cooling",
      sugar: "❌ Sugar rush",
      artificial: "⚠️ Often artificial"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Leaf className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Kaslay Naturals
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            "Sweetness Without the Spike"
          </p>
          <WhatsAppButton 
            text="Order on WhatsApp" 
            size="large"
            className="shadow-lg"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Monk Fruit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <benefit.icon className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blood Sugar Test Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Real Blood Sugar Test Results
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Results after consuming lemon water:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4">With Sugar</h3>
              <div className="text-3xl font-bold text-red-600">
                94 → 100 mg/dL
              </div>
              <div className="text-red-700 mt-2">↑ 6 points increase</div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">With Monk Fruit</h3>
              <div className="text-3xl font-bold text-green-600">
                89 → 85 mg/dL
              </div>
              <div className="text-green-700 mt-2">↓ 4 points decrease</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Size
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className={`relative bg-white border-2 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow ${
                product.popular ? 'border-green-500 scale-105' : 'border-gray-200'
              }`}>
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-2xl font-bold text-gray-900 mb-2">{product.size}</div>
                <div className="text-3xl font-bold text-green-600 mb-6">{product.price}</div>
                <WhatsAppButton 
                  text="Order Now" 
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            All prices inclusive of GST
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Monk Fruit Compares
          </h2>
          
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-center bg-green-700">Monk Fruit (Kaslay)</th>
                  <th className="px-4 py-3 text-center">Stevia</th>
                  <th className="px-4 py-3 text-center">Erythritol</th>
                  <th className="px-4 py-3 text-center">Sugar</th>
                  <th className="px-4 py-3 text-center">Artificial Sweeteners</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-4 py-3 text-center font-medium text-green-700 bg-green-50">{row.monkFruit}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.stevia}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.erythritol}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.sugar}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.artificial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              💧 Kaslay Naturals offers the cleanest, most natural sweetener without compromise.
            </p>
            <WhatsAppButton 
              text="Order Your Bottle Today" 
              size="large"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
