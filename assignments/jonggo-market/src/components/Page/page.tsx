import { cva } from "class-variance-authority";

interface PageProps {
  title: string;
  isTitleHidden?: boolean;
  width?: "sm" | "md" | "full";
}

const Page = ({
  children,
  title,
  isTitleHidden = false,
  width,
}: React.PropsWithChildren<PageProps>) => {
  const pageVariant = cva("container mx-auto max-w-[1024px] px-5 py-20", {
    variants: {
      width: {
        sm: "max-w-[620px]",
        md: "max-w-[1024px]",
        full: "max-w-full",
      },
    },
    defaultVariants: {
      width: "md",
    },
  });

  return (
    <main className={pageVariant({ width })}>
      <h1
        className={
          "text-3xl font-bold mb-12" + (isTitleHidden ? " hidden" : "")
        }
      >
        {title}
      </h1>
      {children}
    </main>
  );
};

export default Page;
