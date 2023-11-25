// frontend/app/page.tsx
import Image from 'next/image'
import Calendar from '../components/Calendar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Calendar />
    </main>
  )
}
