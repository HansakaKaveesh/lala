import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Amazing quality! I love my new clothes and the prices were unbeatable.",
      name: "Jessica P.",
      role: "Fashion Blogger",
      image: "https://via.placeholder.com/100",
      rating: 5
    },
    {
      quote: "Exceptional service and the products exceeded my expectations.",
      name: "Michael R.",
      role: "Frequent Buyer",
      image: "https://via.placeholder.com/100",
      rating: 4
    },
    {
      quote: "Superb customer support and timely delivery. Highly recommend!",
      name: "Emily W.",
      role: "Eco-Conscious Shopper",
      image: "https://via.placeholder.com/100",
      rating: 5
    },
    {
      quote: "Top-notch quality and designs. I will definitely shop again!",
      name: "David L.",
      role: "Interior Designer",
      image: "https://via.placeholder.com/100",
      rating: 5
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-100/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 -right-20 w-64 h-64 bg-emerald-100/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 mb-4">
            <FaQuoteLeft className="inline-block mr-3 -mt-2 text-blue-500" />
            Voices of Satisfaction
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who transformed their shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 overflow-hidden animate-card-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Rating stars */}
              <div className="absolute top-4 right-4 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'fill-gray-200'}`} />
                ))}
              </div>

              <CardHeader className="pb-0">
                <div className="flex items-center gap-4 p-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <FaQuoteLeft className="text-3xl text-blue-500/30 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  {testimonial.quote}
                </p>
              </CardContent>

              <CardFooter className="border-t border-gray-100 bg-gray-50/30 px-6 py-4">
                <div className="text-sm text-gray-500">
                  Verified Purchase · April 2024
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}