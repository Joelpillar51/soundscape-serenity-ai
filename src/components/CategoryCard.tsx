
import { ReactNode } from "react";

interface CategoryCardProps {
  title: string;
  icon: ReactNode;
  color: string;
}

const CategoryCard = ({ title, icon, color }: CategoryCardProps) => {
  return (
    <div className="category-card" style={{ borderLeft: `4px solid ${color}` }}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  );
};

export default CategoryCard;
