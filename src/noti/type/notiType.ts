export type NotiType = {
  open: boolean;
  text: string;
  timeout: number;
  position?:
    | ""
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};
