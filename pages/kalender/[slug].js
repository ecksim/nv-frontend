import { useRouter } from 'next/router'


export default function FirstPost() {
    const router = useRouter();
    return <h1 className="headline">{router.query.slug}</h1>;
}