import { FC } from "react";
import {
  ArrowPathIcon,
  UserPlusIcon,
  FingerPrintIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Mengusahakan terbentuknya Sumber Daya Manusia yang berakhlak mulia",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: UserPlusIcon,
  },
  {
    name: "Memberikan dorongan dan bimbingan kepada personil untuk siap menjadi pemimpin dan penggerak baik di dalam Organisasi maupun di kalangan masyarakat",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: BookOpenIcon,
  },
  {
    name: "Membangun karakter yang bertanggung jawab serta memiliki jiwa solidaritas yang tinggi",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  }
];

const PurposeComponent: FC<any> = () => {
  return (
    <>
      <div id="Tujuan" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              SDM Unggul, Bisnis Sukses
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tujuan Lembaga Peningkatan Kapasitas Sumber Daya Manusia (LPKSDM)
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              bertujuan untuk meningkatkan kualitas sumber daya manusia melalui penyelenggaraan berbagai program pelatihan dan kursus yang relevan dengan kebutuhan dunia kerja dan industri.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.slice(0, 2).map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
            <div className="flex justify-center mt-10">
              <dl className="max-w-md mx-auto">
                {features.slice(2).map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurposeComponent;
