import { cn } from "@/lib/utils";
import { Landmark, Home, Calendar, Calculator, CircleDollarSign, BarChart, LineChart, Settings, TrendingUpDown, BookOpen } from "lucide-react";

type SideMenuVariant = "he" | "ps" | "tr";

interface SideMenuProps {
  variant: SideMenuVariant;
}

const menuItems = {
  ps: [
    { label: "Corp Reports", icon: Landmark },
    { label: "Site Reports", icon: Home },
    { label: "Daily", icon: Calendar },
    { label: "Budget", icon: CircleDollarSign },
    { label: "Forecast", icon: TrendingUpDown },
    { label: "Accounting", icon: Calculator },
    { label: "ProfitPace", icon: LineChart },
    { label: "ProfitPlan", icon: BarChart },
    { label: "Admin", icon: Settings },

  ],
  he: [
    { label: "Budget", icon: Calculator },
    { label: "Forecast", icon: Calculator },
  ],
  tr: [
    { label: "Admin", icon: Settings },
  ],
  footer: [{ label: "Help", icon: BookOpen }, { label: "Admin", icon: Settings },],
};

export function SideMenu({ variant }: SideMenuProps) {
  const variantItems = menuItems[variant] || [];

  return (
    <div
      className={cn(
        "bg-sidebar-background group-data-[variant=floating]:border-sidebar-border flex h-full min-h-0 flex-col p-1",
        variant === "he" && "w-15",
        variant === "ps" && "w-24 bg-white pt-2",
        variant === "tr" && "w-12"
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto">
        {variantItems.map((item, index) => (
          <span
            key={index}
            className="flex flex-col items-center justify-start w-full px-2 py-2 rounded-md text-sidebar-foreground hover:text-indigo-700 hover:bg-indigo-100 cursor-pointer"
          >
            <a href="#" className="flex flex-col items-center">
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-[11px] text-center font-semibold tracking-tight">{item.label}</span>
            </a>
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {menuItems.footer.map((item, index) => (
           <span
            key={index}
            className="flex flex-col items-center justify-start w-full px-2 py-2 rounded-md text-sidebar-foreground hover:text-indigo-700 hover:bg-indigo-100 cursor-pointer"
          >
            <a href="#" className="flex flex-col items-center">
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-[11px]">{item.label}</span>
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}
