import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react"; 
import { ResearchCategory } from "../types/research";

interface CategoryCardProps {
  category: ResearchCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  // Explicitly check if the icon exists and is a valid React component
  const Icon = Icons[category.icon as keyof typeof Icons] as React.FC<LucideProps>;

  if (!Icon) {
    console.error(`Invalid icon: ${category.icon}`);
    return null; // Fallback in case the icon is invalid
  }

  return (
    <Card
      className={`relative overflow-hidden ${category.color} hover:opacity-90 transition-opacity cursor-pointer`}
    >
      <div className="absolute top-4 left-4">
        <Badge
          variant="secondary"
          className="bg-white/80 text-gray-600 hover:bg-white/70"
        >
          {category.tag}
        </Badge>
      </div>
      <div className="p-6 pt-16 flex flex-col items-center text-center min-h-[200px]">
        <Icon className="h-12 w-12 mb-4 text-gray-700" />
        <h3 className="text-xl font-semibold text-gray-800">
          {category.title}
        </h3>
      </div>
    </Card>
  );
}
