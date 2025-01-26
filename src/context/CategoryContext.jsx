import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [activeCategories, setActiveCategories] = useState(new Set());

  const toggleCategory = (categoryId) => {
    const newCategories = new Set(activeCategories);
    if (newCategories.has(categoryId)) {
      newCategories.delete(categoryId);
    } else {
      newCategories.add(categoryId);
    }
    setActiveCategories(newCategories);
  };

  const resetCategories = () => {
    setActiveCategories(new Set());
  };

  return (
    <CategoryContext.Provider value={{ activeCategories, toggleCategory, resetCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategory = () => useContext(CategoryContext); 