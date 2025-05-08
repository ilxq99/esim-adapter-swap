
export interface Device {
  name: string;
  compatible: boolean;
}

export interface DeviceCategory {
  id: string;
  name: string;
  icon: string;
  devices: Device[];
}
