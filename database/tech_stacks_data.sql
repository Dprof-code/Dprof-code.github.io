-- Insert all existing tech stacks into the tech_stacks table
INSERT INTO tech_stacks (name, image_url, category, display_order) VALUES

('WordPress', '/tech-stacks/wordpress.webp', 'CMS', 1),
('React', '/tech-stacks/react.webp', 'Frontend', 2),
('PHP', '/tech-stacks/php.webp', 'Backend', 3),
('JavaScript', '/tech-stacks/javascript.webp', 'Frontend', 4),
('CSS', '/tech-stacks/css.webp', 'Frontend', 5),
('HTML', '/tech-stacks/html.webp', 'Frontend', 6),
('Python', '/tech-stacks/python.webp', 'Backend', 7),
('jQuery', '/tech-stacks/jquery.webp', 'Frontend', 8),
('Bootstrap', '/tech-stacks/bootstrap.webp', 'Frontend', 9),
('TypeScript', '/tech-stacks/typescript.webp', 'Frontend', 10),
('C', '/tech-stacks/c.webp', 'Backend', 11),
('Figma', '/tech-stacks/figma.webp', 'Design', 12),
('Git', '/tech-stacks/git.webp', 'Tools', 13),
('GitHub', '/tech-stacks/github.webp', 'Tools', 14),
('MySQL', '/tech-stacks/mysql.webp', 'Database', 15),
('Node.js', '/tech-stacks/nodejs.webp', 'Backend', 16);

-- Query to verify the data was inserted correctly
SELECT id, name, category, display_order FROM tech_stacks ORDER BY display_order;