import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type HomeSectionProps = SliceComponentProps<Content.HomeSectionSlice>;

const HomeSection: FC<HomeSectionProps> = ({ slice }) => {
  return (
    <section
      className="h-screen relative min-h-max w-full z-10"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <header className="px-8 text-white text-center sm:text-left bg-[rgba(0,0,0,0.4)] w-full h-full flex flex-col justify-center items-center sm:items-baseline">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold drop-shadow-[0_0_10px_black]">
          {slice.primary.title}
        </h1>
        <h3 className="mb-8 mt-2 text-xl sm:text-3xl md:text-4xl font-semibold drop-shadow-[0_0_10px_black] sm:w-4/5 md:w-2/3 lg:w-1/2">
          {slice.primary.subtitle}
        </h3>
        <div className="drop-shadow-[0_0_15px_black] text-sm sm:text-lg font-medium sm:w-2/3 md:w-1/2">
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div className="mt-10 flex gap-4 flex-col sm:flex-row text-center">
          {slice.primary.buttonlink.map((link) => (
            <PrismicNextLink
              key={link.key}
              field={link}
              className={link.variant}
            />
          ))}
        </div>
      </header>
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
