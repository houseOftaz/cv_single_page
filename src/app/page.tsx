"use client"; // execute only on client side

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import ContactInfo from "@/app/components/ContactInfo";
import AboutMe from "@/app/components/AboutMe";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Education from "@/app/components/Education";
import { Content, Language } from "@/lib/type";

export default function CV() {
  const [language, setLanguage] = useState<Language>("fr");
  const [content, setContent] = useState<Content | null>(null);

  // fetch if language changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/data/data-${language}.json`);
      const data = await response.json();
      setContent(data);
    };
    fetchData();
  }, [language]);

  // change state
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans relative">
      <div className="container mx-auto bg-gray-100 rounded-2xl shadow-xl p-8 max-w-4xl">
        <Header
          title={content?.headerContent.title || ""}
          subtitle={content?.headerContent.subtitle || ""}
          toggleLanguage={content?.headerContent.toggleLanguage || ""}
          onToggleLanguage={toggleLanguage}
        />

        <main className="space-y-8">
          <ContactInfo title={content?.headerContent.contact || ""} />
          <AboutMe
            title={content?.headerContent.about || ""}
            content={content?.headerContent.aboutContent || []}
          />
          <Projects
            title={content?.headerContent.projects || ""}
            projects={content?.projectsContent || []}
          />
          <Skills
            title={content?.headerContent.skills || ""}
            skills={content?.skillsContent || []}
          />
          <Education
            title={content?.headerContent.education || ""}
            skills={content?.educationContent || []}
          />
        </main>
      </div>
    </div>
  );
}
