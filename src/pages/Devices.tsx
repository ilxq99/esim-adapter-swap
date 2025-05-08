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

  // Полный список устройств по категориям
  const deviceCategories: DeviceCategory[] = [
    {
      id: "apple",
      name: "Apple",
      icon: "Apple",
      devices: [
        { name: "iPhone 15 Pro Max", compatible: true },
        { name: "iPhone 15 Pro", compatible: true },
        { name: "iPhone 15 Plus", compatible: true },
        { name: "iPhone 15", compatible: true },
        { name: "iPhone 14 Pro Max", compatible: true },
        { name: "iPhone 14 Pro", compatible: true },
        { name: "iPhone 14 Plus", compatible: true },
        { name: "iPhone 14", compatible: true },
        { name: "iPhone 13 Pro Max", compatible: true },
        { name: "iPhone 13 Pro", compatible: true },
        { name: "iPhone 13 Mini", compatible: true },
        { name: "iPhone 13", compatible: true },
        { name: "iPhone 12 Pro Max", compatible: true },
        { name: "iPhone 12 Pro", compatible: true },
        { name: "iPhone 12 Mini", compatible: true },
        { name: "iPhone 12", compatible: true },
        { name: "iPhone 11 Pro Max", compatible: true },
        { name: "iPhone 11 Pro", compatible: true },
        { name: "iPhone 11", compatible: true },
        { name: "iPhone XS Max", compatible: true },
        { name: "iPhone XS", compatible: true },
        { name: "iPhone XR", compatible: true },
        { name: "iPhone X", compatible: true },
        { name: "iPhone 8 Plus", compatible: true },
        { name: "iPhone 8", compatible: true },
        { name: "iPhone 7 Plus", compatible: true },
        { name: "iPhone 7", compatible: true },
        { name: "iPhone 6s Plus", compatible: true },
        { name: "iPhone 6s", compatible: true },
        { name: "iPhone SE (1-го поколения)", compatible: true },
        { name: "iPhone 5s", compatible: true },
        { name: "iPhone 5c", compatible: true },
        { name: "iPhone 5", compatible: true },
        { name: "iPhone 4s", compatible: true },
        { name: "iPhone 4", compatible: true },
        { name: "iPad Pro 12.9 (6-го поколения)", compatible: true },
        { name: "iPad Pro 11 (4-го поколения)", compatible: true },
        { name: "iPad 10-го поколения", compatible: true },
        { name: "iPad Pro 12.9 (5-го поколения)", compatible: true },
        { name: "iPad Pro 11 (3-го поколения)", compatible: true },
        { name: "iPad mini (6-го поколения)", compatible: true },
        { name: "iPad Air (5-го поколения)", compatible: true },
        { name: "iPad (9-го поколения)", compatible: true },
        { name: "iPad Pro 12.9 (4-го поколения)", compatible: true },
        { name: "iPad Pro 11 (2-го поколения)", compatible: true },
        { name: "iPad Air (4-го поколения)", compatible: true },
        { name: "iPad (8-го поколения)", compatible: true },
        { name: "iPad Pro 12.9 (3-го поколения)", compatible: true },
        { name: "iPad Pro 11 (1-го поколения)", compatible: true },
        { name: "iPad Air (3-го поколения)", compatible: true },
        { name: "iPad mini (5-го поколения)", compatible: true },
        { name: "iPad (7-го поколения)", compatible: true },
        { name: "iPad (6-го поколения)", compatible: true },
        { name: "iPad (5-го поколения)", compatible: true },
        { name: "iPad Pro 12.9 (2-го поколения)", compatible: true },
        { name: "iPad Pro 10.5", compatible: true },
        { name: "iPad Pro 9.7", compatible: true },
        { name: "iPad Pro 12.9 (1-го поколения)", compatible: true },
        { name: "iPad Air 2", compatible: true },
        { name: "iPad Air", compatible: true },
        { name: "iPad mini 4", compatible: true },
        { name: "iPad mini 3", compatible: true },
        { name: "iPad mini 2", compatible: true },
        { name: "iPad mini", compatible: true },
        { name: "iPad (4-го поколения)", compatible: true },
        { name: "iPad (3-го поколения)", compatible: true },
        { name: "iPad 2", compatible: true },
        { name: "iPad", compatible: true },
      ],
    },
    {
      id: "samsung",
      name: "Samsung",
      icon: "Smartphone",
      devices: [
        { name: "Samsung Galaxy S23 Ultra", compatible: false },
        { name: "Samsung Galaxy S23", compatible: false },
        { name: "Samsung Galaxy S22 Ultra", compatible: false },
        { name: "Samsung Galaxy S22", compatible: false },
        { name: "Samsung Galaxy S21 Ultra 5G", compatible: false },
        { name: "Samsung Galaxy S21 5G", compatible: false },
        { name: "Samsung Galaxy S21 FE 5G", compatible: false },
        { name: "Samsung Galaxy S20 Ultra 5G", compatible: false },
        { name: "Samsung Galaxy S20 5G", compatible: false },
        { name: "Samsung Galaxy S20 FE 5G", compatible: false },
        { name: "Samsung Galaxy S10", compatible: true },
        { name: "Galaxy S10+", compatible: true },
        { name: "Galaxy S10 Dual", compatible: true },
        { name: "Galaxy S10E", compatible: true },
        { name: "Galaxy S10E Dual", compatible: true },
        { name: "Galaxy S9+", compatible: true },
        { name: "Galaxy S9 Duos", compatible: true },
        { name: "Galaxy S8", compatible: true },
        { name: "Galaxy S8+", compatible: true },
        { name: "Galaxy S8+ Duos", compatible: true },
        { name: "Galaxy Z Fold4", compatible: false },
        { name: "Galaxy Z Fold3 5G", compatible: false },
        { name: "Galaxy Z Flip4", compatible: false },
        { name: "Galaxy Z Flip3 5G", compatible: false },
        { name: "Galaxy Fold", compatible: true },
        { name: "Galaxy Note 20 Ultra 5G", compatible: false },
        { name: "Galaxy Note 20 5G", compatible: false },
        { name: "Galaxy Note 10+", compatible: true },
        { name: "Galaxy Note 10+ Dual", compatible: true },
        { name: "Galaxy Note 10 Lite Dual", compatible: true },
        { name: "Galaxy Note 9", compatible: true },
        { name: "Galaxy Note 9 Duos", compatible: true },
        { name: "Galaxy Note 8", compatible: true },
        { name: "Galaxy Note 8 Duos", compatible: true },
        { name: "Galaxy Note FE", compatible: true },
        { name: "Galaxy A53 5G", compatible: false },
        { name: "Galaxy A52 5G", compatible: false },
        { name: "Galaxy A52", compatible: false },
        { name: "Galaxy A51", compatible: true },
        { name: "Galaxy A51 Dual", compatible: true },
        { name: "Galaxy A50", compatible: true },
        { name: "Galaxy A50 Dual", compatible: true },
        { name: "Galaxy A32 5G", compatible: false },
        { name: "Galaxy A32", compatible: true },
        { name: "Galaxy A31", compatible: true },
        { name: "Galaxy A30", compatible: true },
        { name: "Galaxy A23", compatible: false },
        { name: "Galaxy A22 5G", compatible: false },
        { name: "Galaxy A22", compatible: false },
        { name: "Galaxy A21s", compatible: true },
        { name: "Galaxy A20", compatible: true },
        { name: "Galaxy A20 Dual", compatible: true },
        { name: "Galaxy A13 5G", compatible: false },
        { name: "Galaxy A13", compatible: false },
        { name: "Galaxy A12", compatible: true },
        { name: "Galaxy A11", compatible: true },
        { name: "Galaxy A10", compatible: true },
        { name: "Galaxy A03", compatible: false },
        { name: "Galaxy A03s", compatible: false },
        { name: "Galaxy A02", compatible: true },
        { name: "Galaxy A02s", compatible: true },
        { name: "Galaxy A01", compatible: true },
        { name: "Galaxy M53 5G", compatible: false },
        { name: "Galaxy M33 5G", compatible: false },
        { name: "Galaxy M31", compatible: true },
        { name: "Galaxy M30s", compatible: true },
        { name: "Galaxy M21", compatible: true },
        { name: "Galaxy M11", compatible: true },
        { name: "Galaxy J8", compatible: true },
        { name: "Galaxy J7", compatible: true },
        { name: "Galaxy J6", compatible: true },
        { name: "Galaxy J5", compatible: true },
        { name: "Galaxy J4", compatible: true },
        { name: "Galaxy J3", compatible: true },
        { name: "Galaxy J2", compatible: true },
        { name: "Galaxy Tab S7+", compatible: false },
        { name: "Galaxy Tab S7", compatible: false },
        { name: "Galaxy Tab S6 Lite", compatible: false },
        { name: "Galaxy Tab S6", compatible: false },
        { name: "Galaxy Tab S5e", compatible: true },
        { name: "Galaxy Tab S4", compatible: true },
        { name: "Galaxy Tab A7", compatible: false },
        { name: "Galaxy Tab A 10.1 [2016]", compatible: true },
        { name: "Galaxy Tab A 8.0 [2019]", compatible: true },
        { name: "Galaxy Tab A7 Lite 8.7", compatible: false },
        { name: "Galaxy XCover Pro", compatible: true },
        { name: "Galaxy XCover 4s", compatible: true },
      ],
    },
    {
      id: "google",
      name: "Google",
      icon: "Smartphone",
      devices: [
        { name: "Pixel 7", compatible: false },
        { name: "Pixel 7 Pro", compatible: false },
        { name: "Pixel 6a", compatible: false },
        { name: "Pixel 6 Pro", compatible: false },
        { name: "Pixel 6", compatible: false },
        { name: "Pixel 5a", compatible: false },
        { name: "Pixel 5", compatible: false },
        { name: "Pixel 4a 5G", compatible: false },
        { name: "Pixel 4a", compatible: false },
        { name: "Pixel 4 XL", compatible: false },
        { name: "Pixel 4", compatible: false },
        { name: "Pixel 3a XL", compatible: true },
        { name: "Pixel 3a", compatible: true },
        { name: "Pixel 3 XL", compatible: true },
        { name: "Pixel 3", compatible: true },
        { name: "Pixel 2 XL", compatible: true },
        { name: "Pixel 2", compatible: true },
        { name: "Pixel XL", compatible: true },
        { name: "Pixel", compatible: true },
      ],
    },
    {
      id: "xiaomi",
      name: "Xiaomi",
      icon: "Smartphone",
      devices: [
        { name: "Xiaomi 14", compatible: false },
        { name: "Xiaomi 13", compatible: false },
        { name: "Xiaomi 13 Pro", compatible: false },
        { name: "Xiaomi 12 Pro", compatible: false },
        { name: "Xiaomi 12", compatible: false },
        { name: "Xiaomi 12 Lite", compatible: false },
        { name: "Xiaomi 12X", compatible: false },
        { name: "Xiaomi 12T Pro", compatible: false },
        { name: "Xiaomi 12T", compatible: false },
        { name: "Xiaomi 11T Pro", compatible: false },
        { name: "Xiaomi 11T", compatible: false },
        { name: "Xiaomi 11 Ultra", compatible: false },
        { name: "Xiaomi 11 Pro", compatible: false },
        { name: "Xiaomi 11", compatible: false },
        { name: "Xiaomi 11i HyperCharge", compatible: false },
        { name: "Xiaomi 11 Lite 5G NE", compatible: false },
        { name: "Xiaomi 11 Lite 5G", compatible: false },
        { name: "Xiaomi 11 Lite", compatible: false },
        { name: "Xiaomi Mi 10 Ultra", compatible: false },
        { name: "Xiaomi Mi 10 Pro", compatible: false },
        { name: "Xiaomi Mi 10", compatible: false },
        { name: "Xiaomi Mi 10T Pro", compatible: false },
        { name: "Xiaomi Mi 10T", compatible: false },
        { name: "Xiaomi Mi 10T Lite", compatible: false },
        { name: "Xiaomi Mi 10 Lite", compatible: false },
        { name: "Xiaomi Mi Note 10 Pro", compatible: true },
        { name: "Xiaomi Mi Note 10", compatible: true },
        { name: "Xiaomi Mi 9 Pro", compatible: true },
        { name: "Xiaomi Mi 9", compatible: true },
        { name: "Xiaomi Mi 9T Pro", compatible: true },
        { name: "Xiaomi Mi 9T", compatible: true },
        { name: "Xiaomi Mi 9 SE", compatible: true },
        { name: "Xiaomi Mi 9 Lite", compatible: true },
        { name: "Xiaomi Mi 8 Pro", compatible: true },
        { name: "Xiaomi Mi 8", compatible: true },
        { name: "Xiaomi Mi 8 Explorer Edition", compatible: true },
        { name: "Xiaomi Mi 8 Lite", compatible: true },
        { name: "Xiaomi Mi A3", compatible: true },
        { name: "Xiaomi Mi A2", compatible: true },
        { name: "Xiaomi Mi A2 Lite", compatible: true },
        { name: "Xiaomi Mi A1", compatible: true },
        { name: "Xiaomi MIX 4", compatible: false },
        { name: "Xiaomi MIX Fold", compatible: false },
        { name: "Xiaomi MIX Fold 2", compatible: false },
        { name: "Xiaomi MIX", compatible: true },
        { name: "Xiaomi MIX 2S", compatible: true },
        { name: "Redmi Note 13 Pro+", compatible: false },
        { name: "Redmi Note 13 Pro", compatible: false },
        { name: "Redmi Note 13", compatible: false },
        { name: "Redmi Note 12 Pro+", compatible: false },
        { name: "Redmi Note 12 Pro", compatible: false },
        { name: "Redmi Note 12", compatible: false },
        { name: "Redmi Note 11 Pro+", compatible: false },
        { name: "Redmi Note 11 Pro", compatible: false },
        { name: "Redmi Note 11S", compatible: false },
        { name: "Redmi Note 11S 5G", compatible: false },
        { name: "Redmi Note 11", compatible: false },
        { name: "Redmi Note 11T Pro", compatible: false },
        { name: "Redmi Note 10 Pro", compatible: false },
        { name: "Redmi Note 10S", compatible: false },
        { name: "Redmi Note 10 5G", compatible: false },
        { name: "Redmi Note 10", compatible: false },
        { name: "Redmi Note 9 Pro", compatible: true },
        { name: "Redmi Note 9S", compatible: true },
        { name: "Redmi Note 9", compatible: true },
        { name: "Redmi Note 9T", compatible: false },
        { name: "Redmi Note 8 Pro", compatible: true },
        { name: "Redmi Note 8T", compatible: true },
        { name: "Redmi Note 8", compatible: true },
        { name: "Redmi Note 7", compatible: true },
        { name: "Redmi Note 4", compatible: true },
        { name: "Redmi 10 2022", compatible: false },
        { name: "Redmi 10 5G", compatible: false },
        { name: "Redmi 10C", compatible: false },
        { name: "Redmi 10", compatible: false },
        { name: "Redmi 9T", compatible: true },
        { name: "Redmi 9C", compatible: true },
        { name: "Redmi 9", compatible: true },
        { name: "Redmi 9A", compatible: true },
        { name: "Redmi 6", compatible: true },
        { name: "Redmi 4 Pro", compatible: true },
        { name: "Redmi 4A", compatible: true },
        { name: "Redmi K40", compatible: false },
        { name: "Redmi K30", compatible: false },
        { name: "Redmi K20 Pro", compatible: true },
        { name: "Redmi K20", compatible: true },
        { name: "POCO F4 GT", compatible: false },
        { name: "POCO F4", compatible: false },
        { name: "POCO F3", compatible: false },
        { name: "POCO F2 Pro", compatible: false },
        { name: "POCO F1", compatible: true },
        { name: "POCO X4 GT", compatible: false },
        { name: "POCO X4 Pro 5G", compatible: false },
        { name: "POCO X3 GT", compatible: false },
        { name: "POCO X3 Pro", compatible: false },
        { name: "POCO X3 NFC", compatible: false },
        { name: "POCO M4 Pro 5G", compatible: false },
        { name: "POCO M4 Pro", compatible: false },
        { name: "POCO M3 Pro 5G", compatible: false },
        { name: "POCO M3", compatible: true },
      ],
    },
    // остальные категории без изменений
  ];

  // Получаем текущий активный производитель (по умолчанию первый в списке)
  const [activeManufacturer, setActiveManufacturer] = useState(
    deviceCategories[0].id,
  );

  // Фильтруем устройства по поисковому запросу и совместимости
  const filterDevices = (devices: Device[]) => {
    return devices.filter((device) => {
      const matchesSearch =
        searchTerm === "" ||
        device.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "compatible" && device.compatible) ||
        (activeFilter === "incompatible" && !device.compatible);

      return matchesSearch && matchesFilter;
    });
  };

  // Подсчет устройств для отображения счетчиков
  const getTotalCount = (
    category: DeviceCategory,
    filter: "all" | "compatible" | "incompatible",
  ) => {
    if (filter === "all") return category.devices.length;
    return category.devices.filter((d) =>
      filter === "compatible" ? d.compatible : !d.compatible,
    ).length;
  };

  // Подсчитываем общее количество устройств
  const totalCount = deviceCategories.reduce(
    (acc, category) => acc + category.devices.length,
    0,
  );
  const compatibleCount = deviceCategories
    .flatMap((category) => category.devices)
    .filter((device) => device.compatible).length;

  const incompatibleCount = deviceCategories
    .flatMap((category) => category.devices)
    .filter((device) => !device.compatible).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* ... остальная часть компонента без изменений ... */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Devices;
