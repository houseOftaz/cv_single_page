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
          <FaEnvelope className="mr-2" /> oftaz.code@gmail.com
        </p>
        <p className="flex items-center">
          <FaPhone className="mr-2" /> +33 6 50 17 47 72
        </p>
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2" /> Nantes, France
        </p>
        <p className="flex items-center">
          <FaGithub className="mr-2" /> github.com/houseOftaz
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
