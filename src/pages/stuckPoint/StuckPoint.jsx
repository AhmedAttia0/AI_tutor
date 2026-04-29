import { useState, useEffect } from "react";
import NavbarLogin from "../../components/navbarLogin/NavbarLogin";
import StuckPointHeader from "../../components/stuckPointHeader/StuckPointHeader";
import ConceptSelection from "../../components/conceptSelection/ConceptSelection";
import PrerequisiteDetection from "../../components/prerequisiteDetection/PrerequisiteDetection";
import KnowledgeGaps from "../../components/knowledgeGaps/KnowledgeGaps";
import AiRecommendations from "../../components/aiRecommendations/AiRecommendations";

const mockBackendData = {
  chapter: "Chapter 5",
  section: "Section 5.2",
  topic: "The Chain Rule",
  title: "Calculus Chapter 5: Derivatives",
  subtitle: "Advanced Mathematics • Prof. Johnson",
  tabs: [
    {
      id: "5.1",
      title: "5.1 Basic Rules",
      subtitle: "Fundamental concepts",
      badge: "Easy",
      badgeColor: "bg-green-100 text-green-700",
      content: {
        definition: {
          title: "5.1.1 Definition of Basic Rules",
          text: "The derivative of a constant is 0. The power rule states that for x^n, the derivative is n*x^(n-1).",
          formula: "[c]' = 0, [x^n]' = n*x^(n-1)",
          difficulty: "Easy Difficulty",
          difficultyColor: "bg-green-100 text-green-700",
          tag: "Core Concept",
          tagColor: "bg-blue-100 text-blue-700"
        },
        example: {
          title: "5.1.2 Example Application",
          text: "Find the derivative of f(x) = x^3. Using the power rule...",
          formula: "f'(x) = 3x^2",
          difficulty: "Easy Difficulty",
          difficultyColor: "bg-green-100 text-green-700",
          tag: "Practice Problem",
          tagColor: "bg-purple-100 text-purple-700"
        },
        mistakes: {
          title: "5.1.3 Common Mistakes",
          text: "Forgetting to reduce the exponent by 1 when using the power rule.",
          difficulty: "Easy Difficulty",
          difficultyColor: "bg-green-100 text-green-700",
          tag: "Common Pitfall",
          tagColor: "bg-orange-100 text-orange-700"
        }
      }
    },
    {
      id: "5.2",
      title: "5.2 Chain Rule",
      subtitle: "Current section",
      badge: "Medium",
      badgeColor: "bg-yellow-100 text-yellow-700",
      content: {
        definition: {
          title: "5.2.1 Definition of the Chain Rule",
          text: "If f and g are both differentiable functions, and we want to find the derivative of their composition f(g(x)), the chain rule states that:",
          formula: "[f(g(x))]' = f'(g(x)) · g'(x)",
          difficulty: "Medium Difficulty",
          difficultyColor: "bg-yellow-100 text-yellow-700",
          tag: "Core Concept",
          tagColor: "bg-blue-100 text-blue-700"
        },
        example: {
          title: "5.2.2 Example Application",
          text: "Find the derivative of h(x) = sin(3x²). Here, we have an outer function f(u) = sin(u) and an inner function g(x) = 3x². Using the chain rule...",
          formula: "h'(x) = cos(3x²) · 6x",
          difficulty: "Hard Difficulty",
          difficultyColor: "bg-red-100 text-red-700",
          tag: "Practice Problem",
          tagColor: "bg-purple-100 text-purple-700"
        },
        mistakes: {
          title: "5.2.3 Common Mistakes",
          text: "Students often forget to multiply by the derivative of the inner function. Remember: you must always include g'(x) in your final answer.",
          difficulty: "Easy Difficulty",
          difficultyColor: "bg-green-100 text-green-700",
          tag: "Common Pitfall",
          tagColor: "bg-orange-100 text-orange-700"
        }
      }
    },
    {
      id: "5.3",
      title: "5.3 Product Rule",
      subtitle: "Advanced applications",
      badge: "Hard",
      badgeColor: "bg-red-100 text-red-700",
      content: {
        definition: {
          title: "5.3.1 Definition of the Product Rule",
          text: "For two functions f(x) and g(x), the derivative of their product is f'(x)g(x) + f(x)g'(x).",
          formula: "[f(x)g(x)]' = f'(x)g(x) + f(x)g'(x)",
          difficulty: "Medium Difficulty",
          difficultyColor: "bg-yellow-100 text-yellow-700",
          tag: "Core Concept",
          tagColor: "bg-blue-100 text-blue-700"
        },
        example: {
          title: "5.3.2 Example Application",
          text: "Find the derivative of x^2 * sin(x).",
          formula: "2x*sin(x) + x^2*cos(x)",
          difficulty: "Medium Difficulty",
          difficultyColor: "bg-yellow-100 text-yellow-700",
          tag: "Practice Problem",
          tagColor: "bg-purple-100 text-purple-700"
        },
        mistakes: {
          title: "5.3.3 Common Mistakes",
          text: "Assuming the derivative of a product is the product of derivatives.",
          difficulty: "Medium Difficulty",
          difficultyColor: "bg-yellow-100 text-yellow-700",
          tag: "Common Pitfall",
          tagColor: "bg-orange-100 text-orange-700"
        }
      }
    },
    {
      id: "5.4",
      title: "5.4 Quotient Rule",
      subtitle: "Complex derivatives",
      badge: "Hard",
      badgeColor: "bg-red-100 text-red-700",
      content: {
        definition: {
          title: "5.4.1 Definition of the Quotient Rule",
          text: "For two functions f(x) and g(x), the derivative of their quotient is (f'(x)g(x) - f(x)g'(x)) / [g(x)]^2.",
          formula: "[f(x)/g(x)]' = (f'(x)g(x) - f(x)g'(x)) / [g(x)]²",
          difficulty: "Hard Difficulty",
          difficultyColor: "bg-red-100 text-red-700",
          tag: "Core Concept",
          tagColor: "bg-blue-100 text-blue-700"
        },
        example: {
          title: "5.4.2 Example Application",
          text: "Find the derivative of sin(x)/x.",
          formula: "(x*cos(x) - sin(x)) / x²",
          difficulty: "Hard Difficulty",
          difficultyColor: "bg-red-100 text-red-700",
          tag: "Practice Problem",
          tagColor: "bg-purple-100 text-purple-700"
        },
        mistakes: {
          title: "5.4.3 Common Mistakes",
          text: "Forgetting the order in the numerator: it must be f'g - fg', not fg' - f'g.",
          difficulty: "Hard Difficulty",
          difficultyColor: "bg-red-100 text-red-700",
          tag: "Common Pitfall",
          tagColor: "bg-orange-100 text-orange-700"
        }
      }
    }
  ],
  prerequisites: [
    { id: 1, title: "Basic Derivatives", mastery: 95 },
    { id: 2, title: "Function Composition", mastery: 88 },
    { id: 3, title: "Trigonometric Functions", mastery: 72 },
    { id: 4, title: "Polynomial Derivatives", mastery: 45 }
  ],
  knowledgeGaps: [
    { id: 1, title: "Critical Gap", priority: "High Priority", priorityLevel: "high", description: "You're missing foundational understanding of derivative notation (dy/dx vs f'(x))", actionText: "Fill This Gap First" },
    { id: 2, title: "Minor Gap", priority: "Medium Priority", priorityLevel: "medium", description: "Practice needed with composite function identification", actionText: "Practice Now" }
  ],
  aiRecommendations: [
    { id: 1, title: "Best Starting Point", description: "Begin with Section 5.2.1 - matches your current level", type: "star" },
    { id: 2, title: "Suggested Path", description: "5.2.1 → Review Polynomials → 5.2.2 → Practice", type: "path" },
    { id: 3, title: "Estimated Time", description: "45 minutes to master this section", type: "time" }
  ]
};

const StuckPoint = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(mockBackendData);
    }, 500);
  }, []);

  if (!data) {
    return (
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#DBEAFE4D] min-h-[100vh] flex justify-center items-center">
        <p className="text-slate-500 font-medium">Loading lesson data...</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#DBEAFE4D] min-h-[100vh] pb-12">
      <NavbarLogin />
      <div className="container mx-auto max-w-5xl px-4 py-8 flex flex-col gap-6">
        <StuckPointHeader />
        <ConceptSelection data={data} />
        <PrerequisiteDetection prerequisites={data.prerequisites} />
        <KnowledgeGaps gaps={data.knowledgeGaps} />
        <AiRecommendations recommendations={data.aiRecommendations} />
      </div>
    </div>
  );
};

export default StuckPoint;
