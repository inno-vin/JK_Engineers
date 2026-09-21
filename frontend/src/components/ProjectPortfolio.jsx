import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Building2, 
  IndianRupee, 
  Calendar, 
  Tag, 
  ExternalLink, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { MAJOR_PROJECTS, PROJECT_CATEGORIES } from '../data/projectsData';
import './ProjectPortfolio.css';

export default function ProjectPortfolio({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return MAJOR_PROJECTS.filter((proj) => {
      const matchesCategory = 
        selectedCategory === "All" || 
        proj.categoryTags.includes(selectedCategory) ||
        proj.sector.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        proj.client.toLowerCase().includes(query) ||
        proj.projectTitle.toLowerCase().includes(query) ||
        proj.sector.toLowerCase().includes(query) ||
        proj.scope.toLowerCase().includes(query) ||
        proj.scale.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="section projects-portfolio-cinema-section">
      <div className="portfolio-ambient-glow"></div>

      <div className="container">
        <div className="text-center portfolio-header">
          <div className="enterprise-badge">
            <span className="badge-dot"></span>
            <span>Proven Industrial Track Record</span>
          </div>
          <h2 className="heading-lg portfolio-title">Major Project Portfolio</h2>
          <p className="text-lg portfolio-subtitle">
            A proven record of industrial-scale capital delivery across leading pharmaceutical, biotechnology, and chemical enterprises.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="portfolio-controls-card">
          <div className="search-box-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search projects by client, technology, or sector..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="portfolio-search-input"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
                type="button"
              >
                Clear
              </button>
            )}
          </div>

          <div className="category-tabs-row">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="results-count-bar">
          Showing <strong>{filteredProjects.length}</strong> of {MAJOR_PROJECTS.length} reference projects
          {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
          {searchQuery && <span> matching "<em>{searchQuery}</em>"</span>}
        </div>

        {/* Projects Cards Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="project-card"
              onClick={() => onOpenModal && onOpenModal(proj)}
            >
              <div className="project-card-top">
                <span className="project-badge">{proj.badge}</span>
                <span className="project-sector-tag">{proj.sector}</span>
              </div>

              <h3 className="project-client">{proj.client}</h3>
              <h4 className="project-title-sub">{proj.projectTitle}</h4>

              <div className="project-meta-box">
                <div className="meta-item">
                  <Building2 size={15} className="meta-icon" />
                  <span><strong>Scale:</strong> {proj.scale}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={15} className="meta-icon" />
                  <span><strong>Timeline:</strong> {proj.timeline}</span>
                </div>
              </div>

              <p className="project-scope-summary">
                {proj.scope}
              </p>

              <div className="project-card-footer">
                <span className="view-details-link">
                  <span>View Project Specifications</span>
                  <ArrowRight size={15} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results-box">
            <Layers size={36} className="no-results-icon" />
            <h3>No projects found matching your criteria</h3>
            <p>Try resetting the category filter or searching with different keywords.</p>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
