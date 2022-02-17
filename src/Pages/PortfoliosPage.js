import { React, useState } from "react";
import ContactPage from "./ContactPage.js";
import Categories from "../Components/Categories.js";
import MenuItems from "../Components/MenuItems.js";
import portfolios from "../Components/AllPortfolios.js";
import Tittle from "../Components/Tittle";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];
function PortfoliosPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };
  return (
    <div className="PortfolioPage">
      <div className="title">
        <Tittle title={"About me"} span={"About me"} />
      </div>
      <div className="portfolio-content">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}
export default PortfoliosPage;
