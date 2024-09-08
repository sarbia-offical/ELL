"use client"
import styles from "./layout.module.scss";
import { IconButton, Button } from "@mui/material";
import { RotateLeft, FormatAlignRight } from "@mui/icons-material";
import { useRouter } from "next/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  }
  return (
    <div className={`${styles.frame} course-container`}>
      <div className={styles["gradient-1"]}></div>
      <div className={styles["gradient-2"]}></div>
      <div className={styles["sidebar"]}>
      <IconButton aria-label="delete" size="small" onClick={goBack}>
        <RotateLeft/>
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <FormatAlignRight />
      </IconButton>
      </div>
      <div className={styles["inner-container"]}>{children}</div>
    </div>
  );
}
