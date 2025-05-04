
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
  speed?: number;
  overlay?: boolean;
  id?: string; // Added id property
}

export const ParallaxSection = ({
  children,
  className,
  bgImage,
  speed = 0.5,
  overlay = false,
  id, // Added id to props destructuring
}: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id={id} // Added id to the section element
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundPositionY: bgImage ? `${offsetY * speed}px` : undefined,
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/50 z-10" />
      )}
      <div className={cn("relative z-20", !bgImage && "bg-transparent")}>
        {children}
      </div>
    </section>
  );
};
