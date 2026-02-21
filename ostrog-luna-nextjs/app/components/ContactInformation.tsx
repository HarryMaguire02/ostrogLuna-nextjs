import Image from "next/image";
import Container from "./Container";
import type { Dictionary } from "../i18n";

type Props = {
  dict: Dictionary["contactUs"]["contactInformation"];
};

export default function ContactInformation({ dict }: Props) {
  const contacts = [
    { ...dict.contacts.mihailo, icon: "/contact-person.png" },
    { ...dict.contacts.factory, icon: "/production-factory.png" },
    { ...dict.contacts.atanas, icon: "/contact-person.png" },
    { ...dict.contacts.legal, icon: "/contact-person.png" },
  ];

  return (
    <section className="py-8 sm:py-12">
      <Container>
        {/* Section title */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:block h-0.5 flex-1 rounded-full bg-linear-to-r from-secondary to-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary sm:whitespace-nowrap">
            {dict.title}
          </h2>
          <span className="hidden sm:block h-0.5 flex-1 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0">
          {contacts.map((contact, index) => (
            <div
              key={contact.name}
              className={[
                "flex flex-col items-center text-center px-1 sm:px-6 gap-2",
                index % 2 === 1 ? "lg:border-l-2 lg:border-primary" : "",
                index === 2 ? "lg:border-l-2 lg:border-primary" : "",
              ].join(" ")}
            >
              <div className="relative w-14 h-14 mb-2">
                <Image
                  src={contact.icon}
                  alt={contact.name}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-primary">{contact.name}</p>
              <p className="text-sm text-primary">{contact.phone}</p>
              <p className="text-sm text-primary break-all">{contact.email}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
