import contentLp01 from "../../../content/contentLp01";
import Button from "../../interactives/Button";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";
import FeaturesLineLP from "./FeaturesLineLP";

export default function FeaturesLP() {
  return (
    <>
      <SectionArea className="">
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp01.features.sectionHeader.miniTag}
            className="text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            sectionHeaderTitle={contentLp01.features.sectionHeader.title}
            color=""
            titleColorSet="text-secondary"
          />

          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeaturesLineLP />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
