import React from "react";
import CocktailList from "../components/Cocktail/CocktailList";
import SearchForm from "../components/Cocktail/SearchForm";
export default function AllCocktails() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}
