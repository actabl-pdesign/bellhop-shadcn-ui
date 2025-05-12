"use client";

import React, { createContext, useContext } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const BadgeContext = createContext<{ size: "sm" | "md" }>({ size: "sm" });

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 font-medium transition-colors w-fit whitespace-nowrap shrink-0 inline-flex [&>svg]:size-3 [&>svg]:gap-1 [&>svg]:pointer-events-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        solid: "border-transparent",
        outline: "border",
        ghost: "border",
      },
      color: {
        white: "",
        neutral: "",
        indigo: "",
        blue: "",
        red: "",
        pink: "",
        orange: "",
        yellow: "",
        green: "",
        teal: "",
        purple: "",
      },
      size: {
        sm: "text-xs rounded-full px-2 py-0.5 h-6",
        md: "text-sm rounded-full px-3 py-1 h-7",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "neutral",
        className: "bg-neutral-200/90 text-neutral-800",
      },
      {
        variant: "outline",
        color: "neutral",
        className: "border-neutral-300 bg-neutral-50 text-neutral-800",
      },
      {
        variant: "ghost",
        color: "neutral",
        className: "border-neutral-300 bg-transparent text-neutral-800",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "neutral",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className,
  variant,
  color,
  size = "sm",
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  const validSize = size === "sm" || size === "md" ? size : "sm";

  return (
    <BadgeContext.Provider value={{ size: validSize }}>
      <Comp
        data-slot="badge"
        className={cn(
          badgeVariants({
            variant,
            color,
            size: validSize,
          }),
          className
        )}
        {...props}
      />
    </BadgeContext.Provider>
  );
}

// Icon badge
const BadgeIcon = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}) => {
  const { size } = useContext(BadgeContext);
  const sizeClasses = size === "sm" ? "w-3 h-3" : "!w-4 !h-4";

  return (
    <span
      className={cn("inline-block", sizeClasses, className)}
      {...props}
    >
      {React.isValidElement(children) &&
        React.cloneElement(children, {
          className: cn(sizeClasses, children.props.className),
        })}
    </span>
  );
};

// Dot indicator
const BadgeDot = ({
  className,
  color = "neutral",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  color?: string;
}) => {
  const dotColor =
    color === "neutral"
      ? "bg-neutral-700"
      : color === "blue"
      ? "bg-blue-700"
      : color === "indigo"
      ? "bg-indigo-800"
      : color === "red"
      ? "bg-red-700"
      : color === "pink"
      ? "bg-pink-700"
      : color === "orange"
      ? "bg-orange-700"
      : color === "yellow"
      ? "bg-amber-700"
      : color === "green"
      ? "bg-green-700"
      : color === "teal"
      ? "bg-teal-700"
      : color === "purple"
      ? "bg-purple-700"
      : "bg-neutral-700";
  return (
    <span
      className={cn("inline-block rounded-full w-1.5 h-1.5", dotColor, className)}
      {...props}
    />
  );
};

// Avatar component for badge
const BadgeAvatar = ({
  src,
  alt = "Avatar",
  size = "sm",
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: "sm" | "md";
}) => {
  return (
    <span className="flex">
      <Image
        src={src}
        alt={alt}
        className={cn(
          "rounded-full object-cover",
          size === "sm" ? "w-4 h-4" : "w-5 h-5",
          className
        )}
        {...props}
      />
    </span>
  );
};

// Close button for badge
const BadgeClose = ({
  onClick,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className={cn(
        "rounded-full hover:bg-neutral-200 flex items-center justify-center w-4 h-4",
        className
      )}
      {...props}
    >
      <X className={"w-4 h-4"} />
    </button>
  );
};

Badge.Icon = BadgeIcon;
Badge.Dot = BadgeDot;
Badge.Avatar = BadgeAvatar;
Badge.Close = BadgeClose;

export { Badge, badgeVariants };