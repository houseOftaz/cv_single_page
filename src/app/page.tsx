import Image from "next/image";

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      <div className="container mx-auto bg-gray-100 rounded-2xl shadow-xl p-8 max-w-4xl">
        <header className="flex items-center mb-8">
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
              DAVOZ Anastasia
            </h1>
            <p className="text-2xl text-gray-600 font-courier">
              Apprentie développeur
            </p>
          </div>
        </header>

        <main className="space-y-8">
          <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
              Coordonnées
            </h2>
            <div className="space-y-2 text-gray-600">
              <p>Email: oftaz.code@gmail.com</p>
              <p>Téléphone: +33 6 50 17 47 72</p>
              <p>Localisation: Nantes, France</p>
              <p>GitHub: github.com/houseOftaz</p>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
              À propos de moi
            </h2>
            <p className="text-gray-600 mb-4">
              Fasciné par l&apos;univers numérique et ses possibilités infinies,
              j&apos;ai décidé depuis 2021 de me lancer dans cette voie.
            </p>
            <p className="text-gray-600 mb-4">
              De nature créative, mon expérience de styliste modéliste m&apos;a
              permis de développer capacité d&apos;adaptation et une gestion des
              besoins clients, des atouts précieux dans de nombreux domaines. Je
              suis à la recherche d&apos;une première expérience en alternance
              ou stage pour progresser dans ce secteur.
            </p>
            <p className="text-gray-600 mb-4">
              Je cherche encore ma spécialisation, mais je suis convaincu que ma
              passion pour les technologies, quelles qu&apos;elles soient,
              m&apos;aidera à atteindre mon objectif de devenir un expert du
              numérique.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
              Mes Projets
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800 font-courier">
                  Dev-js
                </h3>
                <p className="text-gray-600 mb-2">
                  Technologies utilisées : React, Next.js, TypeScript, Prisma,
                  Zod, Server Actions, Next Auth, Tailwind CSS, Shadcn-ui,
                  Stripe
                </p>
                <p className="text-gray-600 mb-2">
                  Lien du projet :{" "}
                  <a
                    href="https://github.com/SdevWeb7/Dev-js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    GitHub - Dev-js
                  </a>
                </p>
                <p className="text-gray-600">
                  Ce projet collaboratif, mené avec un partenaire autodidacte,
                  consiste à développer une plateforme d&apos;e-learning
                  accessible à tous. L&apos;objectif est de renforcer nos
                  compétences techniques tout en proposant un support pour
                  accompagner les autres dans leur parcours
                  d&apos;apprentissage. Nous préparons des vidéos tuto ainsi que
                  des exercices ludiques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 font-courier">
                  Memory Game
                </h3>
                <p className="text-gray-600 mb-2">
                  Technologies utilisées : React.js, Node.js, MySQL
                </p>
                <p className="text-gray-600 mb-2">
                  Lien du projet :{" "}
                  <a
                    href="https://github.com/houseOftaz/memory_final"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    GitHub - Memory Game
                  </a>
                </p>
                <p className="text-gray-600">
                  Ce jeu de mémoire, développé intégralement pour mon examen,
                  invite les utilisateurs à associer des paires de cartes.
                  J&apos;ai conçu ce projet de A à Z, en gérant la logique de
                  jeu, la conception front-end, et l&apos;intégration avec une
                  base de données. Cette expérience a renforcé mes compétences
                  en développement d&apos;applications interactives et m&apos;a
                  permis d&apos;appliquer diverses technologies modernes.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
              Compétences
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "Git",
                "RESTful APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-[inset_-12px_-12px_24px_#ffffff,inset_12px_12px_24px_#d1d1d1]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 font-courier">
              Formation
            </h2>
            <div>
              <h3 className="text-xl font-medium text-gray-800 font-courier">
                Diplôme en Développement Web Full-Stack
              </h3>
              <p className="text-gray-600">3W Academy | 2024</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 font-courier">
                Diplôme en Développement Web Mobile
              </h3>
              <p className="text-gray-600">Study | 2024</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 font-courier">
                Diplôme en Stylisme Modélisme
              </h3>
              <p className="text-gray-600">MJM Graphic Design | 2016</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
