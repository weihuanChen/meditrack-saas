import Image from "next/image";
export default function Banner(){
  return (
    <div>
      <Image src="/bg.svg" alt="背景图" width={568} height={464}/>
    </div>
  )
}