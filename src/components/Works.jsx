import React from "react";
import WorkImageLayout from "./work-images-container/WorkImageLayout";
import SecondaryButton from "./buttons/SecondaryButton";

const Works = () => {
  return (
    <section id="work" className="bg-dark">
      <div className="container mx-auto flex flex-col gap-y-14 px-6 py-10 md:px-6 md:py-12 xl:px-20">
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <h2 className="text-xl md:text-3xl">My Recent Works</h2>
          <hr className="border-secondary w-32 border-t-3 md:w-50" />
        </div>

        <div className="flex w-full flex-wrap justify-between gap-12">
          <WorkImageLayout
            imgSrc="ecommerce-landing.png"
            heading="Ecommerce Landing page"
            days="11 days"
          />
          <WorkImageLayout
            imgSrc="basketball-studio.png"
            heading="Basketball Studio"
            days="9 days"
          />
          <WorkImageLayout
            imgSrc="perfume-company-site.png"
            heading="Perfume Company site"
            days="10 days"
          />
          <WorkImageLayout
            imgSrc="health-care-site.png"
            heading="Health care site"
            days="11 days"
          />
          <WorkImageLayout
            imgSrc="real-estate.png"
            heading="Real Estate"
            days="7 days"
          />
          <WorkImageLayout
            imgSrc="bank-wallet.png"
            heading="Bank Wallet"
            days="5 days"
          />
        </div>
        <div className="self-center">
          <SecondaryButton
            text="See More"
            padding="px-6 py-2 lg:px-14 lg:py-3 "
            borderColor="border-secondary"
            textColor="text-secondary"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};

export default Works;
