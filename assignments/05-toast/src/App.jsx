import InputField from "./components/InputField";

const App = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>토스트 컨트롤러</h1>
        <div className={styles.inputFields}>
          <InputField
            label="제목 (필수)"
            defaultValue="Scheduled: Catch up"
            required
          />
          <InputField
            label="내용 (필수)"
            defaultValue="Friday, February 10, 2023 at 5:57 PM"
            required
          />
          <InputField
            label="노출 시간(ms) (선택)"
            defaultValue="2000"
            type="number"
          />
        </div>
        <button className={styles.button}>토스트 띄우기</button>
      </form>
    </div>
  );
};

const styles = {
  container: [
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "h-screen",
    "w-screen",
  ].join(" "),
  form: ["w-80", "flex", "flex-col", "gap-6"].join(" "),
  title: ["text-2xl", "font-semibold", "text-center"].join(" "),
  button: [
    "bg-black",
    "text-white",
    "py-3",
    "font-medium",
    "rounded-md",
    "text-[15px]",
    "hover:bg-black/80",
    "transition",
  ].join(" "),
  inputFields: ["flex", "flex-col", "gap-4"].join(" "),
};

export default App;
