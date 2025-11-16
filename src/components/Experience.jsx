import React from 'react';
import { Briefcase, Users, Code, Award, Sparkles, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const institutions = [
    {
      name: "CMR College of Engineering",
      location: "Hyderabad, Telangana",
      duration: "In Progress",
      mode: "Offline",
      description: "Comprehensive AI & DSA sessions with curriculum rollout in progress, featuring weekly hands-on labs and interview prep modules.",
      achievements: [
        "Weekly hands-on laboratory sessions",
        "Interview preparation modules",
        "Real-time problem-solving sessions",
        "Industry-focused project development"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing",
      icon: Code,
      color: "bg-gray-900",
      status: "ongoing"
    },
    {
      name: "Government Engineering College, Thrissur",
      location: "Kerala, India",
      duration: "2023 - 2024",
      mode: "Offline",
      description: "Intensive DSA bootcamp focusing on placement preparation with algorithmic problem-solving and competitive programming.",
      achievements: [
        "Achieved 92% placement success rate",
        "Trained 200+ students in core DSA concepts",
        "Conducted mock interviews and coding assessments",
        "Prepared students for top tech company placements"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing",
      icon: Award,
      color: "bg-gray-800",
      status: "completed"
    },
    {
      name: "Sridevi Women's Engineering College",
      location: "Hyderabad, India",
      duration: "2023",
      mode: "Online",
      description: "AI/ML mentorship program focusing on NLP and Computer Vision with hands-on industry-ready projects.",
      achievements: [
        "Mentored 150+ B.Tech students in AI/ML",
        "Guided projects in NLP and Computer Vision",
        "Industry-ready project implementations",
        "Built end-to-end ML pipelines"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1s76hGVPFQ72PBkwT-42B2JpNUzTFlF-aQPWJNYSttdg/edit?usp=sharing",
      icon: Sparkles,
      color: "bg-gray-700",
      status: "completed"
    },
    {
      name: "Ballari Institute of Technology & Management",
      location: "Karnataka, India",
      duration: "2022 - 2023",
      mode: "Offline",
      description: "Foundation course in Python programming and basic DSA for engineering students.",
      achievements: [
        "Taught Python fundamentals and syntax",
        "Introduced basic data structures and algorithms",
        "Hands-on coding exercises and projects",
        "Problem-solving skill development"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1pQ7WNaN6ucvKak2yH6ALGYEvXqV0nFZdiyEDdi7FH10/edit?usp=sharing",
      icon: Code,
      color: "bg-gray-900",
      status: "completed"
    },
    {
      name: "Annamacharya Institute of Technology & Sciences",
      location: "Kadapa, India",
      duration: "2023",
      mode: "Offline",
      description: "AI and DSA workshops combining theoretical concepts with practical implementations.",
      achievements: [
        "Conducted comprehensive AI workshops",
        "Taught advanced DSA concepts",
        "Systematic curriculum from basics to advanced",
        "Real-world problem-solving sessions"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1AJBsRJijZZpowg91a60r-b8I9vqJBfCxTO7KDMiVOB8/edit?usp=sharing",
      icon: Users,
      color: "bg-gray-800",
      status: "completed"
    },
    {
      name: "Vignan's Institute of Information Technology",
      location: "Visakhapatnam, India",
      duration: "2022",
      mode: "Offline",
      description: "Project mentorship for AI and DSA applications including image classification and search optimization.",
      achievements: [
        "Mentored image classification projects using AI",
        "Guided search optimization using DSA techniques",
        "Built complete project pipelines from scratch",
        "Industry-standard implementation practices"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1f9DmDb7FjGgj26nRXZv9MibW3MmDCnLZrNKnec2qBPQ/edit?usp=sharing",
      icon: Briefcase,
      color: "bg-gray-700",
      status: "completed"
    },
    {
      name: "SR University",
      location: "Warangal, India",
      duration: "2023",
      mode: "Online",
      description: "Research-focused training in DSA and AI tools for academic projects and publications.",
      achievements: [
        "Trained students in DSA for research applications",
        "Guided use of AI tools in research projects",
        "Supported academic paper development",
        "Enhanced research methodology skills"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1_M0vlZP0IU1JHMepAAl-HqmsUmUGsFlxHXCjoek8CVM/edit?usp=sharing",
      icon: Calendar,
      color: "bg-gray-900",
      status: "completed"
    },
    {
      name: "Kakatiya Institute of Technology & Science (KITS)",
      location: "Warangal, Telangana",
      duration: "2022",
      mode: "Offline",
      description: "Logic-building bootcamp focused on algorithmic thinking and problem-solving fundamentals.",
      achievements: [
        "Led intensive logic-building sessions",
        "Enhanced algorithmic thinking skills",
        "Prepared students for competitive programming",
        "Improved problem-solving confidence"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1f9DmDb7FjGgj26nRXZv9MibW3MmDCnLZrNKnec2qBPQ/edit?usp=sharing",
      icon: Code,
      color: "bg-gray-800",
      status: "completed"
    },
    {
      name: "Sreenidhi University",
      location: "Hyderabad, Telangana",
      duration: "2023",
      mode: "Offline",
      description: "Comprehensive DSA training focused on coding interview preparation for top tech companies.",
      achievements: [
        "Extensive data structures and algorithms training",
        "Coding interview preparation strategies",
        "Mock interview sessions and assessments",
        "Helped students crack multiple company interviews"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1s76hGVPFQ72PBkwT-42B2JpNUzTFlF-aQPWJNYSttdg/edit?usp=sharing",
      icon: Code,
      color: "bg-gray-900",
      status: "completed"
    },
    {
      name: "MVSR Engineering College",
      location: "Hyderabad, Telangana",
      duration: "2023",
      mode: "Online",
      description: "AI workshop specializing in neural networks with portfolio-worthy end-to-end projects.",
      achievements: [
        "Transformed understanding of neural networks",
        "Built portfolio-ready AI projects",
        "End-to-end project development experience",
        "Industry-relevant implementation techniques"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1pQ7WNaN6ucvKak2yH6ALGYEvXqV0nFZdiyEDdi7FH10/edit?usp=sharing",
      icon: Sparkles,
      color: "bg-gray-800",
      status: "completed"
    },
    {
      name: "Hyderabad Institute of Technology and Management",
      location: "Hyderabad, Telangana",
      duration: "In Progress",
      mode: "Offline",
      description: "Focused AI & DSA sessions with weekly problem-solving sprints and project showcase reviews.",
      achievements: [
        "Weekly problem-solving sprint sessions",
        "Building strong programming fundamentals",
        "Regular project showcase and reviews",
        "Comprehensive skill development program"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing",
      icon: Code,
      color: "bg-gray-700",
      status: "ongoing"
    }
  ];

  const mentorshipProjects = [
    {
      title: "Placement Prep Bootcamp",
      description: "Trained 100+ students in sorting, recursion, greedy, DP, trees, and graphs using Python",
      icon: Sparkles,
      color: "bg-gray-900"
    },
    {
      title: "Code Sprint Lab (for 3 colleges)",
      description: "Led 2-week competitive programming sprint with live problem-solving",
      icon: Code,
      color: "bg-gray-800"
    },
    {
      title: "DSA Crash Course",
      description: "Designed and delivered modules with 200+ curated problems (LC/GFG level)",
      icon: Briefcase,
      color: "bg-gray-700"
    },
    {
      title: "Mock Interview Platform (mini-project)",
      description: "Mentored students to build a DSA mock interview simulator using Python + SQLite",
      icon: Users,
      color: "bg-gray-900"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Training Experience & Projects
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive training delivered across premier institutions and hands-on mentorship projects designed to build real skills and career readiness.
          </p>
        </div>

        {/* Institution Training Cards */}
        <div className="space-y-6 mb-12">
          {institutions.map((inst, idx) => (
            <div key={idx} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                {/* Icon and Status Badge - Mobile */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-900 p-4 rounded-2xl flex-shrink-0">
                    <inst.icon className="text-white" size={28} strokeWidth={2} />
                  </div>
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    inst.status === 'ongoing'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}>
                    <span className={`h-2 w-2 rounded-full ${
                      inst.status === 'ongoing'
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}></span>
                    {inst.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                </div>

                {/* Content - Mobile */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{inst.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {inst.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {inst.duration}
                    </span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      inst.mode === 'Online'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {inst.mode}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">{inst.description}</p>

                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2.5 mb-6">
                    {inst.achievements.map((ach, ai) => (
                      <li key={ai} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={inst.feedbackLink} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-md">
                    View Student Feedback
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block">
                {/* Status Badge - Desktop */}
                <div className="flex justify-end mb-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    inst.status === 'ongoing'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}>
                    <span className={`h-2 w-2 rounded-full ${
                      inst.status === 'ongoing'
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}></span>
                    {inst.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gray-900 p-3 rounded-xl flex-shrink-0">
                    <inst.icon className="text-white" size={24} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{inst.name}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {inst.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {inst.duration}
                      </span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        inst.mode === 'Online'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {inst.mode}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base">{inst.description}</p>
                  </div>
                </div>

                <div className="ml-16 space-y-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {inst.achievements.map((ach, ai) => (
                      <li key={ai} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{ach}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end pt-2">
                    <a href={inst.feedbackLink} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
                      View Student Feedback
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship Projects */}
        <div className="grid sm:grid-cols-2 gap-6">
          {mentorshipProjects.map((proj, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className={`${proj.color} p-3 rounded-xl flex-shrink-0`}>
                  <proj.icon className="text-white" size={22} strokeWidth={2} />
                </div>
                <h4 className="text-lg font-bold text-gray-900">{proj.title}</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;