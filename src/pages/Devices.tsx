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
        { name: "iPhone 15 Pro Max", compatible: false },
        { name: "iPhone 15 Pro", compatible: false },
        { name: "iPhone 15 Plus", compatible: false },
        { name: "iPhone 15", compatible: false },
        { name: "iPhone 14 Pro Max", compatible: false },
        { name: "iPhone 14 Pro", compatible: false },
        { name: "iPhone 14 Plus", compatible: false },
        { name: "iPhone 14", compatible: false },
        { name: "iPhone 13 Pro Max", compatible: false },
        { name: "iPhone 13 Pro", compatible: false },
        { name: "iPhone 13 Mini", compatible: false },
        { name: "iPhone 13", compatible: false },
        { name: "iPhone 12 Pro Max", compatible: false },
        { name: "iPhone 12 Pro", compatible: false },
        { name: "iPhone 12 Mini", compatible: false },
        { name: "iPhone 12", compatible: false },
        { name: "iPhone 11 Pro Max", compatible: false },
        { name: "iPhone 11 Pro", compatible: false },
        { name: "iPhone 11", compatible: false },
        { name: "iPhone XS Max", compatible: false },
        { name: "iPhone XS", compatible: false },
        { name: "iPhone XR", compatible: false },
        { name: "iPhone X", compatible: false },
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
        { name: "iPad Pro 12.9 (6-го поколения)", compatible: false },
        { name: "iPad Pro 11 (4-го поколения)", compatible: false },
        { name: "iPad 10-го поколения", compatible: false },
        { name: "iPad Pro 12.9 (5-го поколения)", compatible: false },
        { name: "iPad Pro 11 (3-го поколения)", compatible: false },
        { name: "iPad mini (6-го поколения)", compatible: false },
        { name: "iPad Air (5-го поколения)", compatible: false },
        { name: "iPad (9-го поколения)", compatible: false },
        { name: "iPad Pro 12.9 (4-го поколения)", compatible: false },
        { name: "iPad Pro 11 (2-го поколения)", compatible: false },
        { name: "iPad Air (4-го поколения)", compatible: false },
        { name: "iPad (8-го поколения)", compatible: false },
        { name: "iPad Pro 12.9 (3-го поколения)", compatible: false },
        { name: "iPad Pro 11 (1-го поколения)", compatible: false },
        { name: "iPad Air (3-го поколения)", compatible: false },
        { name: "iPad mini (5-го поколения)", compatible: false },
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
    {
      id: "oneplus",
      name: "OnePlus",
      icon: "Smartphone",
      devices: [
        { name: "OnePlus 10 Pro", compatible: false },
        { name: "OnePlus 10 Pro 5G", compatible: false },
        { name: "OnePlus 10R 5G", compatible: false },
        { name: "OnePlus 10T 5G", compatible: false },
        { name: "OnePlus 9 Pro", compatible: false },
        { name: "OnePlus 9", compatible: false },
        { name: "OnePlus 9R", compatible: false },
        { name: "OnePlus 8 Pro", compatible: false },
        { name: "OnePlus 8T", compatible: false },
        { name: "OnePlus 8", compatible: false },
        { name: "OnePlus 8 5G", compatible: false },
        { name: "OnePlus 7T Pro", compatible: true },
        { name: "OnePlus 7T", compatible: true },
        { name: "OnePlus 7 Pro", compatible: true },
        { name: "OnePlus 7", compatible: true },
        { name: "OnePlus 6T", compatible: true },
        { name: "OnePlus 6", compatible: true },
        { name: "OnePlus 5T", compatible: true },
        { name: "OnePlus 5", compatible: true },
        { name: "OnePlus 3T", compatible: true },
        { name: "OnePlus 3", compatible: true },
        { name: "OnePlus Nord 3", compatible: false },
        { name: "OnePlus Nord CE 3 Lite", compatible: false },
        { name: "OnePlus Nord CE 3", compatible: false },
        { name: "OnePlus Nord 2T", compatible: false },
        { name: "OnePlus Nord 2", compatible: false },
        { name: "OnePlus Nord CE 2 Lite", compatible: false },
        { name: "OnePlus Nord CE 2", compatible: false },
        { name: "OnePlus Nord CE", compatible: false },
        { name: "OnePlus Nord", compatible: false },
        { name: "OnePlus Nord N30", compatible: false },
        { name: "OnePlus Nord N20", compatible: false },
        { name: "OnePlus Nord N200", compatible: false },
        { name: "OnePlus Nord N100", compatible: false },
        { name: "OnePlus Nord N10 5G", compatible: false },
      ],
    },
    {
      id: "huawei",
      name: "Huawei",
      icon: "Smartphone",
      devices: [
        { name: "Huawei P60 Pro", compatible: false },
        { name: "Huawei P60", compatible: false },
        { name: "Huawei P50 Pro", compatible: false },
        { name: "Huawei P50", compatible: false },
        { name: "Huawei P40 Pro+", compatible: false },
        { name: "Huawei P40 Pro", compatible: false },
        { name: "Huawei P40", compatible: false },
        { name: "Huawei P40 Lite", compatible: false },
        { name: "Huawei P30 Pro", compatible: true },
        { name: "Huawei P30", compatible: true },
        { name: "Huawei P30 lite", compatible: true },
        { name: "Huawei P20 Pro", compatible: true },
        { name: "Huawei P20", compatible: true },
        { name: "Huawei P20 lite", compatible: true },
        { name: "Huawei P10 Plus", compatible: true },
        { name: "Huawei P10", compatible: true },
        { name: "Huawei P10 Lite", compatible: true },
        { name: "Huawei P9 Plus", compatible: true },
        { name: "Huawei P9", compatible: true },
        { name: "Huawei P9 Lite", compatible: true },
        { name: "Huawei Mate 50 Pro", compatible: false },
        { name: "Huawei Mate 50", compatible: false },
        { name: "Huawei Mate 40 Pro", compatible: false },
        { name: "Huawei Mate 40", compatible: false },
        { name: "Huawei Mate 30 Pro", compatible: false },
        { name: "Huawei Mate 30", compatible: false },
        { name: "Huawei Mate 20 Pro", compatible: true },
        { name: "Huawei Mate 20", compatible: true },
        { name: "Huawei Mate 20 lite", compatible: true },
        { name: "Huawei Mate 10 Pro", compatible: true },
        { name: "Huawei Mate 10", compatible: true },
        { name: "Huawei Mate 9 Pro", compatible: true },
        { name: "Huawei Mate 9", compatible: true },
        { name: "Huawei nova 10 Pro", compatible: false },
        { name: "Huawei nova 10", compatible: false },
        { name: "Huawei nova 9 Pro", compatible: false },
        { name: "Huawei nova 9", compatible: false },
        { name: "Huawei nova 5T", compatible: true },
        { name: "Huawei nova 5 Pro", compatible: true },
        { name: "Huawei nova 5", compatible: true },
        { name: "Huawei nova 4", compatible: true },
        { name: "Huawei nova 3", compatible: true },
        { name: "Huawei nova 2s", compatible: true },
        { name: "Huawei Y9 Prime (2019)", compatible: true },
        { name: "Huawei Y9 (2019)", compatible: true },
        { name: "Huawei Y9 (2018)", compatible: true },
        { name: "Huawei Y6 (2019)", compatible: true },
        { name: "Huawei Y5 (2019)", compatible: true },
        { name: "Huawei MediaPad M5 10.8", compatible: true },
        { name: "Huawei MediaPad M5 8.4", compatible: true },
        { name: "Huawei MediaPad M5 lite", compatible: true },
      ],
    },
    {
      id: "oppo",
      name: "OPPO",
      icon: "Smartphone",
      devices: [
        { name: "OPPO Find X5 Pro", compatible: false },
        { name: "OPPO Find X5", compatible: false },
        { name: "OPPO Find X3 Pro", compatible: false },
        { name: "OPPO Find X3", compatible: false },
        { name: "OPPO Find X3 Lite", compatible: false },
        { name: "OPPO Find X2 Pro", compatible: false },
        { name: "OPPO Find X2", compatible: false },
        { name: "OPPO Find X2 Lite", compatible: false },
        { name: "OPPO Find X", compatible: true },
        { name: "OPPO Reno7 5G", compatible: false },
        { name: "OPPO Reno7 A", compatible: false },
        { name: "OPPO Reno7 Z 5G", compatible: false },
        { name: "OPPO Reno7/F21 Pro", compatible: false },
        { name: "OPPO Reno6 Z 5G", compatible: false },
        { name: "OPPO Reno5 Pro+ 5G", compatible: false },
        { name: "OPPO Reno5 Pro 5G", compatible: false },
        { name: "OPPO Reno5 F", compatible: false },
        { name: "OPPO Reno5 A", compatible: false },
        { name: "OPPO Reno4 Pro", compatible: false },
        { name: "OPPO Reno4", compatible: false },
        { name: "OPPO Reno3 Pro", compatible: false },
        { name: "OPPO Reno3", compatible: false },
        { name: "OPPO Reno2", compatible: true },
        { name: "OPPO Reno", compatible: true },
        { name: "OPPO A77 5G", compatible: false },
        { name: "OPPO A55 5G", compatible: false },
        { name: "OPPO A53", compatible: false },
        { name: "OPPO A52", compatible: false },
        { name: "OPPO A91", compatible: true },
        { name: "OPPO A9 2020", compatible: true },
        { name: "OPPO A5 2020", compatible: true },
        { name: "OPPO F11 Pro", compatible: true },
        { name: "OPPO F9 Pro", compatible: true },
        { name: "OPPO F7", compatible: true },
      ],
    },
    {
      id: "motorola",
      name: "Motorola",
      icon: "Smartphone",
      devices: [
        { name: "Motorola edge 30 ultra", compatible: false },
        { name: "Motorola edge 30 pro", compatible: false },
        { name: "Motorola edge 30 fusion", compatible: false },
        { name: "Motorola edge 30 neo", compatible: false },
        { name: "Motorola edge 30", compatible: false },
        { name: "Motorola edge 20 pro", compatible: false },
        { name: "Motorola edge 20 fusion", compatible: false },
        { name: "Motorola edge 20", compatible: false },
        { name: "Motorola edge plus", compatible: false },
        { name: "Motorola edge", compatible: false },
        { name: "Motorola Razr 40 Ultra", compatible: false },
        { name: "Motorola Razr 40", compatible: false },
        { name: "Motorola moto g72", compatible: false },
        { name: "Motorola moto g71 5G", compatible: false },
        { name: "Motorola moto g62 5G", compatible: false },
        { name: "Motorola moto g52", compatible: false },
        { name: "Motorola moto g32", compatible: false },
        { name: "Motorola moto g31", compatible: false },
        { name: "Motorola moto g(10)", compatible: false },
        { name: "Motorola moto g(30)", compatible: false },
        { name: "Motorola moto g(50)", compatible: false },
        { name: "Motorola moto g(60)", compatible: false },
        { name: "Motorola moto g(60)s", compatible: false },
        { name: "Motorola moto g fast", compatible: true },
        { name: "Motorola moto g play (2021)", compatible: true },
        { name: "Motorola moto g pro", compatible: true },
        { name: "Motorola moto g stylus", compatible: true },
        { name: "Motorola moto g stylus (2021)", compatible: true },
        { name: "Motorola moto g stylus 5G", compatible: false },
        { name: "Motorola moto g(7)", compatible: true },
        { name: "Motorola moto g(7) plus", compatible: true },
        { name: "Motorola moto g(7) power", compatible: true },
        { name: "Motorola moto g(8) plus", compatible: true },
        { name: "Motorola moto g(8) power", compatible: true },
        { name: "Motorola moto g(9)", compatible: true },
        { name: "Motorola moto g(9) plus", compatible: true },
        { name: "Motorola moto g(9) power", compatible: true },
        { name: "Motorola moto e(7) plus", compatible: true },
        { name: "Motorola moto e5 plus", compatible: true },
        { name: "Motorola moto e6 plus", compatible: true },
        { name: "Motorola Moto G (5S) Plus", compatible: true },
        { name: "Motorola Moto G (5th Gen)", compatible: true },
        { name: "Motorola Moto G Plus (5th Gen)", compatible: true },
        { name: "Motorola Moto G(4) Plus", compatible: true },
        { name: "Motorola Moto G4 Play", compatible: true },
        { name: "Motorola Moto X (4)", compatible: true },
        { name: "Motorola one action", compatible: true },
      ],
    },
    {
      id: "nokia",
      name: "Nokia",
      icon: "Smartphone",
      devices: [
        { name: "NOKIA X30", compatible: false },
        { name: "NOKIA X20", compatible: false },
        { name: "NOKIA X10", compatible: false },
        { name: "NOKIA G60 5G", compatible: false },
        { name: "NOKIA G50", compatible: false },
        { name: "NOKIA G42", compatible: false },
        { name: "NOKIA G21", compatible: false },
        { name: "NOKIA G20", compatible: false },
        { name: "NOKIA G11", compatible: false },
        { name: "NOKIA G10", compatible: false },
        { name: "NOKIA 9 PureView", compatible: false },
        { name: "NOKIA 8.3", compatible: false },
        { name: "NOKIA 8.1", compatible: true },
        { name: "NOKIA 8 Sirocco", compatible: true },
        { name: "NOKIA 8", compatible: true },
        { name: "NOKIA 7.2", compatible: true },
        { name: "NOKIA 7.1", compatible: true },
        { name: "NOKIA 7 plus", compatible: true },
        { name: "NOKIA 6.2", compatible: true },
        { name: "NOKIA 6.1", compatible: true },
        { name: "NOKIA 6", compatible: true },
        { name: "NOKIA 5.3", compatible: false },
        { name: "NOKIA 5.1", compatible: true },
        { name: "NOKIA 5", compatible: true },
        { name: "NOKIA 4.2", compatible: true },
        { name: "NOKIA 3.2", compatible: true },
        { name: "NOKIA 3.1", compatible: true },
        { name: "NOKIA 3", compatible: true },
        { name: "NOKIA 2.2", compatible: true },
        { name: "NOKIA 2.1", compatible: true },
        { name: "NOKIA 1 Plus", compatible: true },
        { name: "NOKIA T10", compatible: false },
        { name: "NOKIA T21", compatible: false },
      ],
    },
    {
      id: "sony",
      name: "Sony",
      icon: "Smartphone",
      devices: [
        { name: "Xperia 1 IV", compatible: false },
        { name: "Xperia 5 IV", compatible: false },
        { name: "Xperia 10 IV", compatible: false },
        { name: "Xperia 1 III", compatible: false },
        { name: "Xperia 5 III", compatible: false },
        { name: "Xperia 10 III", compatible: false },
        { name: "Xperia 1 II", compatible: false },
        { name: "Xperia 5 II", compatible: false },
        { name: "Xperia 10 II", compatible: false },
        { name: "Xperia 1", compatible: false },
        { name: "Xperia 5", compatible: false },
        { name: "Xperia 10", compatible: false },
        { name: "Xperia 10 Plus", compatible: false },
        { name: "Xperia XZ3", compatible: true },
        { name: "Xperia XZ2 Premium", compatible: true },
        { name: "Xperia XZ2", compatible: true },
        { name: "Xperia XZ2 Compact", compatible: true },
        { name: "Xperia XZ1", compatible: true },
        { name: "Xperia XZ1 Compact", compatible: true },
        { name: "Xperia XZ Premium", compatible: true },
        { name: "Xperia XZ", compatible: true },
        { name: "Xperia XA2 Ultra", compatible: true },
        { name: "Xperia XA2", compatible: true },
        { name: "Xperia XA1 Ultra", compatible: true },
        { name: "Xperia XA1", compatible: true },
        { name: "docomo Xperia 1", compatible: false },
        { name: "docomo Xperia 1 II", compatible: false },
        { name: "docomo Xperia 1 III", compatible: false },
        { name: "docomo Xperia 1 IV", compatible: false },
        { name: "docomo Xperia 5", compatible: false },
        { name: "docomo Xperia 5 II", compatible: false },
        { name: "docomo Xperia 5 III", compatible: false },
        { name: "docomo Xperia 5 IV", compatible: false },
      ],
    },
    {
      id: "vivo",
      name: "Vivo",
      icon: "Smartphone",
      devices: [
        { name: "vivo X80", compatible: false },
        { name: "vivo X80 Pro", compatible: false },
        { name: "vivo X70 Pro+", compatible: false },
        { name: "vivo X Fold", compatible: false },
        { name: "vivo X Fold+", compatible: false },
        { name: "vivo X Note", compatible: false },
        { name: "vivo X60 Pro+", compatible: false },
        { name: "vivo X60 Pro", compatible: false },
        { name: "vivo X60", compatible: false },
        { name: "vivo X50 Pro+", compatible: false },
        { name: "vivo X50 Pro", compatible: false },
        { name: "vivo X50", compatible: false },
        { name: "vivo X30 Pro", compatible: false },
        { name: "vivo X30", compatible: false },
        { name: "vivo X27 Pro", compatible: true },
        { name: "vivo X27", compatible: true },
        { name: "vivo V25", compatible: false },
        { name: "vivo V25 Pro", compatible: false },
        { name: "vivo V25e", compatible: false },
        { name: "vivo V21", compatible: false },
        { name: "vivo V20 Pro", compatible: false },
        { name: "vivo V20", compatible: false },
        { name: "vivo V17 Pro", compatible: true },
        { name: "vivo V17", compatible: true },
        { name: "vivo V15 Pro", compatible: true },
        { name: "vivo V15", compatible: true },
        { name: "vivo Y17", compatible: true },
        { name: "vivo Y02", compatible: false },
        { name: "vivo Y02s", compatible: false },
        { name: "vivo Y21A", compatible: false },
        { name: "vivo iQOO 10", compatible: false },
        { name: "vivo iQOO 10 Pro", compatible: false },
        { name: "vivo iQOO 11", compatible: false },
        { name: "vivo iQOO Neo5S", compatible: false },
        { name: "vivo iQOO Neo6", compatible: false },
        { name: "vivo iQOO Neo7", compatible: false },
      ],
    },
    {
      id: "realme",
      name: "Realme",
      icon: "Smartphone",
      devices: [
        { name: "Realme GT 2 Pro", compatible: false },
        { name: "Realme GT 5G", compatible: false },
        { name: "Realme GT Neo 2", compatible: false },
        { name: "Realme GT NEO 3", compatible: false },
        { name: "Realme 9 Pro+", compatible: false },
        { name: "Realme 9 5G", compatible: false },
        { name: "Realme 9", compatible: false },
        { name: "Realme 9i", compatible: false },
        { name: "Realme 9Pro 5G", compatible: false },
        { name: "Realme 8", compatible: false },
        { name: "Realme 8 Pro", compatible: false },
        { name: "Realme 8i", compatible: false },
        { name: "Realme 7", compatible: false },
        { name: "Realme 7 5G", compatible: false },
        { name: "Realme 7i", compatible: false },
        { name: "Realme 7pro", compatible: false },
        { name: "Realme 6", compatible: true },
        { name: "Realme 6i", compatible: true },
        { name: "Realme 6Pro", compatible: true },
        { name: "Realme 5", compatible: true },
        { name: "Realme 5i", compatible: true },
        { name: "Realme 5pro", compatible: true },
        { name: "Realme C35", compatible: false },
        { name: "Realme C33", compatible: false },
        { name: "Realme C31", compatible: false },
        { name: "Realme C30", compatible: false },
        { name: "Realme C25", compatible: false },
        { name: "Realme C25s", compatible: false },
        { name: "Realme C25Y", compatible: false },
        { name: "Realme C21Y", compatible: false },
        { name: "Realme C20", compatible: false },
        { name: "Realme C17", compatible: true },
        { name: "Realme C15", compatible: true },
        { name: "Realme C12", compatible: true },
        { name: "Realme C11", compatible: true },
        { name: "Realme C3", compatible: true },
        { name: "Realme C2", compatible: true },
        { name: "Realme X7 5G", compatible: false },
        { name: "Realme X7 Max", compatible: false },
        { name: "Realme X7 Pro", compatible: false },
        { name: "Realme X3", compatible: false },
        { name: "Realme X50 5G", compatible: false },
        { name: "Realme X50 Pro", compatible: false },
        { name: "Realme X2", compatible: true },
        { name: "Realme X2Pro", compatible: true },
        { name: "Realme XT", compatible: true },
        { name: "Realme narzo 30", compatible: false },
        { name: "Realme narzo 30A", compatible: false },
        { name: "Realme Narzo 30 Pro 5G", compatible: false },
        { name: "Realme narzo 20 Pro", compatible: true },
        { name: "Realme narzo 20A", compatible: true },
      ],
    },
    {
      id: "others",
      name: "Другие устройства",
      icon: "Smartphone",
      devices: [
        { name: "Fairphone 4", compatible: false },
        { name: "Fairphone 3", compatible: true },
        { name: "ZTE Axon 30 Pro 5G", compatible: false },
        { name: "ZTE Axon 30 5G", compatible: false },
        { name: "ZTE Axon 11 5G", compatible: false },
        { name: "ZTE Axon 11", compatible: false },
        { name: "ZTE Axon 10 Pro", compatible: true },
        { name: "ZTE Blade A32", compatible: false },
        { name: "ZTE Blade A31", compatible: false },
        { name: "ZTE Blade A30", compatible: false },
        { name: "nubia Red Magic 5G", compatible: false },
        { name: "nubia Red Magic 5G lite", compatible: false },
        { name: "nubia Z30 Pro", compatible: false },
        { name: "LG Wing", compatible: false },
        { name: "LG Velvet", compatible: false },
        { name: "LG V60 ThinQ", compatible: false },
        { name: "LG V50 ThinQ", compatible: true },
        { name: "LG V40 ThinQ", compatible: true },
        { name: "LG V30", compatible: true },
        { name: "LG G8 ThinQ", compatible: true },
        { name: "LG G7 ThinQ", compatible: true },
        { name: "LG G6", compatible: true },
        { name: "LG G5", compatible: true },
        { name: "Lenovo Legion Y70", compatible: false },
        { name: "Lenovo Legion Phone Duel 2 5G", compatible: false },
        { name: "Lenovo Tab P11 Pro", compatible: false },
        { name: "Lenovo Tab M10", compatible: true },
        { name: "Lenovo Tab M8", compatible: true },
        { name: "DOOGEE S89", compatible: false },
        { name: "DOOGEE S88Pro", compatible: false },
        { name: "DOOGEE S61", compatible: false },
        { name: "DOOGEE S40", compatible: true },
        { name: "Ulefone Armor 15", compatible: false },
        { name: "Ulefone Armor 12 5G", compatible: false },
        { name: "Ulefone Armor 9", compatible: true },
        { name: "Ulefone Armor 8", compatible: true },
        { name: "Ulefone Note 12", compatible: false },
        { name: "Смарт-часы Samsung Galaxy Watch6", compatible: false },
        { name: "Смарт-часы Samsung Galaxy Watch5", compatible: false },
        { name: "Смарт-часы Samsung Galaxy Watch4", compatible: false },
        { name: "Смарт-часы Samsung Galaxy Watch3 LTE", compatible: true },
        { name: "Apple Watch Series 9", compatible: false },
        { name: "Apple Watch Series 8", compatible: false },
        { name: "Apple Watch Series 7", compatible: false },
        { name: "Apple Watch Series 6", compatible: false },
        { name: "Apple Watch Series 5", compatible: false },
        { name: "Apple Watch Series 4", compatible: false },
        { name: "GPS-трекеры для автомобилей", compatible: true },
        { name: "GPS-трекеры для питомцев", compatible: true },
        { name: "Мобильные роутеры 4G", compatible: true },
        { name: "Камеры видеонаблюдения с SIM-картой", compatible: true },
        { name: "POS-терминалы", compatible: true },
        { name: "Охранные системы с GSM модулями", compatible: true },
      ],
    },
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
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-3xl font-bold text-dark mb-4">
                Поддерживаемые устройства
              </h1>
              <p className="text-gray-600 mb-6">
                Switch eSIM адаптеры совместимы с устройствами, которые
                изначально не имеют встроенной поддержки eSIM. Найдите своё
                устройство в списке:
              </p>

              <div className="relative max-w-md mx-auto mb-8">
                <Input
                  type="text"
                  placeholder="Поиск по названию устройства..."
                  className="pr-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Icon
                  name="Search"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Badge
                  variant={activeFilter === "all" ? "default" : "outline"}
                  className="cursor-pointer text-sm px-4 py-2"
                  onClick={() => setActiveFilter("all")}
                >
                  Все устройства ({totalCount})
                </Badge>
                <Badge
                  variant={
                    activeFilter === "compatible" ? "default" : "outline"
                  }
                  className="cursor-pointer text-sm px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 border-green-200 hover:border-green-300"
                  onClick={() => setActiveFilter("compatible")}
                >
                  <Icon name="Check" className="h-3.5 w-3.5 mr-1" />
                  Совместимые ({compatibleCount})
                </Badge>
                <Badge
                  variant={
                    activeFilter === "incompatible" ? "default" : "outline"
                  }
                  className="cursor-pointer text-sm px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 border-red-200 hover:border-red-300"
                  onClick={() => setActiveFilter("incompatible")}
                >
                  <Icon name="X" className="h-3.5 w-3.5 mr-1" />
                  Несовместимые ({incompatibleCount})
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                  <span>Совместимо с адаптером Switch eSIM</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                  <span>Несовместимо (уже имеет встроенный eSIM)</span>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <Tabs
                defaultValue={activeManufacturer}
                onValueChange={setActiveManufacturer}
                className="w-full"
              >
                <div className="relative mb-6">
                  <ScrollArea className="w-full">
                    <div className="p-1">
                      <TabsList className="inline-flex h-auto p-1 gap-2 w-auto min-w-full">
                        {deviceCategories.map((category) => (
                          <TabsTrigger
                            key={category.id}
                            value={category.id}
                            className="px-4 py-2 flex items-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                          >
                            <Icon name={category.icon} className="h-4 w-4" />
                            <span>{category.name}</span>
                            <Badge variant="secondary" className="ml-1 text-xs">
                              {getTotalCount(category, activeFilter)}
                            </Badge>
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>
                  </ScrollArea>
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
                </div>

                {deviceCategories.map((category) => {
                  const filteredDevices = filterDevices(category.devices);

                  return (
                    <TabsContent
                      key={category.id}
                      value={category.id}
                      className="mt-0 border rounded-lg p-6 bg-white animate-fade-in"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-primary/10 mr-3">
                          <Icon
                            name={category.icon}
                            className="h-5 w-5 text-primary"
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold">
                            {category.name}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {filteredDevices.length} из{" "}
                            {category.devices.length} устройств
                            {filteredDevices.length > 0 &&
                              activeFilter === "compatible" && (
                                <span className="ml-1">
                                  совместимы с адаптером
                                </span>
                              )}
                            {filteredDevices.length > 0 &&
                              activeFilter === "incompatible" && (
                                <span className="ml-1">
                                  несовместимы (имеют встроенный eSIM)
                                </span>
                              )}
                          </p>
                        </div>
                      </div>

                      {filteredDevices.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {filteredDevices.map((device, index) => (
                            <div
                              key={index}
                              className={`flex items-center p-3 rounded-md border ${
                                device.compatible
                                  ? "border-green-100 bg-green-50 hover:bg-green-100"
                                  : "border-red-100 bg-red-50 hover:bg-red-100"
                              } transition-colors`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full mr-3 ${
                                  device.compatible
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                }`}
                              ></div>
                              <span className="text-gray-800 text-sm">
                                {device.name}
                              </span>
                              {device.compatible ? (
                                <Badge
                                  variant="outline"
                                  className="ml-auto text-xs bg-green-100 border-green-200 text-green-800"
                                >
                                  Совместимо
                                </Badge>
                              ) : (
                                <Badge
                                  variant="outline"
                                  className="ml-auto text-xs bg-red-100 border-red-200 text-red-800"
                                >
                                  Не совместимо
                                </Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-10 bg-gray-50 rounded-lg">
                          <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon
                              name="Search"
                              className="h-6 w-6 text-gray-400"
                            />
                          </div>
                          <h3 className="text-lg font-medium text-gray-700 mb-2">
                            Устройства не найдены
                          </h3>
                          <p className="text-gray-500 mb-4 max-w-md mx-auto">
                            Для данного производителя не найдено устройств,
                            соответствующих выбранным критериям.
                          </p>
                          {(searchTerm || activeFilter !== "all") && (
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSearchTerm("");
                                setActiveFilter("all");
                              }}
                              className="gap-2"
                            >
                              <Icon name="RotateCcw" className="h-4 w-4" />
                              Сбросить фильтры
                            </Button>
                          )}
                        </div>
                      )}
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>

            <div className="max-w-3xl mx-auto mt-12">
              <Card className="border-primary/40 bg-gradient-to-br from-blue-50 to-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-xl text-primary">
                    Не нашли своё устройство в списке?
                  </CardTitle>
                  <CardDescription className="text-center">
                    Это далеко не полный список поддерживаемых устройств!
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">
                    Мы постоянно тестируем новые устройства и обновляем список.
                    Самый простой способ проверить совместимость вашего
                    устройства — скачать приложение Switch eSIM и запустить
                    автоматическую проверку.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="gap-2">
                      <Icon name="Smartphone" className="h-4 w-4" />
                      Скачать на Google Play
                    </Button>
                    <Button className="gap-2">
                      <Icon name="Apple" className="h-4 w-4" />
                      Скачать в App Store
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 bg-blue-50 p-6 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Icon name="HelpCircle" className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-dark mb-2">
                      Нужна помощь с вашим устройством?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Если вы не нашли ваше устройство в списке или не уверены в
                      совместимости, свяжитесь с нашей службой поддержки. Мы
                      поможем определить, подойдет ли адаптер Switch eSIM для
                      вашего устройства.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <Button asChild>
                        <a href="/contacts">Связаться с нами</a>
                      </Button>
                      <div className="text-gray-500">
                        или позвоните:{" "}
                        <span className="font-medium">+7 (800) 123-45-67</span>
                      </div>
                    </div>
                  </div>
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
