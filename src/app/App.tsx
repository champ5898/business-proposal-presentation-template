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

export default function App() {
  return (
    <div className="w-full">
      <CoverPage />
      <ExecutiveSummary />
      <CurrentChallenges />
      <InventorySolution />
      <PersonalizationSolution />
      <ChatbotSolution />
      <MarketingAutomation />
      <ImplementationRoadmap />
      <Pricing />
      <WhyChooseUs />
      <NextSteps />
    </div>
  );
}
