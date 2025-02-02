import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./../../components/Header/HeaderContainer";
import SideMenuContainer from "./../../components/SideMenu/SideMenuContainer";
import CalendarContainer from "./../../components/Calendar/CalendarContainer";
import BoardContainer from "./../../components/Board/BoardContainer";
import WritingContainer from "./../../components/Writing/WritingContainer";
import MyPageContainer from "../../components/MyPage/MyPageContainer";
import EmployeesContainer from "../../components/Employees/EmployeesContainer";
import ApprForm from "./../../components/Board/components/ApprForm";
import AddApprForm from "../../components/Board/components/AddApprForm";
import classes from "../styles/MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <div className={classes.container}>
        <SideMenuContainer />
        <Routes>
          <Route path="/mypage/*" element={<MyPageContainer />} />
          <Route path="/calendar/*" element={<CalendarContainer />} />
          <Route
            path="/businesslog/*"
            element={<BoardContainer menuType="업무일지" />}
          />
          <Route path="/appr/*" element={<BoardContainer menuType="결재" />} />
          <Route path="/appr/form" element={<ApprForm />} />
          <Route path="/appr/form/add" element={<AddApprForm />} />
          <Route
            path="businesslog/writing/*"
            element={<WritingContainer menuType="업무일지" />}
          />
          <Route
            path="appr/writing/*"
            element={<WritingContainer menuType="결재" />}
          />
          <Route path="/employees/*" element={<EmployeesContainer />} />
        </Routes>
      </div>
    </>
  );
};

export default MainPage;
