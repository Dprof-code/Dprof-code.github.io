import { motion } from "framer-motion";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Reveal from "./Reveal";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "CEO, TechStart Solutions",
            image_url: "/headshots/Adedamola_Abraham_Olawale.webp",
            quote: "Abraham delivered an exceptional e-commerce website that exceeded our expectations. The attention to detail and modern design helped increase our online sales by 40% within the first month.",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Founder, Digital Marketing Agency",
            image_url: "/headshots/Adedamola_Abraham_Olawale.webp",
            quote: "Working with Abraham was a game-changer for our business. He built a responsive, fast-loading website that perfectly captures our brand identity. His expertise in both frontend and backend development is impressive.",
            rating: 5
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section id="testimonials" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl text-accent-2 lg:text-5xl font-bold font-playfair mb-4">
                        Clients <span style={{ color: '#f25a38' }}>Thoughts</span>
                    </h2>
                    <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#f25a38' }}></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Don&apos;t just take our word for it - here&apos;s what our satisfied clients have to say
                    </p>
                </motion.div>

                {/* Desktop Grid View */}
                <div className="hidden md:block">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.slice(0, showAll ? testimonials.length : 6).map((testimonial, index) => (
                            <Reveal key={testimonial.id} side={index % 2 === 0 ? "left" : "right"}>
                                <TestimonialCard testimonial={testimonial} />
                            </Reveal>
                        ))}
                    </div>

                    {testimonials.length > 6 && (
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            className="mx-auto mt-12 px-8 py-4 bg-accent text-primary font-semibold rounded-lg 
                                            hover:bg-secondary transition-all duration-300 flex items-center gap-2
                                            shadow-lg hover:shadow-secondary/20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {showAll ? (
                                <>
                                    Show Less
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    View All Testimonials
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </>
                            )}
                        </motion.button>
                    )}
                </div>

                {/* Mobile Carousel View */}
                <div className="md:hidden">
                    <div className="relative">
                        <TestimonialCard testimonial={testimonials[currentIndex]} />

                        {/* Navigation Buttons */}
                        {testimonials.length > 1 && (
                            <div className="flex justify-center gap-4 mt-8">
                                <motion.button
                                    onClick={prevTestimonial}
                                    className="p-3 bg-primary/30 text-white rounded-lg border border-secondary/20
                                                     hover:bg-secondary/20 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </motion.button>

                                <motion.button
                                    onClick={nextTestimonial}
                                    className="p-3 bg-primary/30 text-white rounded-lg border border-secondary/20
                                                     hover:bg-secondary/20 transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.button>
                            </div>
                        )}

                        {/* Dots Indicator */}
                        {testimonials.length > 1 && (
                            <div className="flex justify-center gap-2 mt-6">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-accent w-8' : 'bg-gray-500'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;