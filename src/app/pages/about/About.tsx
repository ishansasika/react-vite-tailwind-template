const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology",
      icon: "🚀",
    },
    {
      title: "Quality",
      description: "Delivering excellence in every line of code",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      description: "Building better solutions together",
      icon: "🤝",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About ReactVite
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A modern React template designed to help developers build amazing web
              applications faster and more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              We believe that developers should spend more time building features and
              less time configuring tools. ReactVite provides a rock-solid foundation
              with modern best practices, allowing you to focus on what matters most:
              creating exceptional user experiences.
            </p>

            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Built with Modern Technologies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⚛️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      React 19
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Latest React with new features and improvements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📘</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      TypeScript
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Type safety and enhanced developer experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Vite
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Next-generation frontend build tooling
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Tailwind CSS
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Utility-first CSS framework for rapid UI development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🛣️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      React Router
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Declarative routing for React applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      ESLint
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Code quality and consistency checks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
