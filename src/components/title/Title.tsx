import React from 'react'

export default function Title() {
  return (
    <div className="h-[500px] flex flex-col text-center">
      <div className="flex flex-col flex-1 items-center justify-center ">
        <h1 className="text-5xl">
          안녕하세요 <b>안혜준</b>입니다.
        </h1>
        <div className="my-10">
          <p>
            <b>무에서 유를 창조하는 개발자</b>, 안혜준입니다.
          </p>
          <p>부산대학교 정보컴퓨터공학부에서 졸업을 앞둔 채, 백엔드 개발자로 활동하고 있습니다.</p>
          <p>웹 개발자로써 여러 프로젝트를 수행해 왔습니다. 더욱 다양한 경험을 통해 성장해나가고 싶습니다!</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button type="button" className="flex flex-col justify-center items-center">
          <p>더보기</p>
          <img src="/bottom-arrow.svg" alt="아래 화살표" />
        </button>
      </div>
    </div>
  )
}
