
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { deviceCategories } from "@/data/devicesList";
import { filterDevices, getTotalCount, calculateTotalCount, calculateCompatibleCount } from "@/utils/deviceUtils";

// Импортируем компоненты
import PageHeader from "@/components/devices/PageHeader";
import DeviceSearchFilter from "@/components/devices/DeviceSearchFilter";
import ManufacturerTabs from "@/components/devices/ManufacturerTabs";
import DeviceList from "@/components/devices/DeviceList";
import DeviceInfoSection from "@/components/devices/DeviceInfoSection";

const Devices = () => {
  // Прокручиваем страницу наверх при монтировании
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Состояния
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "all" | "compatible" | "incompatible"
  >("all");
  const [activeManufacturer, setActiveManufacturer] = useState(
    deviceCategories[0].id,
  );

  // Рассчитываем общие количества
  const totalCount = calculateTotalCount(deviceCategories);
  const compatibleCount = calculateCompatibleCount(deviceCategories);

  // Получаем текущую категорию устройств
  const currentCategory = deviceCategories.find(
    category => category.id === activeManufacturer
  );

  // Фильтруем устройства для текущей выбранной категории
  const filteredDevices = currentCategory 
    ? filterDevices(currentCategory.devices, searchTerm, activeFilter) 
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader />
            
            <div className="max-w-6xl mx-auto">
              <DeviceSearchFilter 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                compatibleCount={compatibleCount}
                totalCount={totalCount}
              />
              
              <ManufacturerTabs 
                deviceCategories={deviceCategories}
                activeManufacturer={activeManufacturer}
                setActiveManufacturer={setActiveManufacturer}
                getTotalCount={getTotalCount}
                activeFilter={activeFilter}
              >
                <DeviceList filteredDevices={filteredDevices} />
              </ManufacturerTabs>
              
              <DeviceInfoSection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Devices;
