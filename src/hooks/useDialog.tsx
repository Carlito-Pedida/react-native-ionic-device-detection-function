import { Dialog } from "@capacitor/dialog";

const showAlert = async (title: string, message: string) => {
  await Dialog.alert({
    title,
    message
  });
};

export function useDialog() {
  return {
    showAlert
  };
}
