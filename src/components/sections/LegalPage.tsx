import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";

export interface LegalSectionData {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  content?: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSectionData[];
}

export default function LegalPage({
  eyebrow,
  title,
  description,
  updatedAt,
  sections,
}: LegalPageProps) {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[30rem]
            w-[30rem]
            -translate-x-1/2
            rounded-full
            bg-[var(--color-gold)]
            opacity-[0.04]
            blur-[140px]
          "
        />

        <Container>
          <div className="relative pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
            <Link
              to="/"
              className="
                mb-10
                inline-flex
                items-center
                gap-2
                text-xs
                uppercase
                tracking-[0.22em]
                text-[var(--color-text-muted)]
                transition-colors
                duration-300
                hover:text-[var(--color-gold)]
              "
            >
              <HiOutlineArrowLeft size={17} />

              {t("legal.common.backHome")}
            </Link>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.32em]
                text-[var(--color-gold)]
              "
            >
              {eyebrow}
            </p>

            <h1
              className="
                mt-5
                max-w-4xl
                font-title
                text-4xl
                leading-[1.08]
                sm:text-5xl
                lg:text-6xl
              "
            >
              {title}
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-[var(--color-text-muted)]
                sm:text-lg
              "
            >
              {description}
            </p>

            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-2
                text-sm
                text-[var(--color-text-muted)]
              "
            >
              <span>
                {t("legal.common.lastUpdate")}
              </span>

              <span
                aria-hidden="true"
                className="h-px w-8 bg-[var(--color-gold)]/60"
              />

              <time>{updatedAt}</time>
            </div>
          </div>
        </Container>
      </section>

      {/* Contenido */}

      <Container>
        <div
          className="
            grid
            gap-14
            py-16
            lg:grid-cols-[230px_minmax(0,1fr)]
            lg:gap-20
            lg:py-24
          "
        >

          {/* Índice */}

          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p
                className="
                  mb-6
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[var(--color-gold)]
                "
              >
                {t("legal.common.contents")}
              </p>

              <nav aria-label={t("legal.common.contents")}>
                <ul className="space-y-4">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="
                          group
                          flex
                          items-start
                          gap-3
                          text-sm
                          leading-6
                          text-[var(--color-text-muted)]
                          transition-colors
                          duration-300
                          hover:text-[var(--color-text)]
                        "
                      >
                        <span
                          className="
                            mt-[2px]
                            font-title
                            text-[var(--color-gold)]
                          "
                        >
                          {section.number}
                        </span>

                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Secciones */}

          <div className="min-w-0">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={`
                  scroll-mt-32
                  ${
                    index !== 0
                      ? "mt-16 border-t border-white/10 pt-16 sm:mt-20 sm:pt-20"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    grid
                    gap-5
                    sm:grid-cols-[70px_minmax(0,1fr)]
                    sm:gap-8
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      font-title
                      text-4xl
                      leading-none
                      text-[var(--color-gold)]/45
                    "
                  >
                    {section.number}
                  </span>

                  <div>
                    <h2
                      className="
                        font-title
                        text-2xl
                        leading-tight
                        sm:text-3xl
                      "
                    >
                      {section.title}
                    </h2>

                    {section.paragraphs && (
                      <div
                        className="
                          mt-6
                          space-y-5
                          text-base
                          leading-8
                          text-[var(--color-text-muted)]
                        "
                      >
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                          <p key={`${section.id}-paragraph-${paragraphIndex}`}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.bullets && (
                      <ul
                        className="
                          mt-6
                          space-y-3
                          text-base
                          leading-7
                          text-[var(--color-text-muted)]
                        "
                      >
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={`${section.id}-bullet-${bulletIndex}`}
                            className="flex items-start gap-3"
                          >
                            <span
                              aria-hidden="true"
                              className="
                                mt-[0.72rem]
                                h-1
                                w-1
                                shrink-0
                                rounded-full
                                bg-[var(--color-gold)]
                              "
                            />

                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.content && (
                      <div className="mt-6">
                        {section.content}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}

            <div className="mt-20 border-t border-white/10 pt-10">
              <Link
                to="/"
                className="
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-[var(--color-gold)]/50
                  px-6
                  py-3
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[var(--color-gold)]
                  transition-all
                  duration-300
                  hover:border-[var(--color-gold)]
                  hover:bg-[var(--color-gold)]
                  hover:text-[var(--color-bg)]
                "
              >
                <HiOutlineArrowLeft size={17} />

                {t("legal.common.backHome")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}