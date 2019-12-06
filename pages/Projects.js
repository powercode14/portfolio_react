import React from 'react';

const Projects = React.forwardRef((props, ref) => {

    return (
        <section className="Project" ref={ref}>
            <div className="title">
                <p>Project</p>
            </div>
            <div className="desc">
                <div className="box">
                    <div className="image" style={{backgroundImage: `url(${props.prefix}/images/smartcar.gif); cursor: pointer;)`}}>
                    </div>
                    <div className="content">
                        <h1>라즈베리파이 스마트카 (졸업작품)</h1>
                        <h3>스마트카로 센서노드의 온도/습도/조도 데이터 수집 → 안드로이드 어플로 전송 및 데이터 확인</h3>
                        <h4>프로젝트 기간 : 2016.06 ~ 2016.11</h4>
                        <h4>사용기술 : Android, java, C</h4>
                        <a href="https://github.com/powercode14/smartcar" target="_blank">소스보기</a>
                    </div>
                </div>
                <div className="box">
                    <div className="image" style={{backgroundImage: `url(${props.prefix}/images/cafetale.png); cursor: pointer;)`}}>
                    </div>
                    <div className="content">
                        <h1>Café tale (포트폴리오용)</h1>
                        <h3>키워드로 카페검색 및 게시판을 이용할 수 있는 웹서비스.</h3>
                        <h4>프로젝트 기간 : 2016.12 ~ 2017.02</h4>
                        <h4>사용기술 : jsp, jQuery, Spring, Oracle, mybatis</h4>
                        <a href="https://github.com/powercode14/cafetale" target="_blank">소스보기</a>
                    </div>
                </div>
                <div className="box">
                    <div className="image" style={{backgroundImage: `url(${props.prefix}/images/smartcar.gif); cursor: pointer;)`}}>
                    </div>
                    <div className="content">
                        <h1>현대파워텍 유해물질 관리시스템 구축 (실무)</h1>
                        <h3>담당업무 : 솔루션 기능 추가 개발, 고객사 ERP 시스템 연동, 보안 취약점 조치 등</h3>
                        <h4>프로젝트 기간 : 2018.04 ~ 2018.08</h4>
                        <h4>사용기술 : Egov 3.7(Spring), jsp, jQuery, Polymer, Oracle</h4>
                        <a className="del">소스공개 불가</a>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Projects;