"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { firstLesson } from "../../owner/firstLesson";
import { secondLesson } from "../../owner/secondLesson";
import { thirdLesson } from "../../owner/thirdLesson";
import { IWordInfo } from "@/app/owner/enum";
import { Card, CardContent, Typography, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { IPhraseItem, WaterFall, WaterFallItem } from "@/components";
import { Translate } from "@mui/icons-material";
import styles from "./page.module.scss";
interface IRenderPhraseList {
  open: boolean;
  handleClose: (open?: boolean) => void;
  detail: Array<IPhraseItem>;
}
const RenderPhraseListDialog = (props: IRenderPhraseList) => {
  return (
    <Dialog
      open={props.open}
      keepMounted
      onClose={() => { props.handleClose && props.handleClose(false) }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { props.handleClose && props.handleClose(false) }}>Disagree</Button>
        <Button onClick={() => { props.handleClose && props.handleClose(false) }}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

interface IRenderWordDetail {
  detail: IWordInfo;
  handleOpen: (phraseList: Array<IPhraseItem>) => void;
}

const RenderWordDetail = (props: IRenderWordDetail) => {
  const { word, phraseList } = props.detail;
  return (
    <Card
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <CardContent
        component="div"
        onClick={() => {
          props.handleOpen(phraseList)
        }}
      >
        <div className={styles["detail-content-body"]}>
          <Typography gutterBottom variant="h5" component="div">
            <div className={styles["detail-content-body-originalWord"]}>
              {word.originalWord}
            </div>
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
            <div className={styles["detail-content-body-phoneticSymbol"]}>
              {word.phoneticSymbol}
            </div>
          </Typography>
          <Typography
            variant="body1"
            component="div"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Translate />
            <div className={styles["detail-content-body-translate"]}>
              {word.translate}
            </div>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

const renderWaterFallItem = (wordList: Array<Array<IWordInfo>>, handleOpen: (phraseList: Array<IPhraseItem>) => void) => {
  const Component = () => {
    const words: Array<IWordInfo> = wordList.flat();
    return (
      <>
        {!!words.length &&
          words.map((item: IWordInfo, index: number) => {
            const { originalWord, phoneticSymbol, translate } = item.word;
            const wordLength = String(
              originalWord + phoneticSymbol + translate
            ).length;
            return (
              <WaterFallItem
                key={index}
                component={
                  <RenderWordDetail detail={item} handleOpen={handleOpen} />
                }
              />
            );
          })}
      </>
    );
  };
  return Component;
};

const Course = () => {
  const searchParams = useSearchParams();
  const id: number = (searchParams.get("id") as unknown as number) || 0;
  const lessons = [firstLesson, secondLesson, thirdLesson];
  const [isClose, setIsClose] = useState<boolean>(false);

  const handleOpen = (phraseList: Array<IPhraseItem>) => {
    console.log('phraseList', phraseList);
    setIsClose(true);
  }

  const TestWaterFall = WaterFall(
    renderWaterFallItem(lessons[id] ? lessons[id].wordList : [], handleOpen)
  );
  return (
    <div className={styles["main"]}>
      <TestWaterFall />
      <RenderPhraseListDialog open={isClose} handleClose={() => { setIsClose(false) }} detail={[]}/>
    </div>
  );
};
export default Course;
