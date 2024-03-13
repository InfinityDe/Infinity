import { Cover } from '@/components/Cover'
import { Transition } from '@/components/Transition/Transition'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Servicios de Desarrollo y Diseño Web',
  description: 'Ofrecemos servicios de desarrollo web, creación de logos, identidades visuales y todo lo relacionado con el diseño gráfico y web.',
}


export default function Home() {
  return (
    <main className='bg-[#393A47] h-[100vh]'>
      <Transition />
      <Cover />
    </main>
  )
}
