import Image from "../../../node_modules/next/image";


export default function Introduction() {
    return( 
      <div className="w-screen h-[500px] bg-slate-800 p-8">
        <div className="flex justify-between items-center">
            <div>
            <p className="text-[#D3EE98] text-2xl font-bold">Sistem Informasi</p>
            <h2 className="text-7xl text-white">Hello,</h2>
            <h2 className="text-7xl text-[#72BF7B]">
                Agustina
            </h2>
        <div className="my-8">
            <p className="text-white max-w-lg">
            You can never cross the ocean until you have the courage to lose sight of the shore
            </p>
        </div>
      </div>
      {/* Image */}
      <div className="relative w-96 h-96">
        <Image
            src="/Image/Koala.jpg"
            layout="f111"
            alt="Agustina"
            fill={true}
            priority={true}
            className="rounded-3xl object-cover"/>
            
      </div>
      </div>
      </div>
    );
  }