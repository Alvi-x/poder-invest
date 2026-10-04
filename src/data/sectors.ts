export const sectors = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    label: "Sector 01",
    description:
      "Industrial capacity for domestic and regional supply chains.",
    thesis: "South Africa's productive base requires patient capital to modernise, scale and compete regionally.",
    image: "/images/manufacturing.png",
  },
  {
    slug: "energy",
    title: "Energy",
    label: "Sector 02",
    description:
      "Energy security through renewable generation and infrastructure.",
    thesis: "Reliable power is the foundation of industrial growth. We back renewable generation and grid infrastructure.",
    image: "/images/energy.png",
  },
  {
    slug: "property",
    title: "Property",
    label: "Sector 03",
    description:
      "Income-producing and development-led real estate with resilient occupier demand.",
    thesis: "Well-located, well-designed real estate remains a durable store of long-term value.",
    image: "/images/property.png",
  },
];

export type Sector = (typeof sectors)[number];