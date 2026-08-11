import {
  useEffect,
  useState,
  type FormEvent,
} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiXMark } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

type PortalSignupModalProps = {
  storageKey?: string;
};

export default function PortalSignupModal({
  storageKey = "13denero-portal-signup-seen",
}: PortalSignupModalProps) {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(() => {
    try {
      return sessionStorage.getItem(storageKey) !== "true";
    } catch {
      return true;
    }
  });

  const [email, setEmail] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] =
    useState(false);

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isVisible]);

  const rememberModal = () => {
    try {
      sessionStorage.setItem(storageKey, "true");
    } catch {
      // Si sessionStorage no está disponible,
      // simplemente permitimos que el modal vuelva a mostrarse.
    }
  };

  const closeModal = () => {
    rememberModal();
    setIsVisible(false);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail || !acceptedPrivacy) {
      return;
    }

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID;

    const templateId =
      import.meta.env.VITE_EMAILJS_PORTAL_TEMPLATE_ID;

    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !templateId ||
      !publicKey
    ) {
      setError(
        t("portal.signupModal.error"),
      );

      return;
    }

    setIsSending(true);
    setError("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          email: cleanEmail,
          date: new Date().toLocaleString(
            "es-MX",
            {
              dateStyle: "long",
              timeStyle: "short",
            },
          ),
        },
        {
          publicKey,
        },
      );

      setSuccess(true);

      rememberModal();

      window.setTimeout(() => {
        setIsVisible(false);
      }, 2500);
    } catch {
      setError(
        t("portal.signupModal.error"),
      );
    } finally {
      setIsSending(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-black/80
        px-4
        py-5
        backdrop-blur-md

        sm:px-6
        sm:py-8
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-signup-title"
    >
      <div
        className="
          relative
          my-auto
          w-full
          max-w-[92vw]
          overflow-hidden
          border
          border-gold/25
          bg-bg
          shadow-2xl

          sm:max-w-lg
          md:max-w-xl
        "
      >
        <div
          className="
            max-h-[calc(100dvh-2.5rem)]
            overflow-y-auto
            px-5
            py-8

            sm:max-h-[calc(100dvh-4rem)]
            sm:px-8
            sm:py-10

            md:px-10
            md:py-12

            lg:px-12
          "
        >
          {/* Brillo */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-44
              w-44
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-gold/10
              blur-[80px]

              sm:h-56
              sm:w-56
              sm:blur-[100px]
            "
          />

          {/* Cerrar */}
          <button
            type="button"
            onClick={closeModal}
            aria-label={t(
              "portal.signupModal.close",
            )}
            className="
              absolute
              right-3
              top-3
              z-20
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-bg/80
              text-muted
              backdrop-blur-md
              transition-all
              duration-300

              hover:border-gold/50
              hover:text-gold

              sm:right-5
              sm:top-5
              sm:h-10
              sm:w-10
            "
          >
            <HiXMark size={21} />
          </button>

          <div className="relative z-10 text-center">
            {/* Eyebrow */}
            <span
              className="
                text-[0.6rem]
                uppercase
                tracking-[0.32em]
                text-gold

                sm:text-[0.65rem]
                sm:tracking-[0.4em]

                md:text-xs
              "
            >
              {t(
                "portal.signupModal.eyebrow",
              )}
            </span>

            {/* Título */}
            <h2
              id="portal-signup-title"
              className="
                mx-auto
                mt-4
                max-w-md
                font-title
                text-3xl
                leading-[1.08]
                text-text

                sm:mt-5
                sm:text-4xl

                md:text-5xl
              "
            >
              {t(
                "portal.signupModal.title",
              )}
            </h2>

            {/* Descripción */}
            <p
              className="
                mx-auto
                mt-5
                max-w-md
                text-sm
                leading-7
                text-muted

                sm:mt-6
                sm:text-base
                sm:leading-8

                md:text-lg
              "
            >
              {t(
                "portal.signupModal.description",
              )}
            </p>

            {!success ? (
              <form
                onSubmit={handleSubmit}
                className="mt-7 sm:mt-8"
              >
                {/* Email */}
                <label
                  htmlFor="portal-email"
                  className="
                    block
                    text-left
                    text-[0.65rem]
                    uppercase
                    tracking-[0.18em]
                    text-gold

                    sm:text-xs
                    sm:tracking-[0.2em]
                  "
                >
                  {t(
                    "portal.signupModal.emailLabel",
                  )}
                </label>

                <input
                  id="portal-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder={t(
                    "portal.signupModal.emailPlaceholder",
                  )}
                  required
                  autoComplete="email"
                  className="
                    mt-3
                    min-h-12
                    w-full
                    border
                    border-white/10
                    bg-surface
                    px-4
                    py-3
                    text-sm
                    text-text
                    outline-none
                    transition-colors
                    duration-300

                    placeholder:text-white/30
                    focus:border-gold/70

                    sm:px-5
                    sm:py-4
                    sm:text-base
                  "
                />

                {/* Consentimiento */}
                <label
                  className="
                    mt-5
                    flex
                    cursor-pointer
                    items-start
                    gap-3
                    text-left
                  "
                >
                  <input
                    type="checkbox"
                    checked={acceptedPrivacy}
                    onChange={(event) =>
                      setAcceptedPrivacy(
                        event.target.checked,
                      )
                    }
                    required
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      accent-[var(--color-gold)]
                    "
                  />

                  <span
                    className="
                      text-[0.68rem]
                      leading-5
                      text-white/45

                      sm:text-xs
                      sm:leading-6
                    "
                  >
                    {t(
                      "portal.signupModal.consentBefore",
                    )}{" "}
                    <Link
                      to="/privacidad"
                      onClick={closeModal}
                      className="
                        text-gold
                        underline
                        underline-offset-4
                        transition-colors
                        duration-300
                        hover:text-text
                      "
                    >
                      {t(
                        "portal.signupModal.privacyLink",
                      )}
                    </Link>
                    .
                  </span>
                </label>

                {/* Error */}
                {error && (
                  <p
                    role="alert"
                    className="
                      mt-4
                      text-left
                      text-xs
                      leading-5
                      text-red-400

                      sm:text-sm
                    "
                  >
                    {error}
                  </p>
                )}

                {/* Enviar */}
                <button
                  type="submit"
                  disabled={
                    isSending ||
                    !acceptedPrivacy
                  }
                  className="
                    mt-5
                    inline-flex
                    min-h-11
                    w-full
                    items-center
                    justify-center
                    border
                    border-gold
                    bg-gold
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-bg
                    transition-all
                    duration-300

                    hover:bg-transparent
                    hover:text-gold

                    disabled:cursor-not-allowed
                    disabled:opacity-40

                    sm:min-h-12
                    sm:px-8
                    sm:text-sm
                    sm:tracking-[0.16em]
                  "
                >
                  {isSending
                    ? t(
                        "portal.signupModal.sending",
                      )
                    : t(
                        "portal.signupModal.submit",
                      )}
                </button>

                {/* Continuar sin registro */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    mt-4
                    text-xs
                    text-muted
                    transition-colors
                    duration-300
                    hover:text-text

                    sm:text-sm
                  "
                >
                  {t(
                    "portal.signupModal.skip",
                  )}
                </button>
              </form>
            ) : (
              <div
                className="
                  mt-7
                  border
                  border-gold/20
                  bg-gold/5
                  px-5
                  py-6

                  sm:mt-8
                  sm:px-6
                  sm:py-7
                "
              >
                <span className="text-lg text-gold sm:text-xl">
                  ✦
                </span>

                <p
                  className="
                    mt-3
                    font-title
                    text-xl
                    text-text

                    sm:mt-4
                    sm:text-2xl
                  "
                >
                  {t(
                    "portal.signupModal.successTitle",
                  )}
                </p>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-6
                    text-muted

                    sm:text-sm
                    sm:leading-7
                  "
                >
                  {t(
                    "portal.signupModal.success",
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}