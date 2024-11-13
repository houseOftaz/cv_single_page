import Image from "next/image";

type HeaderProps = {
  title: string;
  subtitle: string;
  toggleLanguage: string;
  onToggleLanguage: () => void;
};

export default function Header({
  title,
  subtitle,
  toggleLanguage,
  onToggleLanguage,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <div className="mr-6">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg bg-white p-1">
            <Image
              src="/profile.webp"
              alt="profile picture"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2 font-courier">
            {title}
          </h1>
          <p className="text-2xl text-gray-600 font-courier">{subtitle}</p>
        </div>
      </div>
      <button
        onClick={onToggleLanguage}
        className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.1),inset_2px_2px_4px_rgba(0,0,0,0.5)] hover:shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.1),inset_1px_1px_2px_rgba(0,0,0,0.5)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.1)] transition-shadow duration-200"
      >
        {toggleLanguage}
      </button>
    </header>
  );
}
