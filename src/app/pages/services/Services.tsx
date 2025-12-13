import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Build fast, responsive, and scalable web applications with modern technologies.",
      features: [
        "React & TypeScript",
        "Progressive Web Apps",
        "Responsive Design",
        "Performance Optimization",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "UI/UX Design",
      description:
        "Create beautiful and intuitive user interfaces that delight your users.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      color: "purple",
    },
    {
      title: "Mobile Development",
      description:
        "Develop cross-platform mobile applications with native performance.",
      features: [
        "React Native",
        "iOS & Android",
        "Offline Support",
        "Push Notifications",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "pink",
    },
    {
      title: "API Development",
      description:
        "Build robust and scalable RESTful and GraphQL APIs for your applications.",
      features: [
        "RESTful APIs",
        "GraphQL",
        "Authentication & Security",
        "Documentation",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "green",
    },
    {
      title: "Cloud Services",
      description:
        "Deploy and manage your applications on modern cloud infrastructure.",
      features: [
        "AWS & Azure",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Monitoring & Logging",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      color: "indigo",
    },
    {
      title: "Consulting",
      description:
        "Get expert advice on architecture, best practices, and technology choices.",
      features: [
        "Technical Architecture",
        "Code Review",
        "Performance Audit",
        "Technology Strategy",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: "yellow",
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; hover: string }> = {
    blue: {
      bg: "bg-blue-600",
      text: "text-blue-600",
      hover: "hover:bg-blue-700",
    },
    purple: {
      bg: "bg-purple-600",
      text: "text-purple-600",
      hover: "hover:bg-purple-700",
    },
    pink: {
      bg: "bg-pink-600",
      text: "text-pink-600",
      hover: "hover:bg-pink-700",
    },
    green: {
      bg: "bg-green-600",
      text: "text-green-600",
      hover: "hover:bg-green-700",
    },
    indigo: {
      bg: "bg-indigo-600",
      text: "text-indigo-600",
      hover: "hover:bg-indigo-700",
    },
    yellow: {
      bg: "bg-yellow-600",
      text: "text-yellow-600",
      hover: "hover:bg-yellow-700",
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive solutions to bring your digital vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = colorClasses[service.color];
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center text-white mb-6`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className={`w-5 h-5 ${colors.text} mr-2`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-3 ${colors.bg} ${colors.hover} text-white rounded-lg font-semibold transition-colors`}
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
