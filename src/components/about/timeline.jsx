import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import TimelineDot from "@mui/lab/TimelineDot";
import CakeIcon from "@mui/icons-material/Cake";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";

export default function TimeLine() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <CakeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            1997. 07 .15
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <DriveFileRenameOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right" sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            2013. 03
          </Typography>
          <Typography>안산 동산고 입학</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <DriveFileRenameOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right" sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            2013. 03
          </Typography>
          <Typography>안산 동산고 졸업</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            2016. 03
          </Typography>
          <Typography>이화여자대학교 입학</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" sx={{ py: "12px", px: 2 }}>
          <Typography variant="h5" component="span">
            2022. 08
          </Typography>
          <Typography>이화여자대학교 졸업</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
