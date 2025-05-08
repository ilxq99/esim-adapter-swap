import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Определяем типы данных
interface Device {
  name: string;
  compatible: boolean;
}

interface DeviceCategory {
  id: string;
  name: string;
  icon: string;
  devices: Device[];
}

const Devices = () => {
  // Прокручиваем страницу наверх при монтировании
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "all" | "compatible" | "incompatible"
  >("all");

  const deviceCategories = [
    {
      name: "Смартфоны",
      devices: [
        "iPhone 6, iPhone 6S, iPhone 7, iPhone 8, iPhone SE (1 поколение)",
        "Samsung Galaxy S7, S8, S9, Galaxy A и J серии (2016-2019)",
        "Xiaomi Mi 8, Mi 9, Redmi Note 7, Redmi Note 8",
        "Huawei P20, P30, Mate 10, Honor 8, Honor 9",
        "OnePlus 5, OnePlus 6, OnePlus 7",
      ],
    },
    {
      name: "Планшеты",
      devices: [
        "iPad (5-8 поколения)",
        "iPad Mini (1-4 поколения)",
        "Samsung Galaxy Tab S2, S3, A (2016-2019)",
        "Huawei MediaPad M3, M5",
        "Lenovo Tab 4, Tab P10",
      ],
    },
    {
      name: "Ноутбуки с LTE",
      devices: [
        "Lenovo ThinkPad X1 Carbon (5-6 поколения)",
        "HP EliteBook 840 G5, G6",
        "Dell Latitude 7400, 7300",
        "Microsoft Surface Pro (5-6 поколения)",
        "Acer Swift 7",
      ],
    },
    {
      name: "Другие устройства",
      devices: [
        "Часы с поддержкой SIM-карт",
        "Автомобильные GPS-трекеры",
        "Маршрутизаторы 4G",
        "IoT устройства с GSM модулями",
        "Камеры с поддержкой SIM-карт",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold text-dark mb-4">
                Поддерживаемые устройства
              </h1>
              <p className="text-gray-600">
                Switch eSIM адаптеры совместимы с широким спектром устройств,
                которые изначально не имеют встроенной поддержки eSIM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {deviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <h2 className="text-xl font-semibold text-primary mb-4">
                    {category.name}
                  </h2>
                  <ul className="space-y-2">
                    {category.devices.map((device, deviceIndex) => (
                      <li key={deviceIndex} className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700">{device}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 bg-blue-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-dark mb-3">
                Не нашли свое устройство?
              </h3>
              <p className="text-gray-600 mb-4">
                Если вы не нашли ваше устройство в списке, свяжитесь с нашей
                службой поддержки. Мы постоянно работаем над расширением списка
                поддерживаемых устройств.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-grow">
                  <p className="text-sm text-gray-500">Служба поддержки:</p>
                  <p className="font-medium">support@switchesim.ru</p>
                  <p className="font-medium">+7 (800) 123-45-67</p>
                </div>
                <div>
                  <a
                    href="/contacts"
                    className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium"
                  >
                    Связаться с нами
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Devices;
