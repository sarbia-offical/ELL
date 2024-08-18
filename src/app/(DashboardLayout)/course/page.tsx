"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { firstLesson } from "../../owner/firstLesson";
import { secondLesson } from "../../owner/secondLesson";
import { thirdLesson } from "../../owner/thirdLesson";
import { fourthLesson } from "../../owner/fourthLesson";
import { IWordInfo } from "@/app/owner/enum";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  List,
  ListItem,
  IconButton,
  ListItemText,
} from "@mui/material";
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
      onClose={() => {
        props.handleClose && props.handleClose(false);
      }}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle>Phrase</DialogTitle>
      <DialogContent>
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          {props.detail.map((item: IPhraseItem, index: number) => (
            <ListItem
              key={index}
              disableGutters
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <ListItemText>
                { item.originText }
              </ListItemText>
              <ListItemText>
                { item.translate }
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.handleClose && props.handleClose(false);
          }}
        >
          Close
        </Button>
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
          props.handleOpen(phraseList);
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

const renderWaterFallItem = (
  wordList: Array<Array<IWordInfo>>,
  handleOpen: (phraseList: Array<IPhraseItem>) => void
) => {
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
  const lessons = [firstLesson, secondLesson, thirdLesson, fourthLesson];
  const [isClose, setIsClose] = useState<boolean>(false);
  const [phrases, setPhrases] = useState<Array<IPhraseItem>>([]);
  const handleOpen = (phraseList: Array<IPhraseItem>) => {
    setIsClose(true);
    setPhrases(phraseList);
  };

  const TestWaterFall = WaterFall(
    renderWaterFallItem(lessons[id] ? lessons[id].wordList : [], handleOpen)
  );
  return (
    <div className={styles["main"]}>
      <TestWaterFall />
      <RenderPhraseListDialog
        open={isClose}
        handleClose={() => {
          setIsClose(false);
        }}
        detail={phrases}
      />
    </div>
  );
};
export default Course;
