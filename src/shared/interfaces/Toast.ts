import { ToastType } from "../types/ToastType";

export interface Toast {
  id: number;
  type: ToastType;
  title: string;
  message: string;
}
