import SectorPage from "../components/SectorPage";
import { sectors } from "../data/sectors";

export default function Property() {
  const sector = sectors.find((s) => s.slug === "property")!;
  return (
    <SectorPage
      sector={sector}
      considerations={[
        "Income-producing real estate with resilient occupier demand.",
        "Development-led opportunities in well-located markets.",
        "Partnerships with credible developers and sponsors.",
        "Long-term value creation over short-cycle exits.",
      ]}
    />
  );
}