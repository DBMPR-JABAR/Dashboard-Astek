import { useState } from 'react'
import Nav from '../../components/nav/Nav'
import DashboardSection from '../../components/section/dashboard/DashboardSection'

export default function DashboardPage() {
  const [navWidth, setNavWidth] = useState(0)

  return (
    <div className="min-h-screen bg-primary-purple/[0.05]">
      <Nav setNavWidth={setNavWidth} />
      <DashboardSection marginLeft={navWidth} />
    </div>
  )
}
