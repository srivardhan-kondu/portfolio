import React from 'react';
import { Award, Brain, Code, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sudoku Solver using Neural Networks",
      description: "Real-time solver with TensorFlow/CNN + OpenCV achieving 92% accuracy.",
      technologies: ["TensorFlow", "OpenCV", "Python"],
      points: [
        "Grid & digit detection with computer vision",
        "92% accuracy without backtracking logic",
        "Real-time processing"
      ],
      metrics: ["92% accuracy", "Real-time solver", "CV integration"],
      icon: Brain,
      color: "bg-gray-900"
    },
    {
      title: "RefineX – AI Data-Cleaning Assistant",
      description: "Streamlit app using OpenAI GPT for one-click data profiling and cleaning; time reduced by 60%.",
      technologies: ["Streamlit", "OpenAI GPT", "Python"],
      points: [
        "Natural-language interface for cleaning",
        "60% reduction in preprocessing",
        "Automated EDA report generation"
      ],
      metrics: ["60% time reduction", "One-click profiling", "NL interface"],
      icon: Code,
      color: "bg-gray-900"
    }
  ];

  const publications = [
    {
      title: "Emotion Detection from EEG – CNN-Transformer Hybrid",
      status: "Ongoing",
      description: "Deep-learning model combining CNN + Transformer for real-time multi-class emotion detection.",
      technologies: ["CNN", "Transformer", "EEG", "Python"],
      points: [
        "Hybrid CNN-Transformer architecture",
        "Multi-class emotion detection",
        "Application in affective computing"
      ],
      metrics: ["Real-time classification", "Multi-class detection"],
      icon: Brain,
      color: "bg-gray-900"
    },
    {
      title: "Neural Style Transfer – Artistic Image Generation",
      status: "Published",
      description: "Stylization pipeline using VGG19 + Gram matrices implemented in TensorFlow.",
      technologies: ["VGG19", "TensorFlow", "OpenCV"],
      points: [
        "Style & content blending",
        "Tunable hyper-parameters",
        "Published on Ready Tensor"
      ],
      metrics: ["Published paper", "Tunable blending"],
      icon: Sparkles,
      color: "bg-gray-900"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects & Research Highlights
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing impactful AI/ML and full-stack development work.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6 mb-12">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gray-900 p-4 rounded-2xl flex-shrink-0">
                    <proj.icon className="text-white" size={28} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{proj.title}</h3>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-base">{proj.description}</p>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-4">
                    {proj.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Metrics:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.metrics.map((m, mi) => (
                      <span key={mi} className="px-3 py-1.5 bg-gray-100 text-gray-900 rounded-full text-xs font-medium border border-gray-300">{m}</span>
                    ))}
                  </div>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech, ti) => (
                      <span key={ti} className="px-3 py-1.5 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gray-900 p-3 rounded-xl flex-shrink-0">
                    <proj.icon className="text-white" size={24} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{proj.title}</h3>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="text-gray-700 leading-relaxed mb-4 text-base">{proj.description}</p>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2 mb-4">
                    {proj.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Metrics:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.metrics.map((m, mi) => (
                      <span key={mi} className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-xs font-medium border border-gray-300">{m}</span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech, ti) => (
                      <span key={ti} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research / Publications */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Research Publications</h3>
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-gray-900 p-4 rounded-2xl flex-shrink-0">
                      <pub.icon className="text-white" size={28} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                      {pub.status && (
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          pub.status === 'Ongoing' 
                            ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          {pub.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-base">{pub.description}</p>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Research Highlights:</h4>
                  <ul className="space-y-2 mb-4">
                    {pub.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.metrics.map((m, mi) => (
                      <span key={mi} className="px-3 py-1.5 bg-gray-100 text-gray-900 rounded-full text-xs font-medium border border-gray-300">{m}</span>
                    ))}
                  </div>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.technologies.map((tech, ti) => (
                      <span key={ti} className="px-3 py-1.5 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gray-900 p-3 rounded-xl flex-shrink-0">
                    <pub.icon className="text-white" size={24} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{pub.title}</h3>
                      {pub.status && (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          pub.status === 'Ongoing' 
                            ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          {pub.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="text-gray-700 leading-relaxed mb-4 text-base">{pub.description}</p>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Research Highlights:</h4>
                  <ul className="space-y-2 mb-4">
                    {pub.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.metrics.map((m, mi) => (
                      <span key={mi} className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-xs font-medium border border-gray-300">{m}</span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {pub.technologies.map((tech, ti) => (
                      <span key={ti} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;