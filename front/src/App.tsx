import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router";
import { AUTH_ABSOLUTE_PATH, AUTH_PATH, LOCAL_ABSOLUTE_PATH, LOCAL_PATH, QNA_DETALE_PATH, QNA_PATH, QNA_UPDATE_PATH, QNA_WRITE_PATH, RATIO_PARH, SERVICE_PATH, SNS_PATH } from "./constant";
import Authentication, { Sns } from "./views/Authentication";
import ServiceContainer from "./layouts/ServiceContainer";
import Local from "./views/service/Local";
import Ratio from "./views/service/Ratio";
import QnAList from "./views/service/qna/QnaList";
import QnAWrite from "./views/service/qna/QnaWrite";
import QnADetail from "./views/service/qna/QnaDetail";
import QnAUpdate from "./views/service/qna/QnaUpdate";
import NotFound from "./views/NotFound";
import { useCookies } from "react-cookie";

//                      component: root 경로 컴포넌트                       //
function Index() {

    //                      state                     //
    const [cookies] = useCookies();

    //                      function                     //
    const navigator = useNavigate();

    //                      effect                    //
    useEffect ( () => {
        const accessToken = cookies.accessToken;
        if(accessToken) navigator(LOCAL_ABSOLUTE_PATH);
        else navigator(AUTH_ABSOLUTE_PATH);
    }, []);

    //                      render                    //
    return <></>;
}

//                      component: Application 컴포넌트                       //
function App() {

    //                      render                    //
    return (
        <Routes>
            <Route index element={<Index />}/>
            <Route path={SNS_PATH} element={<Sns />} />
            <Route path={AUTH_PATH} element={<Authentication />} />
            <Route path={SERVICE_PATH} element={<ServiceContainer />} >
                <Route path={LOCAL_PATH} element={<Local />} />
                <Route path={RATIO_PARH} element={<Ratio />} />
                <Route path={QNA_PATH} >
                    <Route index element={<QnAList />} />
                    <Route path={QNA_WRITE_PATH} element={<QnAWrite />} />
                    <Route path={QNA_DETALE_PATH} element={<QnADetail />} />
                    <Route path={QNA_UPDATE_PATH} element={<QnAUpdate />} />
                </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;

// - authentication (로그인, 회원가입)
// - service
//     - local (지역 평균)
//     - ratio (비율 계산)
//     - qna (QnA 리스트)
//         - :boardNumber (QnA 상세보기)
//         - write (QnA 작성)
//         - update/:boardNumber (QnA 수정)
