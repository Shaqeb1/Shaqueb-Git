import reliabilityImg from 'public/images/reliability.jpg'
import Hero from '@/components/hero'

export default function ReliabilityPage() {
    return (
        <Hero 
        imgData={reliabilityImg}
        imgAlt='welding'
        title='Super High reliability hosting'
        />
    )
}