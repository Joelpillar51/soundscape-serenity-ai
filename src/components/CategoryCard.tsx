
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: ReactNode;
  color: string;
  onClick?: () => void;
}

const CategoryCard = ({ title, icon, color, onClick }: CategoryCardProps) => {
  return (
    <div 
      className={cn(
        "category-card p-4 rounded-lg bg-card/50 border border-white/5 cursor-pointer hover:bg-card/80 transition-all",
        "flex items-center gap-3"
      )}
      style={{ borderLeft: `4px solid ${color}` }}
      onClick={onClick}
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  );
};

export default CategoryCard;
