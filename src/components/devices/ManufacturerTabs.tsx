
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { DeviceCategory } from "@/types/devices";

interface ManufacturerTabsProps {
  deviceCategories: DeviceCategory[];
  activeManufacturer: string;
  setActiveManufacturer: (manufacturer: string) => void;
  getTotalCount: (category: DeviceCategory, filter: "all" | "compatible" | "incompatible") => number;
  activeFilter: "all" | "compatible" | "incompatible";
  children: React.ReactNode;
}

const ManufacturerTabs = ({
  deviceCategories,
  activeManufacturer,
  setActiveManufacturer,
  getTotalCount,
  activeFilter,
  children
}: ManufacturerTabsProps) => {
  return (
    <Tabs 
      defaultValue={activeManufacturer} 
      value={activeManufacturer}
      onValueChange={setActiveManufacturer}
      className="mb-8"
    >
      <TabsList className="flex overflow-x-auto pb-1 mb-4">
        {deviceCategories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="px-4 py-2 flex items-center gap-2"
          >
            <Icon name={category.icon} className="h-4 w-4" />
            <span>{category.name}</span>
            <span className="text-xs text-gray-500">
              ({getTotalCount(category, activeFilter)})
            </span>
          </TabsTrigger>
        ))}
      </TabsList>

      {deviceCategories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          {children}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ManufacturerTabs;
