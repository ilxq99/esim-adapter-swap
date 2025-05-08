import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { DeviceCategory } from "@/types/devices";

interface ManufacturerTabsProps {
  deviceCategories: DeviceCategory[];
  activeManufacturer: string;
  setActiveManufacturer: (manufacturer: string) => void;
  getTotalCount: (
    category: DeviceCategory,
    filter: "all" | "compatible" | "incompatible",
  ) => number;
  activeFilter: "all" | "compatible" | "incompatible";
  children: React.ReactNode;
}

const ManufacturerTabs = ({
  deviceCategories,
  activeManufacturer,
  setActiveManufacturer,
  getTotalCount,
  activeFilter,
  children,
}: ManufacturerTabsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {/* Вертикальный список табов слева */}
      <div className="col-span-1">
        <div className="bg-white rounded-lg shadow-sm p-3 sticky top-24">
          <h3 className="font-medium text-gray-700 mb-3 px-2">Производители</h3>
          <ul className="space-y-1">
            {deviceCategories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setActiveManufacturer(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2 text-sm transition-colors 
                    ${
                      activeManufacturer === category.id
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <Icon name={category.icon} className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span
                    className={`ml-auto text-xs ${activeManufacturer === category.id ? "text-white/90" : "text-gray-500"}`}
                  >
                    ({getTotalCount(category, activeFilter)})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Содержимое активной вкладки */}
      <div className="col-span-1 md:col-span-3">
        {deviceCategories.map((category) => (
          <div
            key={category.id}
            className={category.id === activeManufacturer ? "block" : "hidden"}
          >
            <div className="flex items-center mb-4">
              <Icon
                name={category.icon}
                className="h-5 w-5 text-primary mr-2"
              />
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturerTabs;
