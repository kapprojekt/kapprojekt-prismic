import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type HomeSectionProps = SliceComponentProps<Content.HomeSectionSlice>;

const HomeSection: FC<HomeSectionProps> = ({ slice }) => {
  return (
    <section
      className="h-screen relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1>{slice.primary.title}</h1>
      <h3>{slice.primary.subtitle}</h3>
      <PrismicRichText field={slice.primary.text} />
      {slice.primary.buttonlink.map((link) => (
        <PrismicNextLink key={link.key} field={link} className={link.variant} />
      ))}
      {slice.primary.socialmedialink.map((link) => (
        <PrismicNextLink key={link.key} field={link}>
          Link
        </PrismicNextLink>
      ))}
      <PrismicNextImage
        className="absolute inset-0 object-cover w-full h-full -z-10"
        field={slice.primary.background}
      />
    </section>
  );
};

export default HomeSection;
