import SectorPage from "../components/SectorPage";
import { sectors } from "../data/sectors";

export default function Energy() {
  const sector = sectors.find((s) => s.slug === "energy")!;
  return (
    <SectorPage
      sector={sector}
      considerations={[
        "Renewable generation and enabling infrastructure.",
        "Projects with clear offtake and execution capability.",
        "Development-ready opportunities and operating assets.",
        "Alignment with experienced developers and operators.",
      ]}
    />
  );
}