import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TechStack from "./TechStack";
import Reveal from "./Reveal";
import { techStacksService } from "../services/dataService";

const TechStacks = () => {
  const [techStacks, setTechStacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tech stacks from Supabase
  useEffect(() => {
    const fetchTechStacks = async () => {
      try {
        setLoading(true);
        const { data, error } = await techStacksService.getAll();

        if (error) {
          throw new Error(error);
        }

        setTechStacks(data || []);
      } catch (err) {
        console.error('Error fetching tech stacks:', err);
        setError(err.message);
        // Fallback to hardcoded data if Supabase fails
        setTechStacks([
          { id: 1, name: "WordPress", image_url: "/tech-stacks/wordpress.webp", category: "CMS", display_order: 1 },
          { id: 2, name: "React", image_url: "/tech-stacks/react.webp", category: "Frontend", display_order: 2 },
          { id: 3, name: "PHP", image_url: "/tech-stacks/php.webp", category: "Backend", display_order: 3 },
          { id: 4, name: "JavaScript", image_url: "/tech-stacks/javascript.webp", category: "Frontend", display_order: 4 },
          { id: 5, name: "CSS", image_url: "/tech-stacks/css.webp", category: "Frontend", display_order: 5 },
          { id: 6, name: "HTML", image_url: "/tech-stacks/html.webp", category: "Frontend", display_order: 6 },
          { id: 7, name: "Python", image_url: "/tech-stacks/python.webp", category: "Backend", display_order: 7 },
          { id: 8, name: "jQuery", image_url: "/tech-stacks/jquery.webp", category: "Frontend", display_order: 8 },
          { id: 9, name: "Bootstrap", image_url: "/tech-stacks/bootstrap.webp", category: "Frontend", display_order: 9 },
          { id: 10, name: "TypeScript", image_url: "/tech-stacks/typescript.webp", category: "Frontend", display_order: 10 },
          { id: 11, name: "C", image_url: "/tech-stacks/c.webp", category: "Backend", display_order: 11 },
          { id: 12, name: "Figma", image_url: "/tech-stacks/figma.webp", category: "Design", display_order: 12 },
          { id: 13, name: "Git", image_url: "/tech-stacks/git.webp", category: "Tools", display_order: 13 },
          { id: 14, name: "GitHub", image_url: "/tech-stacks/github.webp", category: "Tools", display_order: 14 },
          { id: 15, name: "MySQL", image_url: "/tech-stacks/mysql.webp", category: "Database", display_order: 15 },
          { id: 16, name: "Node.js", image_url: "/tech-stacks/nodejs.webp", category: "Backend", display_order: 16 }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTechStacks();
  }, []);
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-white text-lg">Loading tech stacks...</div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-red-400 text-lg">Failed to load tech stacks. Please try again later.</div>
          </div>
        )}

        {/* Tech Stacks Content */}
        {!loading && !error && techStacks.length > 0 && (
          <div className="flex justify-center">
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8 
                      max-w-lg md:max-w-none mx-auto px-4">
              {techStacks.map((tech) => (
                <Reveal key={tech.id} side="top">
                  <TechStack title={tech.name} image={tech.image_url} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && techStacks.length === 0 && (
          <div className="flex justify-center items-center py-12">
            <div className="text-gray-400 text-lg">No tech stacks available at the moment.</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStacks;