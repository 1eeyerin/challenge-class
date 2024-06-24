import { VariantProps, cva } from "class-variance-authority";

// cva에서 제공한 variantProps Type
type ChipVariantTypes = VariantProps<typeof chipVariants>;

type ChipProps = {
  label: string;
  intent?: "primary" | "secondary" | "danger" | "warning" | "info" | "default";
} & ChipVariantTypes;

const Chip = ({ label, intent }: ChipProps) => {
  return <div className={chipVariants({ intent })}>{label}</div>;
};

// 첫번째 인자, 조합과 무관한 공통 스타일링
// 두번째 인자, 조합과 관련된 스타일링
const chipVariants = cva(
  ["text-sm", "border", "rounded-full", "px-2.5", "py-0.5"],
  {
    variants: {
      intent: {
        primary: ["bg-blue-500", "border-blue-500", "text-white"],
        secondary: ["bg-yellow-500", "border-yellow-500", "text-white"],
        danger: ["bg-red-500", "border-red-500", "text-white"],
        warning: ["bg-yellow-500", "border-yellow-500", "text-white"],
        info: ["bg-blue-500", "border-blue-500", "text-white"],
        default: ["bg-white", "border-gray-500", "text-gray-500"],
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

export default Chip;
