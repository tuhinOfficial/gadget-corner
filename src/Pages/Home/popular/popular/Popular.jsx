import React from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import PopularCard from "../PopularCard/PopularCard";
import { Button } from "@material-tailwind/react";

const Popular = () => {
  return (
    <section className="text-center">
      <SectionTitle title="Popular Products"></SectionTitle>

      <div className="mb-10">
        <PopularCard></PopularCard>
        <div className="mt-5 flex justify-center">
          <Button className="rounded-none">See All</Button>
        </div>
      </div>
    </section>
  );
};

export default Popular;
