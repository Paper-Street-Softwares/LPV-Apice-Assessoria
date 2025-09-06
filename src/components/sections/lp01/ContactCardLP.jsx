import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

export default function ContactCardLP({ icon, label, description }) {
  return (
    <MotionDivDownToUp>
      <div className="flex flex-wrap bg-bgSectionLight p-[9px]">
        <div className="flex gap-[10px]">
          <div className="h-[60px] w-[60px] bg-buttonColor flex justify-center items-center text-labelButtons ">
            {icon}
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold">{label}</h1>
            <p className="opacity-80 text-[8px] phone2:text-[10px] phone3:text-[12px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
