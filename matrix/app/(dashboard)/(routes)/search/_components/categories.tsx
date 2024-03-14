"use client";

import { Category } from "@prisma/client";
import {
  FaCode,
  FaJs,
  FaGamepad,
  FaCopyright,
  FaNode,
  FaPython,
  FaPhp,
  FaJava
} from "react-icons/fa";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Java Script": FaJs,
  "C++": FaGamepad,
  "C": FaCopyright,
  "Node": FaNode,
  "Python": FaPython,
  "PHP": FaPhp,
  "Java": FaJava,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}