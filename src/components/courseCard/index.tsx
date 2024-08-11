/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-08-11 14:19:01
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-11 23:00:09
 */
import styles from "./index.module.scss";
import {
  Button,
  Card,
  CardActions,
  Typography,
  CardContent,
} from "@mui/material";
import { ILessonInfo } from "../../app/owner/enum";
import { useEffect } from "react";
import { SwaggyCard } from "../../components";
interface IProps {
  info: ILessonInfo;
  handleClick?: (info: ILessonInfo) => void
}

const CourseCard = (props: IProps) => {
  
  const handleClick = () => {
    props.handleClick && props.handleClick(props.info);
  };

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
            onClick={() => { handleClick() }}
          >
            learn more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default CourseCard;
