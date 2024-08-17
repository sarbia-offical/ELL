/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 13:49:30
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-16 23:11:26
 */
"use client";
import styles from "./page.module.scss";
import { CourseCard } from "../../components";
import { Grid } from "@mui/material";
import { firstLesson } from "../owner/firstLesson";
import { secondLesson } from "../owner/secondLesson";
import { thirdLesson } from "../owner/thirdLesson";
import { ILessonInfo } from "../owner/enum";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const Dashboard = () => {
  const router = useRouter();
  const [list, setList] = useState<Array<ILessonInfo>>([
    firstLesson,
    secondLesson,
    thirdLesson,
  ]);
  return (
    <div className={styles["page-container"]}>
      <Grid container spacing={2}>
        {list.map((ele: ILessonInfo, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CourseCard
              info={ele}
              handleClick={(info: ILessonInfo) => {
                let pageList = [
                  "/lesson/firstLesson",
                  "/lesson/secondLesson",
                  "/lesson/thirdLesson",
                ];
                router.push(`${pageList[index]}`);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Dashboard;
