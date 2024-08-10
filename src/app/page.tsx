/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2024-07-30 00:22:58
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-08-10 23:35:56
 */
"use client";
import { Button, Grid, CardContent, } from "@mui/material";
import Link  from 'next/link';
import { useState } from "react";
import { uniqueId } from "lodash";

export default function Home() {
  const [
    routeList,
    setRouteList
  ] = useState([
    {
      id: uniqueId(),
      title: "Lesson One",
      href: "/lesson/firstLesson",
    },
    {
      id: uniqueId(),
      title: "Lesson Two",
      href: "/lesson/secondLesson",
    },
    {
      id: uniqueId(),
      title: "Lesson Three",
      href: "/lesson/thirdLesson",
    },
  ]);
  return (
    <Grid container spacing={3}>
      {
        routeList.map(ele => (
          <Grid item xs={12} md={4} lg={4} key={ele.id}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              component={Link}
              href={ele.href}
              style={{ textTransform: 'none' }}
            >
              {ele.title}
            </Button>
          </Grid>
        ))
      }
    </Grid>
  );
}
