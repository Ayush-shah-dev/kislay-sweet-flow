
import { useEffect, useState } from 'react';
import { CheckCircle, Leaf, Droplet, Zap, Shield, Star, Sparkles, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { icon: CheckCircle, text: "Zero Glycemic Index", description: "Perfect for diabetics and health-conscious individuals" },
    { icon: Leaf, text: "100% Natural", description: "No chemicals, preservatives, or artificial additives" },
    { icon: Shield, text: "Gut & Hormone Friendly", description: "Supports digestive health and hormonal balance" },
    { icon: Zap, text: "Heat-Stable", description: "Ideal for hot drinks, baking, and cooking" },
    { icon: Droplet, text: "No Aftertaste", description: "Clean, pure sweetness without bitter or cooling effects" },
    { icon: Sparkles, text: "Rich in Antioxidants", description: "Contains powerful mogrosides for cellular health" }
  ];

  const products = [
    { size: "10 ml", price: "₹149", popular: false, servings: "120-150" },
    { size: "30 ml", price: "₹399", popular: true, servings: "360-450" },
    { size: "50 ml", price: "₹599", popular: false, servings: "600-750" }
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/060ca6d9-94d7-460f-97ec-3fc9cc926e49.png" 
                  alt="Kislay Naturals" 
                  className="h-32 w-auto transition-all duration-500 group-hover:scale-110 float"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up delay-200">
              <span className="text-gradient text-glow">Kislay</span>
              <br />
              <span className="text-foreground">Naturals</span>
            </h1>
            
            <div className="mb-8 animate-slide-up delay-300">
              <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
                "Sweetness Without the Spike"
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the future of natural sweetening with our premium liquid monk fruit extract
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-400">
              <WhatsAppButton 
                text="Order Now" 
                size="large"
                variant="primary"
                className="glow-pulse"
              />
              <WhatsAppButton 
                text="Learn More" 
                size="large"
                variant="secondary"
              />
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-bounce-gentle delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/20 rounded-full animate-bounce-gentle delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-bounce-gentle delay-3000"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 animate-slide-up">
              Why Choose Monk Fruit?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up delay-200">
              Discover the revolutionary benefits of nature's most advanced sweetener
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`glass-card hover-lift group animate-slide-up`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center glow group-hover:glow-strong transition-all duration-300">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {benefit.text}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blood Sugar Test Section */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8 animate-slide-up">
            Real Blood Sugar Test Results
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-slide-up delay-200">
            Scientific proof: Results after consuming lemon water
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card border-destructive/30 hover-lift animate-slide-up delay-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-destructive mb-4">With Sugar</h3>
                <div className="text-4xl font-bold text-destructive mb-4 text-glow">
                  94 → 100 mg/dL
                </div>
                <div className="flex items-center justify-center space-x-2 text-destructive-foreground bg-destructive/20 rounded-lg px-4 py-2">
                  <ArrowRight className="h-5 w-5 rotate-45" />
                  <span className="font-medium">6 points increase</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card border-primary/30 hover-lift animate-slide-up delay-400">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">With Monk Fruit</h3>
                <div className="text-4xl font-bold text-primary mb-4 text-glow">
                  89 → 85 mg/dL
                </div>
                <div className="flex items-center justify-center space-x-2 text-primary-foreground bg-primary/20 rounded-lg px-4 py-2">
                  <ArrowRight className="h-5 w-5 rotate-[-135deg]" />
                  <span className="font-medium">4 points decrease</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 animate-slide-up">
              Choose Your Size
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-up delay-200">
              Premium quality in every drop
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`relative glass-card hover-lift transition-all duration-500 animate-slide-up ${
                  product.popular ? 'border-primary glow scale-105' : 'border-border/50'
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 glow">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">{product.size}</div>
                  <div className="text-sm text-muted-foreground mb-4">{product.servings} servings</div>
                  <div className="text-4xl font-bold text-gradient mb-6">{product.price}</div>
                  
                  <WhatsAppButton 
                    text="Order Now" 
                    className="w-full"
                    variant={product.popular ? "accent" : "primary"}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 animate-slide-up delay-700">
            All prices inclusive of GST • Free shipping across India
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 animate-slide-up">
              How Monk Fruit Compares
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-up delay-200">
              See why monk fruit stands above the rest
            </p>
          </div>
          
          <div className="glass-card overflow-hidden animate-slide-up delay-300">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold bg-primary/20 relative">
                      <div className="absolute inset-0 bg-gradient-accent opacity-20"></div>
                      <span className="relative">Monk Fruit (Kislay)</span>
                    </th>
                    <th className="px-6 py-4 text-center font-medium">Stevia</th>
                    <th className="px-6 py-4 text-center font-medium">Erythritol</th>
                    <th className="px-6 py-4 text-center font-medium">Sugar</th>
                    <th className="px-6 py-4 text-center font-medium">Artificial Sweeteners</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={`border-b border-border/30 ${index % 2 === 0 ? 'bg-background/50' : 'bg-background/30'} hover:bg-primary/5 transition-colors`}>
                      <td className="px-6 py-4 font-semibold text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 text-center font-bold text-primary bg-primary/10 relative">
                        <div className="inline-flex items-center justify-center space-x-1">
                          <span>{row.monkFruit}</span>
                          {row.monkFruit.includes('✅') && <Sparkles className="h-4 w-4 text-accent" />}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row.stevia}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row.erythritol}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row.sugar}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">{row.artificial}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-slide-up delay-500">
            <p className="text-xl text-foreground mb-6 flex items-center justify-center space-x-2">
              <Droplet className="h-6 w-6 text-primary" />
              <span>Kislay Naturals offers the cleanest, most natural sweetener without compromise.</span>
              <Sparkles className="h-6 w-6 text-accent" />
            </p>
            <WhatsAppButton 
              text="Order Your Bottle Today" 
              size="large"
              variant="accent"
              className="glow-pulse"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
