import { useId } from "react";

const InputField = ({ type = "text", label = "", ...props }) => {
  const id = useId();
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input type={type} id={id} className={styles.input} {...props} />
    </div>
  );
};

const styles = {
  field: ["flex", "flex-col", "gap-y-1.5"].join(" "),
  label: ["text-sm", "font-medium"].join(" "),
  input: ["w-full", "border", "rounded-md", "py-2.5", "px-4"].join(" "),
};

export default InputField;
