import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Amazing quality! I love my new clothes and the prices were unbeatable.",
      name: "Jessica P.",
      image: "https://via.placeholder.com/50", // Replace with actual image URLs
    },
    {
      quote: "Exceptional service and the products exceeded my expectations.",
      name: "Michael R.",
      image: "https://via.placeholder.com/50", // Replace with actual image URLs
    },
    {
      quote: "Superb customer support and timely delivery. Highly recommend!",
      name: "Emily W.",
      image: "https://via.placeholder.com/50", // Replace with actual image URLs
    },
    {
      quote: "Top-notch quality and designs. I will definitely shop again!",
      name: "David L.",
      image: "https://via.placeholder.com/50", // Replace with actual image URLs
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-12 lg:px-20">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-200"
                />
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 italic">{testimonial.quote}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
