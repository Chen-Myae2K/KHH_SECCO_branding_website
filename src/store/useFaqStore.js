import { create } from "zustand";

const useFaqStore = create((set) => ({
  questions: [
    {
      id: 1,
      question: "What are desiccants?",
      answer:
        "Desiccants are moisture-absorbing substances that help control humidity levels in enclosed spaces. They prevent mold, corrosion, and degradation in products like food, electronics, and pharmaceuticals. Common desiccants include silica gel, activated alumina, molecular sieves, and calcium chloride. These materials either adsorb or absorb moisture, keeping products dry and extending their shelf life. Desiccants are widely used in packaging, shipping, and industrial storage.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is powder desiccant?",
      answer:
        "Powder desiccants are finely ground moisture-absorbing materials designed for high surface area absorption. They are used in applications where rapid moisture control is essential, such as packaging, coatings, and industrial drying processes. Common types include silica gel powder, bentonite clay, and calcium oxide.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Are powder desiccants more effective?",
      answer:
        "Powder desiccants can be more effective than granules or beads due to their increased surface area, allowing faster moisture absorption. However, their efficiency depends on the application. In tightly packed environments, powders provide better coverage, but for reusable or controlled absorption, granules may be preferred.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Can desiccants be reused?",
      answer:
        "Some desiccants, like silica gel and molecular sieves, can be reused by drying them in an oven or under sunlight. However, others, like calcium chloride, dissolve upon absorbing moisture and cannot be regenerated. Reusability depends on the desiccant's material and how it is used.",
      isOpen: false,
    },
    {
      id: 5,
      question: "How long do desiccants last?",
      answer:
        "Desiccant lifespan varies based on type and usage conditions. In sealed packaging, they can last months to years. In open air, they saturate quickly and require replacement or regeneration. Silica gel and molecular sieves can last indefinitely if properly dried and reused.",
      isOpen: false,
    },
  ],

  toggleQuestion: (id) =>
    set((state) => ({
      questions: state.questions.map((el) =>
        el.id === id ? { ...el, isOpen: !el.isOpen } : { ...el, isOpen:false }
      ),
    })),
}));

export default useFaqStore;