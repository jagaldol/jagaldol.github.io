import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Block from '@/components/block/Block'
import ProfileContent from '@/components/profile/ProfileContent'

export default function Profile() {
  return (
    <Block title="Profile">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 px-10 max-md:px-0">
        <div className="flex max-sm:flex-col-reverse">
          <ProfileContent title="Contact">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faMobileScreenButton} />
              <p>010-5439-7218</p>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>jagaldol.dev@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faGithub} />
              <p>@jagadol</p>
            </div>
          </ProfileContent>
          <img src="/profile.png" alt="안혜준 사진" className="w-[30%] mx-[10%] pt-5 max-sm:pt-0 max-sm:w-[80%]" />
        </div>

        <ProfileContent title="Education">
          <p>부산대학교 정보컴퓨터공학부(2018/03 ~ 2024/02)</p>
          <p>️카카오 테크 캠퍼스 1기(2023/04 ~ 2023/11)</p>
        </ProfileContent>
        <ProfileContent title="Awards">
          <p>
            카카오 테크 캠퍼스 1기 신규 서비스 개발 프로젝트 - <b>대상</b>(2023/11)
          </p>
          <p>
            2023년 TOPCIT 성적우수자 - <b>한국정보산업연합회장상</b>(2023/12)
          </p>
          <p>
            제 1회 PNU Coding Challenge - <b>우수상</b>
          </p>
        </ProfileContent>

        <ProfileContent title="Certificate">
          <p>
            <b>TOPCIT</b>(Test Of Practical Competency in IT) - <b>수준 3(608점)</b>
          </p>
          <p>
            <b>PCCP</b>(Programmers Certified Coding Professional) <b>Python - level 3(700점)</b>
          </p>
          <p>
            <b>TOEIC</b>(Test Of English for International Communication) - <b>830점</b>
          </p>
        </ProfileContent>
      </div>
    </Block>
  )
}
