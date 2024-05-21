/* eslint-disable react/jsx-key */
import { Asset1 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

const features = [
  {
    name: "Pelatihan Survey",
    description:
      "Pelatihan survei adalah sebuah program pendidikan atau pelatihan yang dirancang untuk mempersiapkan individu dengan keterampilan dan pengetahuan yang diperlukan untuk merancang, melaksanakan, dan menganalisis survei",
    number: 1,
  },
  {
    name: "Pelatihan GIS",
    description:
      "Pelatihan GIS (Geographic Information System) adalah program pendidikan atau pelatihan yang dirancang untuk memberikan pemahaman tentang konsep, teknologi, dan aplikasi GIS kepada peserta. GIS adalah sistem yang digunakan untuk menyimpan, mengelola, menganalisis, dan memvisualisasikan data yang terkait dengan lokasi geografis.",
    number: 2,
  },
  {
    name: "Pelatihan Drone",
    description:
      "Pelatihan drone adalah program pendidikan atau pelatihan yang dirancang untuk memberikan pemahaman tentang penggunaan, operasi, dan aplikasi drone kepada peserta. Drone, atau dikenal juga sebagai UAV (Unmanned Aerial Vehicle), adalah pesawat tanpa awak yang dikendalikan dari jarak jauh dan biasanya dilengkapi dengan kamera atau sensor lainnya untuk pengambilan data.",
    number: 3,
  },
  {
    name: "Pelatihan Manajemen Organisasi",
    description:
      "Pelatihan Manajemen Organisasi adalah program pendidikan atau pelatihan yang dirancang untuk mengembangkan keterampilan dan pengetahuan dalam mengelola sebuah organisasi secara efektif. Ini melibatkan pemahaman tentang prinsip-prinsip manajemen, strategi, teknik, dan praktik terbaik yang diperlukan untuk memimpin, mengatur, dan mengelola sumber daya organisasi dengan baik.",
    number: 4,
  },
  {
    name: "Pelatihan Manajemen Personality",
    description:
      "Pelatihan Manajemen Personality adalah program pendidikan atau pelatihan yang bertujuan untuk membantu individu memahami, mengembangkan, dan mengelola kepribadian mereka secara efektif dalam konteks profesional dan pribadi. Ini melibatkan pemahaman tentang karakteristik kepribadian individu, cara berinteraksi dengan orang lain, dan strategi untuk meningkatkan keterampilan interpersonal, komunikasi, dan kepemimpinan.",
    number: 5,
  },
];

const TrainingCompany: FC<any> = () => {
  return (
    <div className="bg-indigo-100 py-24 sm:py-32 sm:px-6">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bidang Pelatihan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600"></p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-5 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div> 
                <div className="bg-white max-w-sm rounded-xl overflow-hidden shadow-lg">
                  <Image src={Asset1} alt="logo"/>
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">
                      {feature.name}
                    </div>
                    <p className="text-gray-700 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TrainingCompany;
