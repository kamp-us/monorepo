import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import type { FC } from "react";

import "./AlertDialog.css";

const Content: FC = ({ children, ...props }) => {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="AlertDialogOverlay" />
      <AlertDialogPrimitive.Content className="AlertDialogContent" {...props}>
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
};

function x<TProps>(Component: FC<TProps>, className: string) {
  return (props: TProps) => <Component className={className} {...props} />;
}

// Exports
export const AlertDialogBase = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContent = Content;
export const AlertDialogTitle = x(AlertDialogPrimitive.Title, "AlertDialogTitle");
export const AlertDialogDescription = x(AlertDialogPrimitive.Description, "AlertDialogDescription");
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
