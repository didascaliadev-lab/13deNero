import {
  useState,
  type FormEvent,
} from "react";
import { useTranslation } from "react-i18next";

import Container from "../components/ui/Container";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contacto() {
  const { t } = useTranslation();

  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setIsSending(true);

    try {
      /*
       * Aquí conectaremos posteriormente EmailJS,
       * Formspree o el backend de Hostinger.
       */

      console.log("Formulario de contacto:", formData);

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error(
        "Error al enviar el formulario:",
        error,
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="bg-bg">
       {/* Hero */}
        <section
            className="
                relative
                flex
                min-h-[560px]
                items-start
                overflow-hidden
                sm:min-h-[640px]
                lg:min-h-[720px]
            "
            >
                <picture
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                    "
                >
                    {/* celu*/}
                    <source
                        media="(max-width: 767px)"
                        srcSet="/fotos/heros/contacto_celular.jpg"
                    />

                    {/* Desktop */}
                    <img
                        src="/fotos/heros/contacto.jpg"
                        alt={t("contact.hero.imageAlt")}
                        className="
                            h-full
                            w-full
                            object-cover
                            object-center
                        "
                    />
                </picture>

                {/* Oscurecimiento general */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Contraste para el texto */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-black/95
                        via-black/55
                        to-black/5
                    "
                />

                {/* Profundidad inferior */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-bg/80
                        via-transparent
                        to-black/5
                    "
                />

                <Container
                    size="xl"
                    className="
                        relative
                        z-10
                        w-full
                        pb-14
                        pt-36
                        sm:pb-16
                        sm:pt-40
                        lg:pb-20
                        lg:pt-44
                    "
                >
                    <div className="max-w-2xl">
                        <span
                            className="
                                text-[0.65rem]
                                tracking-[0.45em]
                                text-gold
                                sm:text-xs
                            "
                        >
                            {t("contact.hero.eyebrow")}
                        </span>

                        <h1
                            className="
                                mt-4
                                max-w-2xl
                                font-title
                                text-5xl
                                leading-[1]
                                text-text
                                sm:text-6xl
                                md:text-7xl
                                lg:text-[5.5rem]
                            "
                        >
                            {t("contact.hero.title")}
                        </h1>

                        <p
                            className="
                                mt-6
                                max-w-xl
                                text-base
                                leading-8
                                text-white/75
                                sm:text-lg
                                sm:leading-9
                            "
                        >
                            {t("contact.hero.description")}
                        </p>
                    </div>
                </Container>
            </section>

      {/* Introducción e información */}
      <section className="bg-bg py-20 sm:py-24 lg:py-32">
        <Container size="xl">
          <div
            className="
              grid
              gap-14
              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-20
              xl:gap-28
            "
          >
            <div>
              <span
                className="
                  text-[0.65rem]
                  tracking-[0.4em]
                  text-gold
                  sm:text-xs
                "
              >
                {t("contact.details.eyebrow")}
              </span>

              <h2
                className="
                  mt-5
                  max-w-xl
                  font-title
                  text-4xl
                  leading-tight
                  text-text
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {t("contact.details.title")}
              </h2>

              <p
                className="
                  mt-7
                  max-w-xl
                  text-base
                  leading-8
                  text-text-muted
                  sm:text-lg
                  sm:leading-9
                "
              >
                {t("contact.details.description")}
              </p>
            </div>

            <div className="border-t border-white/10">
              <ContactDetail
                label={t("contact.details.emailLabel")}
                value={t("contact.details.email")}
                href={`mailto:${t(
                  "contact.details.email",
                )}`}
              />

              <ContactDetail
                label={t("contact.details.phoneLabel")}
                value={t("contact.details.phone")}
                href={`tel:${t("contact.details.phoneLink")}`}
              />

              <ContactDetail
                label={t(
                  "contact.details.locationLabel",
                )}
                value={t("contact.details.location")}
              />

              <ContactDetail
                label={t(
                  "contact.details.scheduleLabel",
                )}
                value={t("contact.details.schedule")}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Formulario */}
      <section className="bg-surface/40 py-20 sm:py-24 lg:py-32">
        <Container size="xl">
          <div
            className="
              grid
              gap-14
              lg:grid-cols-[0.75fr_1.25fr]
              lg:gap-20
              xl:gap-28
            "
          >
            <div>
              <span
                className="
                  text-[0.65rem]
                  tracking-[0.4em]
                  text-gold
                  sm:text-xs
                "
              >
                {t("contact.form.eyebrow")}
              </span>

              <h2
                className="
                  mt-5
                  font-title
                  text-4xl
                  leading-tight
                  text-text
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {t("contact.form.title")}
              </h2>

              <p
                className="
                  mt-7
                  max-w-lg
                  text-base
                  leading-8
                  text-text-muted
                  sm:text-lg
                  sm:leading-9
                "
              >
                {t("contact.form.description")}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="
                border
                border-white/10
                bg-bg/60
                p-6
                sm:p-9
                lg:p-12
              "
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <FormField
                  id="name"
                  name="name"
                  type="text"
                  label={t("contact.form.name")}
                  placeholder={t(
                    "contact.form.namePlaceholder",
                  )}
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />

                <FormField
                  id="email"
                  name="email"
                  type="email"
                  label={t("contact.form.email")}
                  placeholder={t(
                    "contact.form.emailPlaceholder",
                  )}
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              <div className="mt-8">
                <FormField
                  id="subject"
                  name="subject"
                  type="text"
                  label={t("contact.form.subject")}
                  placeholder={t(
                    "contact.form.subjectPlaceholder",
                  )}
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="
                    block
                    text-xs
                    tracking-[0.22em]
                    text-gold
                  "
                >
                  {t("contact.form.message")}
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t(
                    "contact.form.messagePlaceholder",
                  )}
                  rows={6}
                  required
                  className="
                    mt-3
                    w-full
                    resize-none
                    border-0
                    border-b
                    border-white/15
                    bg-transparent
                    px-0
                    py-3
                    text-base
                    leading-8
                    text-text
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-white/30
                    focus:border-gold
                  "
                />
              </div>

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  items-start
                  gap-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <button
                  type="submit"
                  disabled={isSending}
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    border
                    border-gold
                    bg-gold
                    px-8
                    text-sm
                    font-semibold
                    tracking-[0.12em]
                    text-bg
                    transition-all
                    duration-300
                    hover:bg-transparent
                    hover:text-gold
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {isSending
                    ? t("contact.form.sending")
                    : t("contact.form.submit")}
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="
                      text-sm
                      leading-6
                      text-gold
                    "
                  >
                    {t("contact.form.success")}
                  </p>
                )}
              </div>
            </form>
          </div>
        </Container>
      </section>

      {/* Cierre */}
      <section className="bg-bg py-20 sm:py-24 lg:py-28">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            <div
              aria-hidden="true"
              className="
                mx-auto
                mb-8
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <div className="h-px w-14 bg-gold/40" />
              <span className="text-xs text-gold">
                ✦
              </span>
              <div className="h-px w-14 bg-gold/40" />
            </div>

            <p
              className="
                font-title
                text-3xl
                leading-[1.45]
                text-text
                sm:text-4xl
                lg:text-5xl
              "
            >
              {t("contact.closing.text")}
            </p>

            <span
              className="
                mt-8
                block
                text-xs
                tracking-[0.35em]
                text-gold
              "
            >
              {t("contact.closing.brand")}
            </span>
          </div>
        </Container>
      </section>
    </main>
  );
}

