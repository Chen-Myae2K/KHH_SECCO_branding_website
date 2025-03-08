import React from "react";
import Container from "../../../components/Container";

const HomeSection4 = () => {
  return (
    <section className="font-instrument mt-32  text-black">
      <Container>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-4  md:col-span-1 max-md:border-b md:border-r md:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl md:text-6xl font-medium tracking-tighter">
              process
            </p>
            <p className="md:text-xl tracking-tight text-base max-md:my-10">
              Desiccants control moisture to protect products from humidity
              damage. The{" "}
              <span className="text-clean">
                process involves material selection
              </span>
              , activation, shaping, and packaging, ensuring high-quality
              solutions for various industries.
            </p>
          </div>
          <div className="col-span-4  md:col-span-1 max-md:border-b md:border-r md:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl md:text-6xl font-medium tracking-tighter">
              material <span className="text-clean">selection</span>
            </p>
            <p className="md:text-xl tracking-tight text-base max-md:my-10">
              Desiccants control moisture to protect products from humidity
              damage. The{" "}
              <span className="text-clean">
                process involves material selection
              </span>
              , activation, shaping, and packaging, ensuring high-quality
              solutions for various industries.
            </p>
          </div>
          <div className="col-span-4  md:col-span-1 max-md:border-b md:border-r md:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl md:text-6xl text-clean font-medium tracking-tighter">
              activation
            </p>
            <p className="md:text-xl tracking-tight text-base max-md:my-10">
              Desiccants are <span className="text-clean">dried or heated</span>{" "}
              to remove any pre-existing moisture, ensuring maximum efficiency
              before use.
            </p>
          </div>
          <div className="col-span-4  md:col-span-1 max-md:border-b  md:h-[80dvh] flex flex-col justify-between border-black">
            <p className="text-5xl md:text-6xl font-medium tracking-tighter">
              <span className="text-clean">moisture</span> absorption
            </p>
            <p className="md:text-xl tracking-tight text-base max-md:my-10">
              The desiccant captures water vapor from the surrounding air,
              either chemically (absorption) or physically (adsorption), <span className="text-clean">helping
              maintain low humidity levels.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection4;
