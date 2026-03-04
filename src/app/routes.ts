import { createBrowserRouter } from "react-router";
import { CoverPage } from "./slides/CoverPage";
import { ExecutiveSummary } from "./slides/ExecutiveSummary";
import { CurrentChallenges } from "./slides/CurrentChallenges";
import { InventorySolution } from "./slides/InventorySolution";
import { PersonalizationSolution } from "./slides/PersonalizationSolution";
import { ChatbotSolution } from "./slides/ChatbotSolution";
import { MarketingAutomation } from "./slides/MarketingAutomation";
import { ImplementationRoadmap } from "./slides/ImplementationRoadmap";
import { Pricing } from "./slides/Pricing";
import { WhyChooseUs } from "./slides/WhyChooseUs";
import { NextSteps } from "./slides/NextSteps";

export const router = createBrowserRouter([
  { path: "/", Component: CoverPage },
  { path: "/executive-summary", Component: ExecutiveSummary },
  { path: "/challenges", Component: CurrentChallenges },
  { path: "/solution-inventory", Component: InventorySolution },
  { path: "/solution-personalization", Component: PersonalizationSolution },
  { path: "/solution-chatbot", Component: ChatbotSolution },
  { path: "/solution-marketing", Component: MarketingAutomation },
  { path: "/roadmap", Component: ImplementationRoadmap },
  { path: "/pricing", Component: Pricing },
  { path: "/why-us", Component: WhyChooseUs },
  { path: "/next-steps", Component: NextSteps },
]);