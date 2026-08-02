import { useTranslation } from "react-i18next";
import LegalPage from "../components/sections/LegalPage";
import type { LegalSectionData } from "../components/sections/LegalPage";
export default function Terminos() {
  const { t } = useTranslation();

  const sections: LegalSectionData[] = [
    {
      id: "objeto",
      number: "01",
      title: t("legal.terms.sections.purpose.title"),
      paragraphs: [
        t("legal.terms.sections.purpose.paragraph1"),
        t("legal.terms.sections.purpose.paragraph2"),
      ],
    },
    {
      id: "aceptacion",
      number: "02",
      title: t("legal.terms.sections.acceptance.title"),
      paragraphs: [
        t("legal.terms.sections.acceptance.paragraph1"),
        t("legal.terms.sections.acceptance.paragraph2"),
      ],
    },
    {
      id: "uso-del-sitio",
      number: "03",
      title: t("legal.terms.sections.siteUse.title"),
      paragraphs: [
        t("legal.terms.sections.siteUse.paragraph1"),
      ],
      bullets: [
        t("legal.terms.sections.siteUse.bullet1"),
        t("legal.terms.sections.siteUse.bullet2"),
        t("legal.terms.sections.siteUse.bullet3"),
        t("legal.terms.sections.siteUse.bullet4"),
        t("legal.terms.sections.siteUse.bullet5"),
      ],
    },
    {
      id: "mayoria-de-edad",
      number: "04",
      title: t("legal.terms.sections.age.title"),
      paragraphs: [
        t("legal.terms.sections.age.paragraph1"),
        t("legal.terms.sections.age.paragraph2"),
        t("legal.terms.sections.age.paragraph3"),
      ],
    },
    {
      id: "productos",
      number: "05",
      title: t("legal.terms.sections.products.title"),
      paragraphs: [
        t("legal.terms.sections.products.paragraph1"),
        t("legal.terms.sections.products.paragraph2"),
        t("legal.terms.sections.products.paragraph3"),
      ],
    },
    {
      id: "solicitudes",
      number: "06",
      title: t("legal.terms.sections.requests.title"),
      paragraphs: [
        t("legal.terms.sections.requests.paragraph1"),
        t("legal.terms.sections.requests.paragraph2"),
        t("legal.terms.sections.requests.paragraph3"),
        t("legal.terms.sections.requests.paragraph4"),
      ],
    },
    {
      id: "propiedad-intelectual",
      number: "07",
      title: t("legal.terms.sections.intellectualProperty.title"),
      paragraphs: [
        t("legal.terms.sections.intellectualProperty.paragraph1"),
        t("legal.terms.sections.intellectualProperty.paragraph2"),
      ],
      bullets: [
        t("legal.terms.sections.intellectualProperty.bullet1"),
        t("legal.terms.sections.intellectualProperty.bullet2"),
        t("legal.terms.sections.intellectualProperty.bullet3"),
        t("legal.terms.sections.intellectualProperty.bullet4"),
        t("legal.terms.sections.intellectualProperty.bullet5"),
        t("legal.terms.sections.intellectualProperty.bullet6"),
        t("legal.terms.sections.intellectualProperty.bullet7"),
        t("legal.terms.sections.intellectualProperty.bullet8"),
      ],
    },
    {
      id: "marcas",
      number: "08",
      title: t("legal.terms.sections.trademarks.title"),
      paragraphs: [
        t("legal.terms.sections.trademarks.paragraph1"),
        t("legal.terms.sections.trademarks.paragraph2"),
      ],
    },
    {
      id: "contenido-del-usuario",
      number: "09",
      title: t("legal.terms.sections.userContent.title"),
      paragraphs: [
        t("legal.terms.sections.userContent.paragraph1"),
        t("legal.terms.sections.userContent.paragraph2"),
      ],
    },
    {
      id: "enlaces-externos",
      number: "10",
      title: t("legal.terms.sections.externalLinks.title"),
      paragraphs: [
        t("legal.terms.sections.externalLinks.paragraph1"),
        t("legal.terms.sections.externalLinks.paragraph2"),
      ],
    },
    {
      id: "disponibilidad",
      number: "11",
      title: t("legal.terms.sections.availability.title"),
      paragraphs: [
        t("legal.terms.sections.availability.paragraph1"),
        t("legal.terms.sections.availability.paragraph2"),
      ],
    },
    {
      id: "responsabilidad",
      number: "12",
      title: t("legal.terms.sections.liability.title"),
      paragraphs: [
        t("legal.terms.sections.liability.paragraph1"),
        t("legal.terms.sections.liability.paragraph2"),
        t("legal.terms.sections.liability.paragraph3"),
      ],
    },
    {
      id: "privacidad",
      number: "13",
      title: t("legal.terms.sections.privacy.title"),
      paragraphs: [
        t("legal.terms.sections.privacy.paragraph1"),
        t("legal.terms.sections.privacy.paragraph2"),
      ],
    },
    {
      id: "modificaciones",
      number: "14",
      title: t("legal.terms.sections.changes.title"),
      paragraphs: [
        t("legal.terms.sections.changes.paragraph1"),
        t("legal.terms.sections.changes.paragraph2"),
      ],
    },
    {
      id: "legislacion",
      number: "15",
      title: t("legal.terms.sections.law.title"),
      paragraphs: [
        t("legal.terms.sections.law.paragraph1"),
        t("legal.terms.sections.law.paragraph2"),
      ],
    },
    {
      id: "contacto",
      number: "16",
      title: t("legal.terms.sections.contact.title"),
      paragraphs: [
        t("legal.terms.sections.contact.paragraph1"),
      ],
      content: (
        <a
          href="mailto:contacto@13denero.com"
          className="
            inline-flex
            border-b
            border-[var(--color-gold)]/50
            pb-1
            text-[var(--color-gold)]
            transition-colors
            duration-300
            hover:border-[var(--color-gold)]
          "
        >
          contacto@13denero.com
        </a>
      ),
    },
  ];

  return (
    <LegalPage
      eyebrow={t("legal.terms.eyebrow")}
      title={t("legal.terms.title")}
      description={t("legal.terms.description")}
      updatedAt={t("legal.terms.updatedAt")}
      sections={sections}
    />
  );
}