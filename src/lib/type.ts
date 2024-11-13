export type Content = {
  headerContent: HeaderContent;
  projectsContent: ProjectsContent;
  educationContent: EducationContent;
  skillsContent: SkillsContent;
};

export type Language = "fr" | "en";

export type HeaderContent = {
  title: string;
  subtitle: string;
  contact: string;
  about: string;
  projects: string;
  skills: string;
  education: string;
  toggleLanguage: string;
  aboutContent: string[];
};

export type ProjectsContent = {
  title: string;
  tech: string;
  link: string;
  description: string;
}[];

export type EducationContent = {
  title: string;
  school: string;
}[];

export type SkillsContent = string[];
