import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import CarouselDivisV1 from "../../components/interactives/CarouselDivsV1";

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
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img4.img}
                      alt={content.texts.testimonials.images.img4.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img5.img}
                      alt={content.texts.testimonials.images.img5.alt}
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img6.img}
                      alt={content.texts.testimonials.images.img6.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img7.img}
                      alt={content.texts.testimonials.images.img7.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img8.img}
                      alt={content.texts.testimonials.images.img8.alt}
                    />
                  </div>
                </div>
              </CarouselDivisV1>
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
