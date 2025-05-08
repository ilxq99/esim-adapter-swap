
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Device } from "@/types/devices";

interface DeviceListProps {
  filteredDevices: Device[];
}

const DeviceList = ({ filteredDevices }: DeviceListProps) => {
  return (
    <ScrollArea className="h-[500px] rounded-md border">
      <div className="p-4">
        {filteredDevices.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Устройства не найдены</p>
            <p className="text-sm text-gray-400 mt-2">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDevices.map((device, index) => (
              <Card key={`${device.name}-${index}`} className="h-full">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{device.name}</p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${
                      device.compatible 
                        ? "border-green-200 bg-green-50 text-green-700" 
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {device.compatible ? "Совместимо" : "Несовместимо"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default DeviceList;
