import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";
import Link from "next/link";

type ContactInfoProps = {
  title: string;
};

export default function ContactInfo({ title }: ContactInfoProps) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
        {title}
      </h2>
      <div className="space-y-2 text-gray-600">
        <p className="flex items-center">
          <FaEnvelope className="mr-2" />
          <a
            href="mailto:oftaz.code@gmail.com"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:oftaz.code@gmail.com";
            }}
          >
            oftaz.code@gmail.com
          </a>
        </p>
        <p className="flex items-center">
          <FaPhone className="mr-2" />
          <a
            href="tel:+33650174772"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "tel:+33650174772";
            }}
          >
            +33 6 50 17 47 72
          </a>
        </p>
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2" /> Nantes, France
        </p>
        <p className="flex items-center">
          <FaGithub className="mr-2" />
          <a
            href="https://github.com/houseOftaz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/houseOftaz
          </a>
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
    </section>
  );
}
