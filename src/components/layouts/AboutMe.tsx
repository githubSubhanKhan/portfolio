import React from 'react';
import {
  UniversityIcon,
  GraduationCapIcon,
  Award,
  BriefcaseBusinessIcon,
  Code,
  MapPin
} from 'lucide-react';

const timelineItems = [
  {
    icon: UniversityIcon,
    title: "NED University of Engineering & Technology",
    period: "2023-2027",
    description: ""
  },
  {
    icon: GraduationCapIcon,
    title: "Bachelors in Computer Science & Information Technology",
    period: "",
    description: "Specialization in Artificial Intelligence"
  },
  {
    icon: Award,
    title: "Excellence Award",
    period: "2024",
    description: "Academic Excellence in AI Research"
  },
  {
    icon: BriefcaseBusinessIcon,
    title: "Engineer Abdul Kalam Library",
    period: "2024-2025",
    description: "Trainee Software Developer"
  },
  {
    icon: Code,
    title: "Software Developer",
    period: "",
    description: "Full Stack Developer"
  },
  {
    icon: MapPin,
    title: "Karachi",
    period: "",
    description: "Pakistan"
  }
];

const AboutMe = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 " id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative flex gap-4 items-start">
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-md">
                <item.icon size={28} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-primary-DEFAULT">
                  {item.title}
                </h3>
                <p className="text-neutral-light text-sm mb-1">{item.period}</p>
                <p className="text-neutral-DEFAULT text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
