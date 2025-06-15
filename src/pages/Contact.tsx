
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help you on your journey to natural sweetness
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Connect
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Orders</h3>
                    <p className="text-gray-600 mb-4">
                      The fastest way to place your order and get instant support.
                    </p>
                    <div className="text-lg font-medium text-gray-900 mb-3">
                      +91 70436 30938
                    </div>
                    <WhatsAppButton 
                      text="Message Us on WhatsApp" 
                      className="mb-4"
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-2">
                      For detailed inquiries and bulk orders.
                    </p>
                    <a 
                      href="mailto:info@kislaynaturals.com" 
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      info@kislaynaturals.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Shipping</h3>
                    <p className="text-gray-600">
                      We deliver across India with fast and secure shipping. 
                      Orders are typically processed within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Response Time</h3>
                    <p className="text-gray-600">
                      WhatsApp: Instant to 2 hours<br />
                      Email: Within 24 hours<br />
                      We're here to help Monday through Saturday, 9 AM to 7 PM IST.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Answers */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Answers
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How do I place an order?</h3>
                  <p className="text-gray-600">
                    Simply click the WhatsApp button and send us a message. We'll guide you through the process and confirm your order details.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">
                    We accept bank transfers, UPI payments, and cash on delivery in select cities. Payment details will be shared via WhatsApp.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How long does shipping take?</h3>
                  <p className="text-gray-600">
                    Most orders are delivered within 3-5 business days across India. Metro cities typically receive orders within 2-3 days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Do you offer bulk discounts?</h3>
                  <p className="text-gray-600">
                    Yes! Contact us via WhatsApp or email for special pricing on orders of 10+ bottles.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is there a return policy?</h3>
                  <p className="text-gray-600">
                    We offer a satisfaction guarantee. If you're not completely happy with your purchase, contact us within 7 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who have made the switch to natural sweetness.
          </p>
          <WhatsAppButton 
            text="Start Your Order on WhatsApp" 
            size="large"
            className="bg-white text-green-600 hover:bg-gray-100"
          />
          <p className="mt-4 text-green-100">
            Quick response • Secure ordering • Fast delivery
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
