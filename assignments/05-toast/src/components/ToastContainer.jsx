const ToastContainer = () => {
  return (
    <ul className={styles.toastContainer}>
      <li>
        <div className={styles.toast}>
          <p className={styles.toastTitle}>Scheduled: Catch up</p>
          <p className={styles.toastContent}>
            Friday, February 10, 2023 at 5:57 PM
          </p>
        </div>
      </li>
      <li>
        <div className={styles.toast}>
          <p className={styles.toastTitle}>Scheduled: Catch up</p>
          <p className={styles.toastContent}>
            Friday, February 10, 2023 at 5:57 PM
          </p>
        </div>
      </li>
      <li>
        <div className={styles.toast}>
          <p className={styles.toastTitle}>Scheduled: Catch up</p>
          <p className={styles.toastContent}>
            Friday, February 10, 2023 at 5:57 PM
          </p>
        </div>
      </li>
    </ul>
  );
};

const styles = {
  toastContainer: [
    "fixed",
    "flex",
    "flex-col",
    "items-end",
    "justify-end",
    "bottom-6",
    "right-6",
    "z-10",
    "gap-3",
  ].join(" "),
  toast: [
    "border",
    "flex",
    "flex-col",
    "justify-center",
    "bg-white",
    "p-6",
    "rounded-lg",
    "shadow-lg",
    "w-80",
    "transition",
    "duration-500",
  ].join(" "),
  toastTitle: ["text-sm", "font-semibold"].join(" "),
  toastContent: ["text-sm"].join(" "),
};

export default ToastContainer;
