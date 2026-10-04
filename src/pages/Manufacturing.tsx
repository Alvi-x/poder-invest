import SectorPage from "../components/SectorPage";
import { sectors } from "../data/sectors";

export default function Manufacturing() {
  const sector = sectors.find((s) => s.slug === "manufacturing")!;
  return (
    <SectorPage
      sector={sector}
      considerations={[
        "Established industrial businesses with clear operational improvement potential.",
        "Capital for capacity expansion, modernisation or regional growth.",
        "Alignment with experienced management teams.",
        "Durable demand from domestic and regional supply chains.",
      ]}
    />
  );
}