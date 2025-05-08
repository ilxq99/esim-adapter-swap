
import { Device, DeviceCategory } from "@/types/devices";

// Фильтруем устройства по поисковому запросу и совместимости
export const filterDevices = (
  devices: Device[], 
  searchTerm: string, 
  activeFilter: "all" | "compatible" | "incompatible"
): Device[] => {
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
export const getTotalCount = (
  category: DeviceCategory,
  filter: "all" | "compatible" | "incompatible"
): number => {
  if (filter === "all") return category.devices.length;
  return category.devices.filter((d) =>
    filter === "compatible" ? d.compatible : !d.compatible
  ).length;
};

// Подсчитываем общее количество устройств
export const calculateTotalCount = (deviceCategories: DeviceCategory[]): number => {
  return deviceCategories.reduce(
    (acc, category) => acc + category.devices.length,
    0
  );
};

// Подсчитываем количество совместимых устройств
export const calculateCompatibleCount = (deviceCategories: DeviceCategory[]): number => {
  return deviceCategories
    .flatMap((category) => category.devices)
    .filter((device) => device.compatible).length;
};

// Подсчитываем количество несовместимых устройств
export const calculateIncompatibleCount = (deviceCategories: DeviceCategory[]): number => {
  return deviceCategories
    .flatMap((category) => category.devices)
    .filter((device) => !device.compatible).length;
};
