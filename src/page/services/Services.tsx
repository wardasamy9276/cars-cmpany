import AdditionalServices from "./AdditionalServices";
import ImportServices from "./ImportServices";
import ServicesHero from "./ServicesHero";

function Services() {
  return (
    <div>
      <ServicesHero />
      {/* <ContactUs /> */}
      <ImportServices />
      <AdditionalServices />
    </div>
  );
}

export default Services;
