import React, { useEffect } from "react";
import { FaRobot, FaDollarSign, FaChartLine, FaUsers, FaHandsHelping } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-6 md:p-8">
      <header className="text-center py-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About MailZapp</h1>
        <p className="text-base sm:text-lg text-gray-400">
          Revolutionizing Email Campaigns with the Power of AI
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Mission Section */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-sm sm:text-lg text-gray-300">
            At MailZapp, we aim to transform how small businesses approach email
            marketing by leveraging cutting-edge AI technology. Our platform
            empowers businesses to create professional campaigns with minimal
            effort, ensuring every email resonates with its audience. By
            democratizing access to advanced email tools, we aspire to make
            email marketing accessible, affordable, and impactful.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Key Features</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="AI-Generated Emails"
              description="Generate professional email content instantly with AI."
              icon={<FaRobot size={40} className="text-yellow-500" />}
            />
            <FeatureCard
              title="Affordable Pricing"
              description="Only pay for what you use with our transparent pricing model."
              icon={<FaDollarSign size={40} className="text-green-500" />}
            />
            <FeatureCard
              title="Real-Time Insights"
              description="Analyze and optimize your campaigns effortlessly."
              icon={<FaChartLine size={40} className="text-blue-500" />}
            />
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-sm sm:text-lg text-gray-300">
            MailZapp began with a simple vision: to make email marketing tools
            intuitive and affordable for small businesses. From our humble
            beginnings in a small co-working space, we’ve grown into a platform
            trusted by businesses worldwide. What started as a small idea has
            blossomed into a movement, helping thousands of businesses thrive.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="800">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Core Values</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              title="Innovation"
              description="Continuously evolving to bring the best technology to our users."
              icon={<FaRobot size={40} className="text-purple-500" />}
            />
            <FeatureCard
              title="Customer-Centric"
              description="Empowering businesses by understanding their unique needs."
              icon={<FaUsers size={40} className="text-pink-500" />}
            />
            <FeatureCard
              title="Accessibility"
              description="Making advanced email marketing affordable for everyone."
              icon={<FaHandsHelping size={40} className="text-orange-500" />}
            />
            <FeatureCard
              title="Excellence"
              description="Delivering top-notch quality in every feature and service."
              icon={<FaChartLine size={40} className="text-teal-500" />}
            />
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="mb-16" data-aos="fade-up" data-aos-delay="1000">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-sm sm:text-lg text-gray-300">
            MailZapp’s team consists of passionate developers, designers, and
            marketers dedicated to empowering businesses. We believe in
            collaboration, creativity, and continuous improvement.
          </p>
        </section>

        {/* Call to Action Section */}
        <section data-aos="fade-up" data-aos-delay="1400">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Us Today!</h2>
          <p className="text-sm sm:text-lg text-gray-300">
            Ready to revolutionize your email marketing? Sign up for MailZapp
            and experience the future of email campaigns.
          </p>
          <div className="mt-6 flex justify-center">
            <Link to="/auth">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 sm:py-3 sm:px-8 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-200">
                Get Started
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => (
  <div className="p-4 sm:p-6 bg-gray-900 text-white rounded-lg shadow-md">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-sm sm:text-gray-400">{description}</p>
  </div>
);

export default About;
