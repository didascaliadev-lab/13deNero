import { useTranslation } from "react-i18next";
import LegalPage from "../components/sections/LegalPage";
import type { LegalSectionData } from "../components/sections/LegalPage";

export default function Privacidad() {
  const { t } = useTranslation();

  const sections: LegalSectionData[] = [
    {
      id: "responsable",
      number: "01",
      title: t("legal.privacy.sections.responsible.title"),
      paragraphs: [
        t("legal.privacy.sections.responsible.paragraph1"),
       // t("legal.privacy.sections.responsible.paragraph2"),
      ],
    },
    {
      id: "datos-personales",
      number: "02",
      title: t("legal.privacy.sections.personalData.title"),
      paragraphs: [
        t("legal.privacy.sections.personalData.paragraph1"),
      ],
      bullets: [
        t("legal.privacy.sections.personalData.bullet1"),
        t("legal.privacy.sections.personalData.bullet2"),
        t("legal.privacy.sections.personalData.bullet3"),
        t("legal.privacy.sections.personalData.bullet4"),
        t("legal.privacy.sections.personalData.bullet5"),
      ],
    },
    {
      id: "datos-tecnicos",
      number: "03",
      title: t("legal.privacy.sections.technicalData.title"),
      paragraphs: [
        t("legal.privacy.sections.technicalData.paragraph1"),
      ],
      bullets: [
        t("legal.privacy.sections.technicalData.bullet1"),
        t("legal.privacy.sections.technicalData.bullet2"),
        t("legal.privacy.sections.technicalData.bullet3"),
        t("legal.privacy.sections.technicalData.bullet4"),
        t("legal.privacy.sections.technicalData.bullet5"),
      ],
    },
    {
      id: "datos-sensibles",
      number: "04",
      title: t("legal.privacy.sections.sensitiveData.title"),
      paragraphs: [
        t("legal.privacy.sections.sensitiveData.paragraph1"),
        t("legal.privacy.sections.sensitiveData.paragraph2"),
      ],
    },
    {
      id: "finalidades-primarias",
      number: "05",
      title: t("legal.privacy.sections.primaryPurposes.title"),
      paragraphs: [
        t("legal.privacy.sections.primaryPurposes.paragraph1"),
      ],
      bullets: [
        t("legal.privacy.sections.primaryPurposes.bullet1"),
        t("legal.privacy.sections.primaryPurposes.bullet2"),
        t("legal.privacy.sections.primaryPurposes.bullet3"),
        t("legal.privacy.sections.primaryPurposes.bullet4"),
        t("legal.privacy.sections.primaryPurposes.bullet5"),
        t("legal.privacy.sections.primaryPurposes.bullet6"),
      ],
    },
    {
      id: "finalidades-secundarias",
      number: "06",
      title: t("legal.privacy.sections.secondaryPurposes.title"),
      paragraphs: [
        t("legal.privacy.sections.secondaryPurposes.paragraph1"),
        t("legal.privacy.sections.secondaryPurposes.paragraph2"),
      ],
      bullets: [
        t("legal.privacy.sections.secondaryPurposes.bullet1"),
        t("legal.privacy.sections.secondaryPurposes.bullet2"),
        t("legal.privacy.sections.secondaryPurposes.bullet3"),
      ],
    },
    {
      id: "fundamento-y-consentimiento",
      number: "07",
      title: t("legal.privacy.sections.consent.title"),
      paragraphs: [
        t("legal.privacy.sections.consent.paragraph1"),
        t("legal.privacy.sections.consent.paragraph2"),
      ],
    },
    {
      id: "transferencias",
      number: "08",
      title: t("legal.privacy.sections.transfers.title"),
      paragraphs: [
        t("legal.privacy.sections.transfers.paragraph1"),
        t("legal.privacy.sections.transfers.paragraph2"),
      ],
      bullets: [
        t("legal.privacy.sections.transfers.bullet1"),
        t("legal.privacy.sections.transfers.bullet2"),
        t("legal.privacy.sections.transfers.bullet3"),
        t("legal.privacy.sections.transfers.bullet4"),
      ],
    },
    {
      id: "encargados",
      number: "09",
      title: t("legal.privacy.sections.processors.title"),
      paragraphs: [
        t("legal.privacy.sections.processors.paragraph1"),
        t("legal.privacy.sections.processors.paragraph2"),
      ],
    },
    {
      id: "conservacion",
      number: "10",
      title: t("legal.privacy.sections.retention.title"),
      paragraphs: [
        t("legal.privacy.sections.retention.paragraph1"),
        t("legal.privacy.sections.retention.paragraph2"),
      ],
    },
    {
      id: "seguridad",
      number: "11",
      title: t("legal.privacy.sections.security.title"),
      paragraphs: [
        t("legal.privacy.sections.security.paragraph1"),
        t("legal.privacy.sections.security.paragraph2"),
      ],
    },
    {
      id: "derechos-arco",
      number: "12",
      title: t("legal.privacy.sections.arco.title"),
      paragraphs: [
        t("legal.privacy.sections.arco.paragraph1"),
      ],
      bullets: [
        t("legal.privacy.sections.arco.bullet1"),
        t("legal.privacy.sections.arco.bullet2"),
        t("legal.privacy.sections.arco.bullet3"),
        t("legal.privacy.sections.arco.bullet4"),
      ],
    },
    {
      id: "solicitud-arco",
      number: "13",
      title: t("legal.privacy.sections.arcoRequest.title"),
      paragraphs: [
        t("legal.privacy.sections.arcoRequest.paragraph1"),
      ],
      bullets: [
        t("legal.privacy.sections.arcoRequest.bullet1"),
        t("legal.privacy.sections.arcoRequest.bullet2"),
        t("legal.privacy.sections.arcoRequest.bullet3"),
        t("legal.privacy.sections.arcoRequest.bullet4"),
        t("legal.privacy.sections.arcoRequest.bullet5"),
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
    {
      id: "revocacion",
      number: "14",
      title: t("legal.privacy.sections.revocation.title"),
      paragraphs: [
        t("legal.privacy.sections.revocation.paragraph1"),
        t("legal.privacy.sections.revocation.paragraph2"),
      ],
    },
    {
      id: "cookies",
      number: "15",
      title: t("legal.privacy.sections.cookies.title"),
      paragraphs: [
        t("legal.privacy.sections.cookies.paragraph1"),
        t("legal.privacy.sections.cookies.paragraph2"),
        t("legal.privacy.sections.cookies.paragraph3"),
      ],
    },
    {
      id: "terceros",
      number: "16",
      title: t("legal.privacy.sections.thirdPartySites.title"),
      paragraphs: [
        t("legal.privacy.sections.thirdPartySites.paragraph1"),
        t("legal.privacy.sections.thirdPartySites.paragraph2"),
      ],
    },
    {
      id: "menores",
      number: "17",
      title: t("legal.privacy.sections.minors.title"),
      paragraphs: [
        t("legal.privacy.sections.minors.paragraph1"),
        t("legal.privacy.sections.minors.paragraph2"),
      ],
    },
    {
      id: "cambios",
      number: "18",
      title: t("legal.privacy.sections.changes.title"),
      paragraphs: [
        t("legal.privacy.sections.changes.paragraph1"),
        t("legal.privacy.sections.changes.paragraph2"),
      ],
    },
    {
      id: "contacto-privacidad",
      number: "19",
      title: t("legal.privacy.sections.contact.title"),
      paragraphs: [
        t("legal.privacy.sections.contact.paragraph1"),
      ],
      content: (
        <div className="space-y-2 text-[var(--color-text-muted)]">
          <p>
            <strong className="font-medium text-[var(--color-text)]">
              {t("legal.privacy.sections.contact.responsibleLabel")}:
            </strong>{" "}
            13 deNERO
          </p>

         {/* <p>
            <strong className="font-medium text-[var(--color-text)]">
              {t("legal.privacy.sections.contact.addressLabel")}:
            </strong>{" "}
            [DOMICILIO DEL RESPONSABLE]
          </p>*/}

          <p>
            <strong className="font-medium text-[var(--color-text)]">
              {t("legal.privacy.sections.contact.emailLabel")}:
            </strong>{" "}
            <a
              href="mailto:contacto@13denero.com"
              className="
                border-b
                border-[var(--color-gold)]/50
                text-[var(--color-gold)]
                transition-colors
                hover:border-[var(--color-gold)]
              "
            >
              contacto@13denero.com
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <LegalPage
      eyebrow={t("legal.privacy.eyebrow")}
      title={t("legal.privacy.title")}
      description={t("legal.privacy.description")}
      updatedAt={t("legal.privacy.updatedAt")}
      sections={sections}
    />
  );
}