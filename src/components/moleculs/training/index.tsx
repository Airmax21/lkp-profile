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
  }
];

const TrainingCompany: FC<any> = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bidang Pelatihan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-20 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <h3 className="h-6 w-6 text-white" aria-hidden="true">
                      {feature.number}
                    </h3>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-lg leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TrainingCompany;
