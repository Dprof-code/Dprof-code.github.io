import { supabase, TABLES } from "../lib/supabase";

// Testimonials Services
export const testimonialsService = {
  // Get all active testimonials
  async getAll() {
    try {
      const { data, error } = await supabase
        .from(TABLES.TESTIMONIALS)
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return { data: null, error: error.message };
    }
  },

  // Get featured testimonials only
  async getFeatured() {
    try {
      const { data, error } = await supabase
        .from(TABLES.TESTIMONIALS)
        .select("*")
        .eq("is_active", true)
        .eq("is_featured", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error fetching featured testimonials:", error);
      return { data: null, error: error.message };
    }
  },

  // Create new testimonial (admin only)
  async create(testimonial) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TESTIMONIALS)
        .insert([testimonial])
        .select();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error creating testimonial:", error);
      return { data: null, error: error.message };
    }
  },

  // Update testimonial (admin only)
  async update(id, updates) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TESTIMONIALS)
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error updating testimonial:", error);
      return { data: null, error: error.message };
    }
  },

  // Delete testimonial (admin only)
  async delete(id) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TESTIMONIALS)
        .delete()
        .eq("id", id);

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      return { data: null, error: error.message };
    }
  },
};

// Projects Services
export const projectsService = {
  // Get all active projects
  async getAll() {
    try {
      const { data, error } = await supabase
        .from(TABLES.PROJECTS)
        .select("*")
        .eq("is_active", true)
        .order("order_index", { ascending: true });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error fetching projects:", error);
      return { data: null, error: error.message };
    }
  },

  // Get featured projects only
  async getFeatured() {
    try {
      const { data, error } = await supabase
        .from(TABLES.PROJECTS)
        .select("*")
        .eq("is_active", true)
        .eq("is_featured", true)
        .order("order_index", { ascending: true });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      return { data: null, error: error.message };
    }
  },

  // Create new project (admin only)
  async create(project) {
    try {
      const { data, error } = await supabase
        .from(TABLES.PROJECTS)
        .insert([project])
        .select();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error creating project:", error);
      return { data: null, error: error.message };
    }
  },

  // Update project (admin only)
  async update(id, updates) {
    try {
      const { data, error } = await supabase
        .from(TABLES.PROJECTS)
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error updating project:", error);
      return { data: null, error: error.message };
    }
  },

  // Delete project (admin only)
  async delete(id) {
    try {
      const { data, error } = await supabase
        .from(TABLES.PROJECTS)
        .delete()
        .eq("id", id);

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error deleting project:", error);
      return { data: null, error: error.message };
    }
  },
};

// Tech Stacks Services
export const techStacksService = {
  // Get all active tech stacks
  async getAll() {
    try {
      const { data, error } = await supabase
        .from(TABLES.TECH_STACKS)
        .select("*")
        .eq("is_active", true)
        .order("order_index", { ascending: true });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error fetching tech stacks:", error);
      return { data: null, error: error.message };
    }
  },

  // Create new tech stack (admin only)
  async create(techStack) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TECH_STACKS)
        .insert([techStack])
        .select();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error creating tech stack:", error);
      return { data: null, error: error.message };
    }
  },

  // Update tech stack (admin only)
  async update(id, updates) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TECH_STACKS)
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error updating tech stack:", error);
      return { data: null, error: error.message };
    }
  },

  // Delete tech stack (admin only)
  async delete(id) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TECH_STACKS)
        .delete()
        .eq("id", id);

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Error deleting tech stack:", error);
      return { data: null, error: error.message };
    }
  },
};
