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
      color: "bg-gray-800"
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
      color: "bg-gray-700"
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
      color: "bg-gray-800"
    }
  ];

  return (
    <section className="py-10 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects & Research Highlights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing impactful AI/ML and full-stack development work.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8 mb-16">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <div className={`${proj.color} p-3 rounded-xl flex-shrink-0`}>
                  <proj.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{proj.title}</h3>
                </div>
              </div>
              <div className="sm:ml-16">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">{proj.description}</p>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1 mb-4">
                  {proj.points.map((pt, pi) => (
                    <li key={pi} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Metrics:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.metrics.map((m, mi) => (
                    <span key={mi} className="px-3 py-1 bg-gray-100 text-black rounded-full text-xs border border-gray-300">{m}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, ti) => (
                    <span key={ti} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-300">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research / Publications */}
        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <div className={`${pub.color} p-3 rounded-xl flex-shrink-0`}>
                  <pub.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{pub.title}</h3>
                  {pub.status && <p className="text-sm text-gray-600 font-medium mb-2">{pub.status}</p>}
                </div>
              </div>
              <div className="sm:ml-16">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">{pub.description}</p>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Research Highlights:</h4>
                <ul className="space-y-1 mb-4">
                  {pub.points.map((pt, pi) => (
                    <li key={pi} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.metrics.map((m, mi) => (
                    <span key={mi} className="px-3 py-1 bg-gray-100 text-black rounded-full text-xs border border-gray-300">{m}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {pub.technologies.map((tech, ti) => (
                    <span key={ti} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-300">{tech}</span>
                  ))}
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
