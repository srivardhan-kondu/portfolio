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
      name: "Sree Vidyanikethan Engineering College",
      location: "Tirupati, Andhra Pradesh",
      duration: "2023",
      mode: "Offline",
      description: "Machine learning bootcamp with hands-on implementation of real-time prediction models.",
      achievements: [
        "Conducted comprehensive ML bootcamp",
        "Implemented real-time prediction models",
        "Hands-on experience with industry tools",
        "Built production-ready ML systems"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing",
      icon: Award,
      color: "bg-gray-700",
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
      name: "VIT",
      location: "Chennai, Tamil Nadu",
      duration: "2023",
      mode: "Offline",
      description: "Placement preparation program with mock interviews, resume guidance, and technical training.",
      achievements: [
        "Game-changing placement preparation sessions",
        "Mock interview practice and feedback",
        "Professional resume guidance and review",
        "Helped secure offers from top MNCs"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1AJBsRJijZZpowg91a60r-b8I9vqJBfCxTO7KDMiVOB8/edit?usp=sharing",
      icon: Briefcase,
      color: "bg-gray-700",
      status: "completed"
    },
    {
      name: "Chitkara University",
      location: "Punjab, India",
      duration: "In Progress",
      mode: "Online",
      description: "Intensive AI & DSA sessions with capstone projects, focusing on deployable applications and product-based interview preparation.",
      achievements: [
        "Building deployable application projects",
        "Product-based company interview preparation",
        "Capstone project development",
        "Industry-standard coding practices"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1_M0vlZP0IU1JHMepAAl-HqmsUmUGsFlxHXCjoek8CVM/edit?usp=sharing",
      icon: Calendar,
      color: "bg-gray-900",
      status: "ongoing"
    },
    {
      name: "Kalasalingam Academy of Research and Education",
      location: "Krishnankoil, Tamil Nadu",
      duration: "2022 - 2023",
      mode: "Offline",
      description: "Research guidance and project supervision leading to publications and conference presentations.",
      achievements: [
        "Outstanding research guidance provided",
        "Supervised academic paper publications",
        "Supported conference presentation preparation",
        "Mentored research methodology development"
      ],
      feedbackLink: "https://docs.google.com/spreadsheets/d/1s76hGVPFQ72PBkwT-42B2JpNUzTFlF-aQPWJNYSttdg/edit?usp=sharing",
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

  const otherExperiences = [
    {
      title: "Freelance Client Projects",
      company: "UK-based Clients",
      duration: "2022 – Present",
      description: "Delivered AI-based automation tools, dashboards, and chatbots; mentored developers on reusable Python code and testing.",
      achievements: [
        "Built and deployed production ML models",
        "Assisted in backend DSA logic for recommendation systems",
        "Developed pattern detection algorithms",
        "Mentored developers on clean code practices and testing"
      ],
      icon: Code,
      color: "bg-gray-900"
    },
    {
      title: "Newbie Learning – Teaching Assistant & AI Mentor",
      company: "Hyderabad, India",
      duration: "June 2022 – Jan 2024",
      description: "Mentored 50+ students in AI + DSA with hands-on micro-projects and skill development focus.",
      achievements: [
        "Built micro-projects in spam detection and chatbot design",
        "Created classic DSA puzzle implementations",
        "Improved code quality and logic-building skills by 40%",
        "Provided personalized mentorship and guidance"
      ],
      icon: Award,
      color: "bg-gray-800"
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
    },
    {
      title: "Dynamic Path Planner",
      description: "Guided a project on shortest path algorithms (Dijkstra, A*) applied to logistics data",
      icon: MapPin,
      color: "bg-gray-800"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-black">
            Training Experience Across Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and DSA training delivered across 15+ premier institutions, impacting 9000+ students with hands-on mentorship, placement preparation, and industry-ready project development.
          </p>
        </div>

        {/* Institution Training Cards */}
        <div className="space-y-6 mb-20">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${
                    institution.status === 'ongoing'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${
                    institution.status === 'ongoing' ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}></span>
                  {institution.status === 'ongoing' ? 'In Progress' : 'Completed'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 pr-32">
                <div className={`p-3 ${institution.color} rounded-xl flex-shrink-0`}>
                  <institution.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{institution.name}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {institution.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {institution.duration}
                    </span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      institution.mode === 'Online' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {institution.mode}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {institution.description}
                  </p>
                </div>
              </div>

              <div className="sm:ml-16 space-y-4">
                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {institution.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Feedback Link */}
                <div className="flex justify-end pt-2">
                  <a
                    href={institution.feedbackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>View Student Feedback</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Professional Experience */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center text-black">
            Additional Professional Experience
          </h3>
          
          <div className="space-y-8 mb-20">
            {otherExperiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                  <div className={`p-3 ${exp.color} rounded-xl flex-shrink-0`}>
                    <exp.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="sm:ml-16">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Mentorship Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center text-black">
            Selected DSA + Python Mentorship Projects
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Specialized training programs and hands-on projects designed to build practical skills and career readiness.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mentorshipProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 ${project.color} rounded-xl flex-shrink-0`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;