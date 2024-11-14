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
    <header className="flex flex-col sm:flex-row items-center justify-between mb-8">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="sm:mr-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg bg-white p-1">
            <Image
              src="/profile.webp"
              alt="profile picture"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 font-courier">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-courier">
            {subtitle}
          </p>
        </div>
      </div>
      <button
        onClick={onToggleLanguage}
        className="fixed top-4 right-4 z-10 bg-gray-800 text-white text-sm font-bold py-2 px-3 rounded-lg shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.1),inset_2px_2px_4px_rgba(0,0,0,0.5)] hover:shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.1),inset_1px_1px_2px_rgba(0,0,0,0.5)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.1)] transition-shadow duration-200"
      >
        {toggleLanguage}
      </button>
    </header>
  );
}
