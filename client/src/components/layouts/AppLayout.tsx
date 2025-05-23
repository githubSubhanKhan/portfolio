import { motion } from "framer-motion";
import Navbar from "../ui/Navbar";
import HeroSection from "@/pages/HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Certifications from "./Certifications";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LandingPage = () => {
  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 bg-neutral-bg`}
      id="home"
    >
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-gradient-blue {
          background: linear-gradient(-45deg, #B5E2FF, #46B7FE, #21A9FE, #11557F);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .animated-gradient-yellow {
          background: linear-gradient(0deg, #E24E01, #F07230, #D34803);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <HeroSection />
      </motion.div>

      {/* About Us Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <AboutMe />
      </motion.div>

      {/* Faculty Reviews Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Projects />
      </motion.div>

      {/* Why Us Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Certifications />
      </motion.div>

      {/* Footer */}
      <motion.div
        id="contact-me"  // Add this
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactMe />
      </motion.div>


      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default LandingPage;
