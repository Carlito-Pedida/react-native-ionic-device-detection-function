import { Device } from "@capacitor/device";

const getDeviceInfo = async () => {
  const info = await Device.getInfo();
  console.log(info);
  return info;
};

export function useDevice() {
  return {
    getDeviceInfo
  };
}
