import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

type ContactInfoProps = {
  title: string;
};

export default function ContactInfo({ title }: ContactInfoProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "oftaz.code@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1] relative">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
        {title}
      </h2>
      <div className="space-y-2 text-gray-600">
        <p className="flex items-center">
          <FaEnvelope className="mr-2" />
          <a
            href="mailto:oftaz.code@gmail.com"
            className="hover:underline relative"
            onClick={handleEmailClick}
          >
            oftaz.code@gmail.com
            {emailCopied && (
              <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                Copié !
              </span>
            )}
          </a>
        </p>
        <p className="flex items-center">
          <FaPhone className="mr-2" />
          <a href="tel:+33650174772" className="hover:underline">
            +33 6 50 17 47 72
          </a>
        </p>
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2" /> Nantes, France
        </p>
        <Link
          href="/letter.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:underline mt-4"
        >
          <FaFileAlt className="mr-2" /> Lettre de motivation
        </Link>
      </div>

      {/* Sticky label with GitHub and LinkedIn links */}
      <div className="fixed bottom-4 left-4 z-50 flex space-x-2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
        <a
          href="https://github.com/houseOftaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
          aria-label="GitHub Profile"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/anastasia-davoz/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </section>
  );
}
