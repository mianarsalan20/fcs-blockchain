import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const styles = {
  container: `h-full w-full flex bg-[#fff]`,
};

export default function start() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Main />
    </div>
  );
}
