import PropTypes from "prop-types";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-accent' : 'text-gray-400'
                    }`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <motion.div
            className="relative bg-primary/30 backdrop-blur-sm rounded-xl p-6 border border-secondary/20
                hover:border-secondary/50 transition-all duration-300 h-full
                group cursor-pointer"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Quote Icon */}
                <motion.div
                    className="text-accent/30 mb-4"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                </motion.div>

                {/* Testimonial Quote */}
                <blockquote className="text-gray-300 leading-relaxed flex-grow mb-6 text-sm sm:text-base">
                    &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-accent/20
                       group-hover:border-accent/50 transition-colors duration-300"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 rounded-full bg-accent/10 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <div>
                        <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-accent 
                         transition-colors duration-300">
                            {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm">
                            {testimonial.position}
                        </p>
                    </div>
                </div>

                {/* Hover Effect Line */}
                <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-secondary
                   w-0 group-hover:w-full transition-all duration-500 rounded-b-xl"
                />
            </div>
        </motion.div>
    );
};

TestimonialCard.propTypes = {
    testimonial: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quote: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default TestimonialCard;