/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 13:49:30
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-24 16:07:56
 */
import styles from "./page.module.scss";
import { CourseCard } from "../../components";
import { Grid } from "@mui/material";
import { firstLesson } from "../owner/firstLesson";
import { secondLesson } from "../owner/secondLesson";
import { thirdLesson } from "../owner/thirdLesson";
import { fourthLesson } from "../owner/fourthLesson";
import { ILessonInfo } from "../owner/enum";
const Dashboard = () => {
  const list = [
    firstLesson,
    secondLesson,
    thirdLesson,
    fourthLesson
  ];
  return (
    <div className={styles["page-container"]}>
      <Grid container spacing={2}>
        {list.map((ele: ILessonInfo, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CourseCard
              info={ele}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Dashboard;
