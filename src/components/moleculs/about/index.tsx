import { Asset2 } from "@/assets";
import { FC } from "react";
import Image from "next/image";

const AboutCompany: FC<any> = () => {
  return (
    <div className="bg-gray-100 h-full">
      <div className="mx-auto grid max-w-2xl my-auto grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-4xl border-gray-800 ">
            Tentang Kami
          </h2>
          <div className="my-10">
            <p className="mt-4 text-gray-700 text-lg">
              Lembaga Peningkatan Kapasitas Sumber Daya Manusia (LPKSDM)
              merupakan sebuah Lembaga yang bertujuan untuk meningkatkan
              kemampuan dan keterampilan individu dalam suatu organisasi atau
              masyarakat. LPKSDM menyelenggarakan berbagai program pelatihan,
              workshop, seminar, dan kegiatan pengembangan lainnya yang
              ditujukan untuk meningkatkan kompetensi, produktivitas, dan
              kualitas kerja sumber daya manusia (SDM).
            </p>
          </div>
        </div>
        <div className="max-w-xs mx-auto justify-end">
          <Image src={Asset2} alt="about" className="rounded-lg h-full w-full object-cover"/>
        </div>
      </div>
    </div>
  );
};
export default AboutCompany;
