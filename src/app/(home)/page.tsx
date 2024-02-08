import { HomeTemplate } from '@/templates/Home/home-template'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Won Game',
}

async function getHeadings() {
  return { most: "most pouluar" }
}

export default async function App() {
  const data = await getHeadings();
  return <HomeTemplate headings={data.most} />
}
