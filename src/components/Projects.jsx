import React from 'react';
import { Brain, Code, Sparkles } from 'lucide-react';

const Projects = () => {
  const items = [
    {
      title: "Sudoku Solver",
      status: "Published",
      description: "CNN + OpenCV real-time solver.",
      icon: Brain
    },
    {
      title: "RefineX",
      status: "",
      description: "Streamlit data-cleaning assistant.",
      icon: Code
    },
    {
      title: "EEG Emotion Detection",
      status: "Ongoing",
      description: "CNN-Transformer hybrid model.",
      icon: Brain
    },
    {
      title: "Neural Style Transfer",
      status: "Published",
      description: "VGG19-based stylization pipeline.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Projects & Research
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex gap-4"
            >
              <div className="bg-gray-900 p-3 rounded-xl flex-shrink-0">
                <item.icon className="text-white" size={22} />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  {item.status && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        item.status === "Ongoing"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
