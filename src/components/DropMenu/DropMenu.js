import React from "react";
import "./DropMenu.css";

import { IoIosArrowForward } from "react-icons/io";

const DropMenu = () => {
  return (
    <div>
      <div className="gnb-container">
        <div className="gnb-wrap">
          <div className="gnb__menu__items">
            <div className="grid-item">
              <a href="/">
                <h2>영업</h2>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
              <a href="/">
                <h3>기업영업</h3>
              </a>
              <a href="/">
                <h3>외부영업</h3>
              </a>
              <a href="/">
                <h3>영업 관리자</h3>
              </a>
              <a href="/">
                <h3>기술영업</h3>
              </a>
              <a href="/">
                <h3>주요고객사 담당자</h3>
              </a>
              <a href="/">
                <h3>솔루션 컨설턴트</h3>
              </a>
              <a href="/">
                <h3>해외영업</h3>
              </a>
              <a href="/">
                <h3>더보기</h3>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
            </div>
            <div className="grid-item">
              <a href="/">
                <h2>미디어</h2>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
              <a href="/">
                <h3>콘텐츠 크리에이터</h3>
              </a>
              <a href="/">
                <h3>PD</h3>
              </a>
              <a href="/">
                <h3>영상 편집가</h3>
              </a>
              <a href="/">
                <h3>에디터</h3>
              </a>
              <a href="/">
                <h3>비디오 제작</h3>
              </a>
              <a href="/">
                <h3>작가</h3>
              </a>
              <a href="/">
                <h3>출판 기획자</h3>
              </a>
              <a href="/">
                <h3>더보기</h3>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
            </div>
            <div className="grid-item">
              <a href="/">
                <h2>인사</h2>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
              <a href="/">
                <h3>인사담당</h3>
              </a>
              <a href="/">
                <h3>리크루터</h3>
              </a>
              <a href="/">
                <h3>조직문화</h3>
              </a>
              <a href="/">
                <h3>평가 보상</h3>
              </a>
              <a href="/">
                <h3>헤드헌터</h3>
              </a>
              <a href="/">
                <h3>HRBP</h3>
              </a>
              <a href="/">
                <h3>HRD</h3>
              </a>
              <a href="/">
                <h3>더보기</h3>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
            </div>
            <div className="grid-item">
              <a href="/">
                <h2>게임제작</h2>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
              <a href="/">
                <h3>게임 기획자</h3>
              </a>
              <a href="/">
                <h3>게임 그래픽 디자이너</h3>
              </a>
              <a href="/">
                <h3>모바일 게임 개발자</h3>
              </a>
              <a href="/">
                <h3>게임 아티스트</h3>
              </a>
              <a href="/">
                <h3>게임 클라이언트 개발자</h3>
              </a>
              <a href="/">
                <h3>게임 서버 개발자</h3>
              </a>
              <a href="/">
                <h3>유니티 개발자</h3>
              </a>
              <a href="/">
                <h3>더보기</h3>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
            </div>
            <div className="grid-item">
              <a href="/">
                <h2>엔지니어링 설계</h2>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
              <a href="/">
                <h3>전자 엔지니어</h3>
              </a>
              <a href="/">
                <h3>기계 엔지니어</h3>
              </a>
              <a href="/">
                <h3>전기 엔지니어</h3>
              </a>
              <a href="/">
                <h3>전기기계 공학자</h3>
              </a>
              <a href="/">
                <h3>로봇 자동화</h3>
              </a>
              <a href="/">
                <h3>QA 엔지니어</h3>
              </a>
              <a href="/">
                <h3>제품 엔지니어</h3>
              </a>
              <a href="/">
                <h3>더보기</h3>
                <IoIosArrowForward className="gnb__menu__more" />
              </a>
            </div>
            <div className="grid-item-bigcate">
              <a href="/">
                <h2>금융</h2>
                <IoIosArrowForward className="gnb__menu__more__big" />
              </a>
              <a href="/">
                <h2>제조</h2>
                <IoIosArrowForward className="gnb__menu__more__big" />
              </a>
              <a href="/">
                <h2>물류·무역</h2>
                <IoIosArrowForward className="gnb__menu__more__big" />
              </a>
              <a href="/">
                <h2>의료·제약·바이오</h2>
                <IoIosArrowForward className="gnb__menu__more__big" />
              </a>
              <a href="/">
                <h2>교육</h2>
                <IoIosArrowForward className="gnb__menu__more__big" />
              </a>
              <a href="/">
                <h2>법률·법집행기관</h2>
                <IoIosArrowForward className="gnb__menu__more__big" />
              </a>
              <a href="/">
                <h2>식·음료</h2>
                <IoIosArrowForward className="gnb__menu__more__big" />
              </a>
              <a href="/">
                <h2>건설·시설</h2>
                <IoIosArrowForward className="gnb__menu__more__big" />
              </a>
              <a href="/">
                <h2>공공·복지</h2>
                <IoIosArrowForward className="gnb__menu__more__big" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
