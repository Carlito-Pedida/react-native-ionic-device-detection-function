import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Home.css";
import { useEffect, useState } from "react";
import { useDevice } from "../hooks/useDevice";
import { useDialog } from "../hooks/useDialog";

const Home: React.FC = () => {
  const { getDeviceInfo } = useDevice();

  const [deviceInfo, setDeviceInfo] = useState({
    model: "",
    operatingSystem: "",
    osVersion: ""
  });

  useEffect(() => {
    async function fetch() {
      const data = await getDeviceInfo();
      setDeviceInfo(data);
    }
    fetch();
  }, []);
  console.log(deviceInfo);

  const { showAlert } = useDialog();

  const alert = async () => {
    await showAlert(
      "Device Info",
      `Device: ${deviceInfo.model}\nOS: ${deviceInfo.operatingSystem}\nVersion: ${deviceInfo.osVersion}`
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Device Display Function</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={alert}>Get Device Info</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
