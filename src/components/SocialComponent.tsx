import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PERSONAL_INFO } from "../constants";
import { Tooltip } from "react-tooltip";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


export function ContactBox({
    icon,
    href,
    name,
  }: {
    icon: IconProp;
    href: string;
    name: string;
  }) {
    return (
      <div className="text-sm">
        <div className="p-2 rounded-md shadow-md has-tooltip">
          <a
            href={href}
            data-tooltip-id={`${name}-tooltip`}
            data-tooltip-content={name}
            data-tooltip-place="top"
            target="_blank"
          >
            <FontAwesomeIcon icon={icon} className="text-xl" />
          </a>
        </div>
          <Tooltip id={`${name}-tooltip`} className="text-sm" />
      </div>
    );
}

export default function SocialComponent({classContainer}:{classContainer:string}) {
  return <div className={`flex items-center ${classContainer}`}>
      <img
        src="/image/phone.png"
        alt=""
        className="object-fill h-24 filter grayscale " />
      <div className="grid-text">
        <p className="text-center"><strong>Let's Connect</strong></p>
        <div className="text-sm text-white-500 hover:text-white"><a href="mailto:nikolasfernando2001@gmail.com">nikolasfernando2001@gmail.com</a></div>
      </div>
      <div className="flex gap-1">
        {PERSONAL_INFO.SOCIALS.map((item, index) => (
          <ContactBox
            key={index}
            icon={item.icon}
            href={item.href}
            name={item.name} />
        ))}
      </div>
    </div>

}