import { SlideLayout } from '../components/SlideLayout';
import { Calendar, Search, Rocket, TestTube, GraduationCap, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Discovery & Planning',
    duration: '2 Weeks',
    icon: Search,
    color: 'from-blue-500 to-blue-600',
    activities: [
      'Business requirements analysis',
      'Technical infrastructure audit',
      'AI solution customization planning',
      'Data integration strategy',
      'Success metrics definition'
    ],
    weeks: [1, 2]
  },
  {
    phase: 'Phase 2',
    title: 'MVP Development',
    duration: '4 Weeks',
    icon: Rocket,
    color: 'from-purple-500 to-purple-600',
    activities: [
      'Core AI modules development',
      'Integration with existing systems',
      'Database setup & migration',
      'API development & testing',
      'Initial ML model training'
    ],
    weeks: [3, 4, 5, 6]
  },
  {
    phase: 'Phase 3',
    title: 'Testing & Refinement',
    duration: '2 Weeks',
    icon: TestTube,
    color: 'from-orange-500 to-orange-600',
    activities: [
      'QA testing & bug fixes',
      'Performance optimization',
      'User acceptance testing (UAT)',
      'Model accuracy improvements',
      'Security & compliance checks'
    ],
    weeks: [7, 8]
  },
  {
    phase: 'Phase 4',
    title: 'Launch & Training',
    duration: 'Ongoing',
    icon: GraduationCap,
    color: 'from-green-500 to-green-600',
    activities: [
      'Production deployment',
      'Team training & documentation',
      'Monitoring setup & alerts',
      'Continuous optimization',
      'Monthly performance reviews'
    ],
    weeks: [9, 10, 11, 12]
  }
];

export function ImplementationRoadmap() {
  return (
    <SlideLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block px-4 py-1 bg-indigo-100 rounded-full mb-4">
            <span className="text-indigo-700 font-semibold text-sm">Implementation Plan</span>
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-gray-900 mb-4">
            12-Week Implementation Roadmap
          </h1>
          <p className="text-xl text-gray-600 font-open-sans">
            Structured phased approach to ensure smooth deployment and maximum ROI
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-montserrat font-bold text-gray-900">
                Gantt Timeline Overview
              </h2>
            </div>

            {/* Timeline Header */}
            <div className="mb-4 flex items-center">
              <div className="w-64 font-montserrat font-semibold text-sm text-gray-600">Phase</div>
              <div className="flex-1 grid grid-cols-12 gap-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="text-center text-xs text-gray-500 font-open-sans">
                    W{i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Bars */}
            <div className="space-y-3">
              {phases.map((phase, idx) => {
                const PhaseIcon = phase.icon;
                return (
                  <div key={idx} className="flex items-center group">
                    <div className="w-64 pr-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-10 h-10 bg-gradient-to-br ${phase.color} rounded-lg flex items-center justify-center shadow-md`}>
                          <PhaseIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-montserrat font-bold text-sm text-gray-900">{phase.title}</div>
                          <div className="text-xs text-gray-500 font-open-sans">{phase.duration}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-12 gap-1">
                      {[...Array(12)].map((_, weekIdx) => {
                        const isActive = phase.weeks.includes(weekIdx + 1);
                        return (
                          <div
                            key={weekIdx}
                            className={`h-10 rounded ${
                              isActive
                                ? `bg-gradient-to-r ${phase.color} shadow-md`
                                : 'bg-gray-100'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Phase Details */}
        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase, idx) => {
            const PhaseIcon = phase.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <PhaseIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-open-sans">{phase.phase}</div>
                    <h3 className="font-montserrat font-bold text-xl text-gray-900">{phase.title}</h3>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full">
                    <span className="text-sm font-semibold text-gray-700 font-open-sans">
                      Duration: {phase.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {phase.activities.map((activity, actIdx) => (
                    <li key={actIdx} className="flex items-start gap-2 text-sm text-gray-700 font-open-sans">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white text-center">
          <p className="text-lg font-open-sans">
            <strong className="font-montserrat">Total Implementation Time:</strong> 8-10 weeks to full production launch, 
            with ongoing optimization and support
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
