import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, ChevronDown, Sparkles, Code, Dumbbell, Music, Award } from 'lucide-react';

export default function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const qaDatabase = {
    education: {
      keywords: ['education', 'study', 'student', 'college', 'degree', 'academic', 'university', 'btech', 'ai', 'ml'],
      answer: "I'm currently pursuing B.Tech in Artificial Intelligence & Machine Learning. My academic journey is built on a strong foundation in mathematics and logical problem-solving, which fuels my passion for understanding complex systems and creating innovative solutions."
    },
    hobbies: {
      keywords: ['hobby', 'hobbies', 'interest', 'free time', 'passion', 'enjoy'],
      answer: "My interests span across multiple domains - I'm deeply passionate about dancing, which is a core part of my identity. I also prioritize fitness through regular gym sessions, love exploring new technologies, and constantly work on personal growth and discipline. Nature and mindfulness play an important role in keeping me balanced."
    },
    sports: {
      keywords: ['sport', 'sports', 'fitness', 'gym', 'workout', 'badminton', 'cricket', 'tennis', 'martial', 'physical'],
      answer: "I'm quite active physically! I regularly engage in badminton, table tennis, and cricket. The gym is a big part of my routine for strength training, complemented by running and cardio. I also have an interest in martial arts, which teaches discipline and mental focus."
    },
    dance: {
      keywords: ['dance', 'dancing', 'creative', 'performance', 'expression', 'art'],
      answer: "Dance is a core part of my identity and creative expression. It's not just a hobby - it's how I connect with myself and express emotions that words can't capture. I'm building a collection of performances and videos that I'll be sharing soon on this platform."
    },
    tech: {
      keywords: ['tech', 'technology', 'coding', 'programming', 'web', 'development', 'project', 'ai', 'ml', 'machine learning', 'artificial intelligence', 'data'],
      answer: "I'm deeply invested in AI/ML and web development. I love building meaningful tech projects that solve real problems. My interests include exploring data systems, creating intelligent applications, and staying updated with the latest technological advancements. I believe in learning by doing."
    },
    personality: {
      keywords: ['personality', 'character', 'who are you', 'describe yourself', 'traits', 'nature'],
      answer: "I'd describe myself as a curious learner with a logical mindset. I value consistency, growth, and discipline. I approach challenges with a calm and reflective attitude, always seeking to understand deeper patterns. I believe in the power of continuous improvement and balancing multiple passions."
    }
  };

  const handleQuestionSubmit = () => {
    if (!question.trim()) return;
    
    const lowerQuestion = question.toLowerCase();
    
    let foundAnswer = false;
    for (const [category, data] of Object.entries(qaDatabase)) {
      if (data.keywords.some(keyword => lowerQuestion.includes(keyword))) {
        setAnswer(data.answer);
        foundAnswer = true;
        break;
      }
    }

    if (!foundAnswer) {
      setAnswer("I'd love to help! Try asking about:\n• Education & studies\n• Hobbies & interests\n• Dance & fitness\n• Sports & physical activities\n• Technical interests\n• My personality & traits");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleQuestionSubmit();
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-1/2 -right-48 animate-pulse delay-1000"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -bottom-48 left-1/2 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Prajwal
          </div>
          <div className="hidden md:flex gap-8">
            {['about', 'qa', 'dance', 'vision'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                  activeSection === section ? 'text-cyan-400' : 'text-gray-400'
                }`}
              >
                {section === 'qa' ? 'Ask Me' : section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center z-10">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 inline-block">
              <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-36 h-36 bg-gray-900 rounded-full flex items-center justify-center text-6xl font-bold">
                  P
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Hi, I'm Prajwal
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6 text-lg md:text-xl text-gray-400">
              <span className="flex items-center gap-2"><Code size={20} className="text-blue-400" /> AI/ML Student</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Sparkles size={20} className="text-cyan-400" /> Tech Enthusiast</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Music size={20} className="text-purple-400" /> Dancer</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Award size={20} className="text-green-400" /> Lifelong Learner</span>
            </div>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              This space reflects my journey, interests, and personal brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('qa')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                Ask About Me
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 hover:border-cyan-500 transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore My Journey
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Code className="text-blue-400" size={24} />,
                title: "Education",
                content: "B.Tech student in Artificial Intelligence & Machine Learning with a strong foundation in mathematics and logical problem-solving."
              },
              {
                icon: <Sparkles className="text-cyan-400" size={24} />,
                title: "Technical Interests",
                items: ["AI & Machine Learning", "Web Development", "Data Systems", "Meaningful Tech Projects"]
              },
              {
                icon: <Music className="text-purple-400" size={24} />,
                title: "Hobbies & Interests",
                items: ["Dancing (Core Passion)", "Fitness & Gym", "Technology Exploration", "Personal Growth", "Nature & Mindfulness"]
              },
              {
                icon: <Dumbbell className="text-green-400" size={24} />,
                title: "Sports & Fitness",
                items: ["Badminton", "Table Tennis", "Gym & Strength Training", "Running & Cardio", "Cricket", "Martial Arts"]
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-2 transition-all duration-500 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {card.icon}
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                </div>
                {card.content && <p className="text-gray-400">{card.content}</p>}
                {card.items && (
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className={`mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-6 transition-all duration-1000 delay-500 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <Award className="text-yellow-400" size={24} />
              Personality Traits
            </h3>
            <p className="text-gray-400">
              Curious learner • Logical thinker • Consistent and growth-focused • Calm and reflective mindset
            </p>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="qa" className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center transition-all duration-1000 ${isVisible.qa ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Ask About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Prajwal</span>
          </h2>
          <p className="text-center text-gray-400 mb-8">Get to know me better through questions</p>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible.qa ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask something about Prajwal..."
                  className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-all duration-300 text-gray-100 placeholder-gray-500"
                />
                <button
                  onClick={handleQuestionSubmit}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Ask
                </button>
              </div>
            </div>

            {answer && (
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 border border-cyan-500/30 rounded-xl p-6 animate-fadeIn">
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">{answer}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dance Section */}
      <section id="dance" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center transition-all duration-1000 ${isVisible.dance ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Dance & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Creative Expression</span>
          </h2>
          
          <p className={`text-center text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible.dance ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Dance is a core part of my identity. Videos and performances will be added here soon.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, idx) => (
              <div
                key={item}
                className={`aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl flex items-center justify-center hover:border-purple-500/50 transform hover:scale-105 transition-all duration-500 ${isVisible.dance ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-center">
                  <Music size={48} className="text-purple-400 mx-auto mb-3 animate-pulse" />
                  <p className="text-gray-400 font-semibold">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center transition-all duration-1000 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Personal Brand <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Vision</span>
          </h2>
          
          <div className={`bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8 transition-all duration-1000 delay-200 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              My journey is defined by continuous learning and skill building. I believe in blending technology, creativity, and discipline to create meaningful impact. Whether it's through code, movement, or ideas, I strive to push boundaries and grow consistently.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              This platform is a reflection of my commitment to long-term personal and professional growth. I'm building something that represents not just where I am, but where I'm headed—a space that evolves as I do.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Prajwal
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Prajwal. Building the future, one step at a time.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}