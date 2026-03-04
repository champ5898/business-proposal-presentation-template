import { SlideLayout } from '../components/SlideLayout';
import { Code2, Database, Rocket, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

const techStack = [
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'Vercel', icon: '▲', category: 'Hosting' },
  { name: 'Supabase', icon: '🔷', category: 'Backend' },
  { name: 'Firebase', icon: '🔥', category: 'Backend' },
  { name: 'OpenAI API', icon: '🤖', category: 'AI/ML' },
  { name: 'Python', icon: '🐍', category: 'AI/ML' },
];

const achievements = [
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Successfully delivered 20+ web apps and automation projects for Indian SMEs',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Rocket,
    title: 'E-commerce Expertise',
    description: 'Specialized in building scalable platforms with modern tech stack',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Transparent communication, on-time delivery, and post-launch support',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: TrendingUp,
    title: 'ROI-Focused',
    description: 'Every solution designed to maximize revenue and minimize costs',
    color: 'from-orange-500 to-orange-600'
  }
];

const caseStudies = [
  {
    title: 'Fashion E-commerce Platform',
    problem: 'High cart abandonment (70%+) & low repeat purchases',
    solution: 'Implemented AI chatbot, dynamic pricing, and personalized emails',
    result: '45% reduction in cart abandonment, 3x repeat purchase rate'
  },
  {
    title: 'Electronics Retailer',
    problem: 'Frequent stock-outs losing ₹2L+ monthly',
    solution: 'Deployed ML demand forecasting and inventory optimization',
    result: '60% reduction in stock-outs, ₹8L annual savings'
  }
];

export function WhyChooseUs() {
  return (
    <SlideLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block px-4 py-1 bg-indigo-100 rounded-full mb-4">
            <span className="text-indigo-700 font-semibold text-sm">About Us</span>
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-4">
            Why Choose DAS LABS?
          </h1>
          <p className="text-xl text-gray-600 font-open-sans">
            Freelance software developer from Kanpur specializing in AI-powered e-commerce solutions
          </p>
        </div>

        {/* Key Strengths */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {achievements.map((achievement, idx) => {
            const AchievementIcon = achievement.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <AchievementIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 font-open-sans">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-10 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-10 h-10" />
            <h2 className="text-3xl font-montserrat font-bold">
              Modern Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-montserrat font-bold text-sm">{tech.name}</div>
                <div className="text-xs text-gray-300 font-open-sans">{tech.category}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-300 font-open-sans">
            Expertise in full-stack development, cloud deployment, database management, and AI/ML integration
          </p>
        </div>

        {/* Case Studies */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl font-montserrat font-bold text-gray-900">
              Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-6">
                <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-3">
                  {study.title}
                </h3>
                
                <div className="space-y-3 text-sm font-open-sans">
                  <div>
                    <span className="font-semibold text-red-700">Problem:</span>
                    <p className="text-gray-700 mt-1">{study.problem}</p>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-blue-700">Solution:</span>
                    <p className="text-gray-700 mt-1">{study.solution}</p>
                  </div>
                  
                  <div className="bg-green-100 rounded-lg p-3">
                    <span className="font-semibold text-green-800">Result:</span>
                    <p className="text-green-900 mt-1 font-bold">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Credentials */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <CheckCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
            <div className="text-sm text-gray-700 font-open-sans">Projects Delivered</div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <CheckCircle className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-1">90%</div>
            <div className="text-sm text-gray-700 font-open-sans">Client Satisfaction</div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-1">5+ Years</div>
            <div className="text-sm text-gray-700 font-open-sans">Development Experience</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
