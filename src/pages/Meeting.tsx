import {
  EuiBadge,
  EuiBasicTable,
  EuiButtonIcon,
  EuiCopy,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
} from "@elastic/eui";

import { getDocs, query, where } from "firebase/firestore";
import moment from 'moment/moment.js';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";

import { meetingsRef } from "../utils/firebaseConfig";
import { MeetingType } from "../utils/types";
// import EditFlyout from "../components/EditFlyout";

export default function Meetings() {
  useAuth();
  // const userInfo = useAppSelector((zoom) => zoom.auth.userInfo);
  // const [meetings, setMeetings] = useState<Array<MeetingType>>([]);
  // //useEffect(() => {
  // if(userInfo) 
  const [meetings, setMeetings] = useState<any>([]);
  const userInfo = useAppSelector((zoom) => zoom.auth.userInfo);
  
  useEffect(() => {
    if(userInfo){
      const getUserMeetings = async () => { 
        const firestoreQuery = query(meetingsRef);
        const fetchedMeetings = await getDocs(firestoreQuery);
        if(fetchedMeetings.docs.length) {
          const mymeeting: Array<MeetingType> = [];
          fetchedMeetings.forEach((meeting) => {
            const data = meeting.data() as MeetingType;
            if(data.createdBy===userInfo?.uid) mymeeting.push(data);
            else if (data.meetingType==="anyone-can-join") mymeeting.push(data);
            else {
              const index = data.invitedUsers.findIndex(user=>user===userInfo.uid);
              if(index!==-1){
                mymeeting.push(data);

              }
            }

          });
          setMeetings(mymeeting);
        }
      };
      getUserMeetings()
    }
},[userInfo]);

  // const [showEditFlyout, setShowEditFlyout] = useState(false);
  // const [editMeeting, setEditMeeting] = useState<MeetingType>();

  // const openEditFlyout = (meeting: MeetingType) => {
  //   setShowEditFlyout(true);
  //   setEditMeeting(meeting);
  // };
  // const closeEditFlyout = (dataChaged = false) => {
  //   setShowEditFlyout(false);
  //   setEditMeeting(undefined);
  //   if (dataChaged) getMyMeetings();

  // };



  const meetingColumns = [
    {
      field: "meetingName",
      name: "Meeting Name",
    },
    {
      field: "meetingType",
      name: "Meeting Type",
    },
    {
      field: "meetingDate",
      name: "Meeting Date",
    },
    {
      field: "",
      name: "Status",

      render: (meeting: MeetingType) => {
        if (meeting.status) {
          if (meeting.meetingDate === moment().format("L")) {
            return (
              <EuiBadge color="success">
                <Link
                  to={`/join/${meeting.meetingId}`}
                  style={{ color: "black" }}
                >
                  Join Now
                </Link>
              </EuiBadge>
            );
          } else if (
            moment(meeting.meetingDate).isBefore(moment().format("L"))
          ) {
            return <EuiBadge color="default">Ended</EuiBadge>;
          } else if (moment(meeting.meetingDate).isAfter()) {
            return <EuiBadge color="primary">Upcoming</EuiBadge>;
          }
        } else return <EuiBadge color="danger">Cancelled</EuiBadge>;
      },
    },


  
    {
      field: "meetingId",
      name: "Copy Link",
      width: "10%",
      render: (meetingId: string) => {
        return (
          <EuiCopy
            textToCopy={`${process.env.REACT_APP_HOST}/join/${meetingId}`}
          >
            {(copy: any) => (
              <EuiButtonIcon
                iconType="copy"
                onClick={copy}
                display="base"
                aria-label="meeting-copy"
              />
            )}
          </EuiCopy>
        );
      },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <EuiFlexGroup justifyContent="center" style={{ margin: "1rem" }}>
        <EuiFlexItem>
          <EuiPanel>
            <EuiBasicTable items={meetings} columns={meetingColumns} />
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
      {/* {
        showEditFlyout && 
          <EditFlyout closeFlyout={closeEditFlyout} meetings={editMeeting!} />

        

      } */}
    </div>
  );
}
