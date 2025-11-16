import React, { useState, useEffect } from 'react';
import { Award, Sparkles, Code, Users, Briefcase, Calendar, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const StudentFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const studentFeedback = [
    {
      college: "CMR College of Engineering",
      location: "Hyderabad, Telangana",
      feedback: "Currently teaching comprehensive AI & DSA sessions — curriculum rollout is in progress with weekly hands-on labs and interview prep modules.",
      student: "Course Coordinator",
      mode: "In Progress",
      icon: Code,
      color: "bg-gray-900",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing"
    },
    {
      college: "Government Engineering College, Thrissur",
      location: "Kerala, India",
      feedback: "Srivardhan's teaching style made complex algorithms easy to understand. His practical approach helped me secure a placement at a top tech company.",
      student: "Rahul Kumar",
      mode: "Offline",
      icon: Award,
      color: "bg-gray-900",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing"
    },
    {
      college: "Sridevi Women's Engineering College",
      location: "Hyderabad, India",
      feedback: "The AI projects we built under his guidance were industry-ready. His mentorship transformed my understanding of machine learning.",
      student: "Priya Sharma",
      mode: "Online",
      icon: Sparkles,
      color: "bg-gray-800",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1s76hGVPFQ72PBkwT-42B2JpNUzTFlF-aQPWJNYSttdg/edit?usp=sharing"
    },
    {
      college: "Ballari Institute of Technology & Management",
      location: "Karnataka, India",
      feedback: "His DSA sessions were incredibly practical. We solved real-world problems, not just theory. Highly recommend his training!",
      student: "Arjun Reddy",
      mode: "Offline",
      icon: Code,
      color: "bg-gray-900",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1pQ7WNaN6ucvKak2yH6ALGYEvXqV0nFZdiyEDdi7FH10/edit?usp=sharing"
    },
    {
      college: "Annamacharya Institute of Technology & Sciences",
      location: "Kadapa, India",
      feedback: "The workshops were perfectly structured. From basic concepts to advanced algorithms, everything was covered systematically.",
      student: "Lakshmi Devi",
      mode: "Offline",
      icon: Users,
      color: "bg-gray-800",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1AJBsRJijZZpowg91a60r-b8I9vqJBfCxTO7KDMiVOB8/edit?usp=sharing"
    },
    {
      college: "Vignan's Institute of Information Technology",
      location: "Visakhapatnam, India",
      feedback: "His project mentoring approach is exceptional. We built a complete image classification system from scratch.",
      student: "Vikram Singh",
      mode: "Offline",
      icon: Briefcase,
      color: "bg-gray-700",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1f9DmDb7FjGgj26nRXZv9MibW3MmDCnLZrNKnec2qBPQ/edit?usp=sharing"
    },
    {
      college: "SR University",
      location: "Warangal, India",
      feedback: "The research project guidance was invaluable. His expertise in AI tools helped us achieve significant results.",
      student: "Anjali Patel",
      mode: "Online",
      icon: Calendar,
      color: "bg-gray-900",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1_M0vlZP0IU1JHMepAAl-HqmsUmUGsFlxHXCjoek8CVM/edit?usp=sharing"
    },
    {
      college: "Kakatiya Institute of Technology & Science (KITS)",
      location: "Warangal, Telangana",
      feedback: "The logic-building bootcamp was transformative. His teaching methodology improved our algorithmic thinking significantly.",
      student: "Harsha Vardhan",
      mode: "Offline",
      icon: Code,
      color: "bg-gray-800",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1f9DmDb7FjGgj26nRXZv9MibW3MmDCnLZrNKnec2qBPQ/edit?usp=sharing"
    },
    {
      college: "Sreenidhi University",
      location: "Hyderabad, Telangana",
      feedback: "His data structures and algorithms training was comprehensive. The coding interview preparation helped me crack multiple company interviews.",
      student: "Sneha Reddy",
      mode: "Offline",
      icon: Code,
      color: "bg-gray-700",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1s76hGVPFQ72PBkwT-42B2JpNUzTFlF-aQPWJNYSttdg/edit?usp=sharing"
    },
    {
      college: "MVSR Engineering College",
      location: "Hyderabad, Telangana",
      feedback: "The AI workshop transformed our understanding of neural networks. We built end-to-end projects that are now part of our portfolio.",
      student: "Kiran Sharma",
      mode: "Online",
      icon: Sparkles,
      color: "bg-gray-900",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1pQ7WNaN6ucvKak2yH6ALGYEvXqV0nFZdiyEDdi7FH10/edit?usp=sharing"
    },
    {
      college: "Hyderabad Institute of Technology and Management",
      location: "Hyderabad, Telangana",
      feedback: "Focused AI & DSA sessions with weekly problem-solving sprints. Building strong fundamentals and showcasing projects in reviews.",
      student: "Department Head",
      mode: "In Progress",
      icon: Code,
      color: "bg-gray-800",
      feedbackLink: "https://docs.google.com/spreadsheets/d/1Eq3px5t6G1qct7M5e9Yf0fzTWxN3BIr5WJfUkPhg-kw/edit?usp=sharing"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % studentFeedback.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + studentFeedback.length) % studentFeedback.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const getBadgeStyle = (mode) => {
    if (mode === 'In Progress') {
      return {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200',
        dot: 'bg-amber-500'
      };
    } else if (mode === 'Online') {
      return {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200',
        dot: 'bg-blue-500'
      };
    } else {
      return {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-200',
        dot: 'bg-purple-500'
      };
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Feedback & Success Stories
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
            Real testimonials from students across different institutions, showcasing the impact of my teaching methodology and the success stories of students who secured placements at top tech companies.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
            aria-label="Previous feedback"
          >
            <ChevronLeft className="text-gray-900" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
            aria-label="Next feedback"
          >
            <ChevronRight className="text-gray-900" size={24} />
          </button>

          {/* Cards Container */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {studentFeedback.map((feedback, index) => {
                const badge = getBadgeStyle(feedback.mode);
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2 md:px-4"
                  >
                    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md border border-gray-200 h-full">
                      {/* Mode Badge */}
                      <div className="flex justify-end mb-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${badge.bg} ${badge.text} ${badge.border}`}
                        >
                          <span className={`h-2 w-2 rounded-full ${badge.dot}`}></span>
                          {feedback.mode}
                        </span>
                      </div>

                      {/* Icon and College Info */}
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                        <div className={`${feedback.color} p-4 rounded-2xl flex-shrink-0 self-start`}>
                          <feedback.icon className="text-white" size={28} strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            {feedback.college}
                          </h4>
                          <p className="text-sm text-gray-600">{feedback.location}</p>
                        </div>
                      </div>

                      {/* Feedback Quote */}
                      <div className="mb-6">
                        <div className="flex items-start gap-3">
                          <Quote className="text-gray-900 mt-1 flex-shrink-0" size={24} />
                          <p className="text-gray-700 leading-relaxed text-base md:text-lg italic">
                            "{feedback.feedback}"
                          </p>
                        </div>
                      </div>

                      {/* Student Name */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-900">
                          — {feedback.student}
                        </p>
                      </div>

                      {/* View More Button */}
                      <div className="flex justify-end">
                        <a
                          href={feedback.feedbackLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          View Student Feedback
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {studentFeedback.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gray-900 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-300"
              aria-label="Previous feedback"
            >
              <ChevronLeft className="text-gray-900" size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-300"
              aria-label="Next feedback"
            >
              <ChevronRight className="text-gray-900" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;