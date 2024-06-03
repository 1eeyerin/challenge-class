const Page = ({ children }) => {
  return <main className={styles.page}>{children}</main>;
};

const styles = {
  page: ["px-5", "py-10"].join(" "),
};

export default Page;
