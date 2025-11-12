import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import CarouselDivisV1 from "../../components/interactives/CarouselDivsV1";
import Button from "../interactives/Button";
import contentLp01 from "../../content/contentLp01";

export default function Depositions() {
  return (
    <div className="relative">
      <SectionArea className="" paddingtop={false}>
        <SectionHeader
          className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
          miniTitle={content.texts.testimonials.miniTag}
          sectionHeaderTitle={content.texts.testimonials.title}
          sectionHeaderSubtitle={content.texts.testimonials.subtitle}
          titleColorSet="text-primary"
          subtitleColorSet="text-primary opacity-70"
        />

        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp className="flex justify-center w-full">
            <div className="desktop1:w-[80%]">
              <CarouselDivisV1>
                <div className="flex items-center justify-center">
                  <div className="flex justify-center">
                    <img
                      src={content.texts.testimonials.images.img1.img}
                      alt={content.texts.testimonials.images.img1.alt}
                      width="185"
                      height="500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img2.img}
                      alt={content.texts.testimonials.images.img2.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img3.img}
                      alt={content.texts.testimonials.images.img3.alt}
                      width="185"
                      height="500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img4.img}
                      alt={content.texts.testimonials.images.img4.alt}
                      width="185"
                      height="500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img5.img}
                      alt={content.texts.testimonials.images.img5.alt}
                      width="185"
                      height="500"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img6.img}
                      alt={content.texts.testimonials.images.img6.alt}
                      width="185"
                      height="500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img7.img}
                      alt={content.texts.testimonials.images.img7.alt}
                      width="185"
                      height="500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img8.img}
                      alt={content.texts.testimonials.images.img8.alt}
                      width="185"
                      height="500"
                    />
                  </div>
                </div>
              </CarouselDivisV1>
            </div>
          </MotionDivDownToUp>
          <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center desktop1:pt-4">
            <div className="">
              <Button
                aria-label={contentLp01.steps.cards.ariaLabel}
                label={contentLp01.steps.cards.buttonLabel}
                // onClick={() => navigate("/whatsapp")}
                buttonLink={content.texts.links.ctaWhatsapp}
                animation
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                  </svg>
                }
                color="bg-bgSectionDark"
              />
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
