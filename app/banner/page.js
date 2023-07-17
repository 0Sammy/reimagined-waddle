import Image from "next/image"
import bannerpic from "../../public/banner.jpg"

export default function Banner() {
    return (
      <main className="w-5/6 mx-auto"><Image src={bannerpic} className="w-[650px] mx-auto"/></main>
    )
}