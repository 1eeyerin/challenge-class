import { SDeal } from "@/schema/Deal.schema";
import Image from "next/image";

interface DealCardProps {
  deal: SDeal;
}

const DealCard = ({ deal }: DealCardProps) => {
  const { title, price, imgURL, location, likesCount } = deal;
  return (
    <div>
      <div className="relative aspect-[4/3]">
        <Image src={imgURL} alt={title} fill className="object-cover" />
      </div>
      <h6>{title}</h6>
      <div>{price}</div>
      <div>{location}</div>
      <div>{likesCount}</div>
    </div>
  );
};

export default DealCard;
