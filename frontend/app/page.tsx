// frontend/app/page.tsx
import Image from 'next/image'
import Calendar from '../components/Calendar' // Import the Calendar component

export default function Home() {
  return (
    // Replace the content with the Calendar component
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Calendar />
    </main>
  )
}
