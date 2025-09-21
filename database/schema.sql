-- Testimonials Table
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  image_url TEXT,
  quote TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects Table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  live_link TEXT,
  github_link TEXT,
  technologies TEXT[], -- Array of technology names
  category VARCHAR(100), -- e.g., 'ecommerce', 'corporate', 'crypto', etc.
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tech Stacks Table
CREATE TABLE tech_stacks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  image_url TEXT NOT NULL,
  category VARCHAR(100), -- e.g., 'frontend', 'backend', 'database', etc.
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data for Testimonials
INSERT INTO testimonials (name, position, company, image_url, quote, rating, is_featured) VALUES
('Sarah Johnson', 'CEO', 'TechStart Solutions', '/headshots/Adedamola_Abraham_Olawale.webp', 'Abraham delivered an exceptional e-commerce website that exceeded our expectations. The attention to detail and modern design helped increase our online sales by 40% within the first month.', 5, true),
('Michael Chen', 'Founder', 'Digital Marketing Agency', '/headshots/Adedamola_Abraham_Olawale.webp', 'Working with Abraham was a game-changer for our business. He built a responsive, fast-loading website that perfectly captures our brand identity. His expertise in both frontend and backend development is impressive.', 5, true),
('Emily Rodriguez', 'Restaurant Owner', '', '/headshots/Adedamola_Abraham_Olawale.webp', 'Abraham created a beautiful restaurant website with online ordering functionality. The design is elegant and user-friendly. Our customers love the seamless experience, and our online orders have tripled!', 5, true),
('David Thompson', 'Real Estate Developer', '', '/headshots/Adedamola_Abraham_Olawale.webp', 'The real estate website Abraham built for us is outstanding. The property listings are beautifully displayed, and the search functionality is intuitive. Our leads have increased significantly since launch.', 5, true),
('Lisa Martinez', 'Coach & Consultant', '', '/headshots/Adedamola_Abraham_Olawale.webp', 'Abraham transformed my coaching business with a professional website that truly represents my brand. The booking system and client portal work flawlessly. I could not be happier with the results!', 5, true),
('James Wilson', 'Crypto Startup Founder', '', '/headshots/Adedamola_Abraham_Olawale.webp', 'Abraham''s expertise in Web3 development is exceptional. He built our DeFi platform with smart contracts that are secure and efficient. His understanding of blockchain technology is top-notch.', 5, true);

-- Insert sample data for Tech Stacks
INSERT INTO tech_stacks (title, image_url, category, order_index) VALUES
('WordPress', '/tech-stacks/wordpress.webp', 'cms', 1),
('React', '/tech-stacks/react.webp', 'frontend', 2),
('PHP', '/tech-stacks/php.webp', 'backend', 3),
('JavaScript', '/tech-stacks/javascript.webp', 'frontend', 4),
('CSS', '/tech-stacks/css.webp', 'frontend', 5),
('HTML', '/tech-stacks/html.webp', 'frontend', 6),
('Python', '/tech-stacks/python.webp', 'backend', 7),
('jQuery', '/tech-stacks/jquery.webp', 'frontend', 8),
('Bootstrap', '/tech-stacks/bootstrap.webp', 'frontend', 9),
('TypeScript', '/tech-stacks/typescript.webp', 'frontend', 10),
('C', '/tech-stacks/c.webp', 'language', 11),
('Figma', '/tech-stacks/figma.webp', 'design', 12),
('Git', '/tech-stacks/git.webp', 'tools', 13),
('GitHub', '/tech-stacks/github.webp', 'tools', 14),
('MySQL', '/tech-stacks/mysql.webp', 'database', 15),
('Node.js', '/tech-stacks/nodejs.webp', 'backend', 16);

-- Row Level Security (RLS) Policies
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tech_stacks ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public testimonials are viewable by everyone" ON testimonials
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public projects are viewable by everyone" ON projects
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public tech_stacks are viewable by everyone" ON tech_stacks
  FOR SELECT USING (is_active = true);

-- Admin policies (you'll need to set up authentication for admin users)
CREATE POLICY "Admin can do everything on testimonials" ON testimonials
  FOR ALL USING (auth.jwt() ->> 'email' = 'devabrahamtech@gmail.com');

CREATE POLICY "Admin can do everything on projects" ON projects
  FOR ALL USING (auth.jwt() ->> 'email' = 'devabrahamtech@gmail.com');

CREATE POLICY "Admin can do everything on tech_stacks" ON tech_stacks
  FOR ALL USING (auth.jwt() ->> 'email' = 'devabrahamtech@gmail.com');