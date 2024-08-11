import styles from "./layout.module.scss";
import { Box } from "@mui/material";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.frame}>
      <div className={styles['gradient-1']}></div>
      <div className={styles['gradient-2']}></div>
      <div className={styles['inner-container']}>
        {children}
      </div>
    </div>
  );
}
