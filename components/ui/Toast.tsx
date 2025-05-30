import clsx from "clsx";
import { motion } from "framer-motion";
import { toast as sonnerToast } from "sonner";
import { BellRing, XCircleIcon } from "lucide-react";

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  button: {
    label: string;
    onClick: () => void;
  };
}

function Toast(props: ToastProps) {
  const { title, description, id } = props;

  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [16, 0] }}
      transition={{ ease: "easeOut", duration: 0.24 }}
      className={clsx(
        "border-slate-200 flex w-full gap-2 rounded-xl border bg-white/60 p-4 text-[13px] backdrop-blur",
        "sm:w-[400px]",
        "dark:border-slate-800 dark:bg-slate-900/60"
      )}
    >
      <div className={clsx("text-violet-600", "dark:text-violet-400", " my-1")}>
        <BellRing className="w-5 h-5" />
      </div>
      <div className={clsx("flex flex-col gap-1")}>
        <div
          className={clsx("text-violet-600 font-bold", "dark:text-violet-400")}
        >
          {title}
        </div>
        <div className={clsx("text-slate-600", "dark:text-slate-400")}>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          aria-label="Close"
          className={clsx("flex items-center justify-center rounded-lg")}
          onClick={() => sonnerToast.dismiss(id)}
        >
          <XCircleIcon
            className={clsx("h-5 w-5 dark:text-slate-100 text-slate-800")}
          />
        </button>
      </div>
    </motion.div>
  );
}

export default function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      button={{
        label: toast.button.label,
        onClick: () => console.log("Button clicked"),
      }}
    />
  ));
}
