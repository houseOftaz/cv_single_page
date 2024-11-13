type SkillsProps = {
  title: string;
  skills: string[];
};

export default function Skills({ title, skills }: SkillsProps) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
        {title}
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