type ContactDetailProps = {
  label: string;
  value: string;
  href?: string;
};

function ContactDetail({
  label,
  value,
  href,
}: ContactDetailProps) {
  return (
    <div
      className="
        grid
        gap-3
        border-b
        border-white/10
        py-7
        sm:grid-cols-[180px_1fr]
        sm:items-center
        sm:gap-8
      "
    >
      <span
        className="
          text-xs
          tracking-[0.24em]
          text-gold
        "
      >
        {label}
      </span>

      {href ? (
        <a
          href={href}
          className="
            font-title
            text-2xl
            text-text
            transition-colors
            duration-300
            hover:text-gold
          "
        >
          {value}
        </a>
      ) : (
        <p className="font-title text-2xl text-text">
          {value}
        </p>
      )}
    </div>
  );
}

type FormFieldProps = {
  id: string;
  name: keyof FormData;
  type: "text" | "email";
  label: string;
  placeholder: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  autoComplete?: string;
};

function FormField({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  autoComplete,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          block
          text-xs
          tracking-[0.22em]
          text-gold
        "
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="
          mt-3
          w-full
          border-0
          border-b
          border-white/15
          bg-transparent
          px-0
          py-3
          text-base
          text-text
          outline-none
          transition-colors
          duration-300
          placeholder:text-white/30
          focus:border-gold
        "
      />
    </div>
  );
}