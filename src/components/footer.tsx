import React from "react";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import Lucide icons
import { Container } from "@/components/container";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:${hoverColor}`}
    >
      {icon}
    </a>
  );
};

export const Footer = () => {
  return (
    <div className="w-full bg-blue-800 text-white py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column: About Us */}
          <div className="md:col-span-2 flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-lg leading-relaxed text-center">
              Empowering your journey to success with{" "}
              <span className="font-bold text-blue-300">
                advanced AI technology
              </span>
              , we are revolutionizing interview preparation. Our mission is to
              make it <span className="font-semibold">smarter</span>,{" "}
              <span className="font-semibold">faster</span>, and{" "}
              <span className="font-semibold">more effective</span> through
              personalized, AI-driven tools.
            </p>
          </div>
          {/* Second Column: Address and Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-4 text-center">Burdwan, West Bengal, 713104</p>
            <div className="flex gap-4">
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook size={24} />}
                hoverColor="text-blue-500"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={24} />}
                hoverColor="text-blue-400"
              />
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram size={24} />}
                hoverColor="text-pink-500"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin size={24} />}
                hoverColor="text-blue-700"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
