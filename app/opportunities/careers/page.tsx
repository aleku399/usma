'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Minus, Plus } from 'lucide-react'

export default function CareersPage() {
  const [openSections, setOpenSections] = useState({
    employeeProposition: false,
    recruitmentProcess: false,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Careers at USA</h1>
      
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Uganda Suppliers Authority (USA) is proud to associate with a vibrant and shared culture of being a Client Focused and Responsive organization that Attracts and Nurtures Talent and Innovation to deliver a great Client experience in an Enjoyable Environment.
        </p>
        
        <p className="text-lg leading-relaxed mb-8">
          Our foremost strategic focus is to establish USA as the employer of choice, capable of drawing in, inspiring, and maintaining a dedicated workforce. We are steered by the following goals;
        </p>

        {/* Employee Proposition Section */}
        <div className="space-y-4">
          <Card
            className="cursor-pointer"
            onClick={() => toggleSection('employeeProposition')}
          >
            <div className="bg-blue-50 p-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Employee Proposition</h2>
              {openSections.employeeProposition ? <Minus /> : <Plus />}
            </div>
            {openSections.employeeProposition && (
              <div className="p-4 space-y-4">
                <PropositionItem
                  title="Delivering Engaging and Demanding Roles"
                  description="Offering challenging and meaningful roles can attract professionals who are looking for opportunities to make a significant impact and contribute to the organization's goals."
                />
                <PropositionItem
                  title="Competitive Compensation and Benefits"
                  description="Providing competitive compensation and benefits is crucial for attracting and retaining top talent. This ensures that employees feel valued and fairly rewarded for their contributions."
                />
                <PropositionItem
                  title="Supportive Work Culture"
                  description="Nurturing a supportive work culture is essential for fostering collaboration, innovation, and employee well-being. A positive work environment can contribute to higher job satisfaction and productivity."
                />
                <PropositionItem
                  title="Positivity and Safety"
                  description="Creating a workplace that radiates positivity and prioritizes safety enhances employee morale and overall satisfaction. A safe and positive environment encourages creativity and allows employees to focus on their tasks effectively."
                />
                <PropositionItem
                  title="Growth and Advancement"
                  description="Investing in employee growth and advancement demonstrates a commitment to employees' professional development. Providing opportunities for skill enhancement and career progression can contribute to higher motivation and loyalty."
                />
              </div>
            )}
          </Card>

          {/* Recruitment Process Section */}
          <Card
            className="cursor-pointer"
            onClick={() => toggleSection('recruitmentProcess')}
          >
            <div className="bg-blue-50 p-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recruitment Process</h2>
              {openSections.recruitmentProcess ? <Minus /> : <Plus />}
            </div>
            {openSections.recruitmentProcess && (
              <div className="p-4 space-y-4">
                <PropositionItem
                  title="Equal Employment Opportunity"
                  description="USA's commitment to equal employment opportunity demonstrates a commitment to fairness and diversity. This approach ensures that all qualified individuals have an equal chance to join the organization, regardless of their background."
                />
                <PropositionItem
                  title="Transparent Screening Process"
                  description="Transparently screening applications based on qualifications, experience, and job description ensures that the selection process is objective and fair."
                />
                <PropositionItem
                  title="Merit-Based Selection"
                  description="Selecting candidates based on merit ensures that the most qualified individuals are appointed to the available positions. This approach supports the organization's goal of attracting and retaining dedicated professionals."
                />
                <div className="mt-6 space-y-4">
                  <p className="text-lg">
                    If you aspire to advance your career, consider becoming a part of a seasoned group of experts, offering remarkable professional prospects within Uganda&apos;s leading economic entity.
                  </p>
                  <p className="text-lg">
                    Every received application will undergo a clear evaluation process, taking into account qualifications, experience, and job requirements. Those shortlisted will receive interview invitations. Selection for final appointment will be determined solely on the basis of merit.
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </main>
  )
}

function PropositionItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

