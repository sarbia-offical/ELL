/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 14:19:01
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-24 16:22:41
 */
import Link from "next/link"
import {
  Button,
  Card,
  CardActions,
  Typography,
  CardContent,
} from "@mui/material";
import { ILessonInfo } from "../../app/owner/enum";
import { SwaggyCard } from "../../components";
import styles from "./index.module.scss";
interface IProps {
  info: ILessonInfo;
  index: number
}

const CourseCard = (props: IProps) => {
  return (
    <div className={`${styles["course-card"]}`}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ textAlign: "center" }}
            color="text.secondary"
          >
            {props?.info?.title}
          </Typography>
        </CardContent>
        <CardContent>
          <SwaggyCard info={props?.info?.swaggy} />
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
          >
            <Link href={`/course/${props.index}`}>
              learn more
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default CourseCard;
