type Project = {
  title: string;
  tech: string;
  link: string;
  description: string;
};

type ProjectsProps = {
  title: string;
  projects: Project[];
};

export default function Projects({ title, projects }: ProjectsProps) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
        {title}
      </h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="text-xl font-medium text-gray-800 font-courier">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-2">{project.tech}</p>
            <p className="text-gray-600 mb-2">
              {project.link}{" "}
              <a
                href={`https://github.com/${
                  project.title === "Dev-js"
                    ? "SdevWeb7/Dev-js"
                    : "houseOftaz/memory_final"
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                GitHub - {project.title}
              </a>
            </p>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
