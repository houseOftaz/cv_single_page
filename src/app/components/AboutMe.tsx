type AboutMeProps = {
  title: string;
  content: string[];
};

export default function AboutMe({ title, content }: AboutMeProps) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
        {title}
      </h2>
      {content.map((paragraph, index) => (
        <p key={index} className="text-gray-600 mb-4">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
