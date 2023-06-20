import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import useTotalProducts from "../../../Hooks/useTotalProducts";

const Offered = () => {
  const [active, setActive] = React.useState(0);
  const [offerItem, setItem] = useState([]);

  const [totalProducts]= useTotalProducts();

  const totalItems = totalProducts?.totalProducts;
  console.log(totalItems);

  const ItemsPerPage = 9;
  const pageNumbers = Math.ceil(totalItems/ItemsPerPage);
  console.log(pageNumbers);
  const totalPageNumbers = pageNumbers-1;

  const next = () => {
    if (active === totalPageNumbers) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 0) return;

    setActive(active - 1);
  };

  useEffect(()=>{
    fetch(`http://localhost:3000/offeredProducts?page=${active}&limit=${ItemsPerPage}`)
    .then(res => res.json())
    .then(data => setItem(data))
  },[active]);

  console.log(offerItem);

  return (
    <div>
      <SectionTitle title="Offered Product"></SectionTitle>

      <div className="grid grid-cols-4 gap-y-5 place-items-center">
        <ProductCard data={offerItem}></ProductCard>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="flex items-center gap-8">
          <IconButton
            size="sm"
            variant="outlined"
            color="blue-gray"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <Typography color="gray" className="font-normal">
            Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
            <strong className="text-blue-gray-900">{totalPageNumbers}</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            color="blue-gray"
            onClick={next}
            disabled={active === 10}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Offered;
