import { FC } from "react";
import {
  AcademicCapIcon,
  PaperAirplaneIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Pelatihan Survey",
    description:
      "Pelatihan survei adalah sebuah program pendidikan atau pelatihan yang dirancang untuk mempersiapkan individu dengan keterampilan dan pengetahuan yang diperlukan untuk merancang, melaksanakan, dan menganalisis survei",
    number: 1,
    color: "bg-teal-400",
    icon: AcademicCapIcon,
  },
  {
    name: "Pelatihan GIS",
    description:
      "Pelatihan GIS (Geographic Information System) adalah program pendidikan atau pelatihan yang dirancang untuk memberikan pemahaman tentang konsep, teknologi, dan aplikasi GIS kepada peserta. GIS adalah sistem yang digunakan untuk menyimpan, mengelola, menganalisis, dan memvisualisasikan data yang terkait dengan lokasi geografis.",
    number: 2,
    color: "bg-rose-500",
    icon: GlobeAltIcon,
  },
  {
    name: "Pelatihan Drone",
    description:
      "Pelatihan drone adalah program pendidikan atau pelatihan yang dirancang untuk memberikan pemahaman tentang penggunaan, operasi, dan aplikasi drone kepada peserta. Drone, atau dikenal juga sebagai UAV (Unmanned Aerial Vehicle), adalah pesawat tanpa awak yang dikendalikan dari jarak jauh dan biasanya dilengkapi dengan kamera atau sensor lainnya untuk pengambilan data.",
    number: 3,
    color: "bg-lime-500",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Pelatihan Manajemen Organisasi",
    description:
      "Pelatihan Manajemen Organisasi adalah program pendidikan atau pelatihan yang dirancang untuk mengembangkan keterampilan dan pengetahuan dalam mengelola sebuah organisasi secara efektif. Ini melibatkan pemahaman tentang prinsip-prinsip manajemen, strategi, teknik, dan praktik terbaik yang diperlukan untuk memimpin, mengatur, dan mengelola sumber daya organisasi dengan baik.",
    number: 4,
    color: "bg-sky-400",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Pelatihan Manajemen Personality",
    description:
      "Pelatihan Manajemen Personality adalah program pendidikan atau pelatihan yang bertujuan untuk membantu individu memahami, mengembangkan, dan mengelola kepribadian mereka secara efektif dalam konteks profesional dan pribadi. Ini melibatkan pemahaman tentang karakteristik kepribadian individu, cara berinteraksi dengan orang lain, dan strategi untuk meningkatkan keterampilan interpersonal, komunikasi, dan kepemimpinan.",
    number: 5,
    color: "bg-fuchsia-500",
    icon: UsersIcon,
  },
];

const TrainingCompany: FC<any> = () => {
  return (
    <div id="Pelatihan" className="py-24 sm:py-32 sm:px-6 bg-gray-100">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bidang Pelatihan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600"></p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 sm:mx-3 lg:mt-24 lg:max-w-7xl">
          <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-5 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.name} className="rounded-xl bg-white p-6 text-center shadow-xl">
                <div
                  className={
                    "mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg shadow-teal-500/40 " +
                    feature.color
                  }
                >
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{feature.name}</h1>
                <p className="px-4 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </dl>
          <div className="flex justify-center mt-10">
            <dl className="max-w-2xl grid gap-x-5 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.slice(3).map((feature) => (
                <div key={feature.name} className="rounded-xl bg-white p-6 text-center shadow-xl">
                  <div
                    className={
                      "mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg shadow-teal-500/40 " +
                      feature.color
                    }
                  >
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{feature.name}</h1>
                  <p className="px-4 text-gray-500">{feature.description}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCompany;
