
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DeviceSearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: "all" | "compatible" | "incompatible";
  setActiveFilter: (filter: "all" | "compatible" | "incompatible") => void;
  compatibleCount: number;
  totalCount: number;
}

const DeviceSearchFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  activeFilter, 
  setActiveFilter,
  compatibleCount,
  totalCount
}: DeviceSearchFilterProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-grow">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Поиск по названию устройства..."
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="flex-1 md:flex-none"
          >
            Все ({totalCount})
          </Button>
          <Button
            variant={activeFilter === "compatible" ? "default" : "outline"}
            onClick={() => setActiveFilter("compatible")}
            className="flex-1 md:flex-none"
          >
            Совместимые ({compatibleCount})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeviceSearchFilter;
