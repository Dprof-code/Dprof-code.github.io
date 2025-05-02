import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
    "Web Applications",
    "E-commerce Website",
    "Coaching Website",
    "Corporate Website",
    "Crypto Website",
    "Web3 Website"
];

export const MorphingText = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % texts.length;
                setDirection(prevIndex > nextIndex ? -1 : 1);
                return nextIndex;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[1.3em] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ rotateX: -90 * direction, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: 90 * direction, opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="text-accent absolute left-0 right-0"
                >
                    {texts[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};