import { Outlet } from "react-router-dom";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import { useState } from "react";

export default function MainLayout() {
      const [catagories, setCatagories] = useState<string[]>([]);
  return (
    <>
      <Navbar/>
      <Filter catagories={catagories} setCatagories={setCatagories}/>
      <Outlet context={{ catagories }}/>
    </>
  );
}