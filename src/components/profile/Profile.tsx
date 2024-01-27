import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Block from '@/components/block/Block'
import ProfileContent from '@/components/profile/ProfileContent'

function Paragraph({ content, description }: { content: string; description: string }) {
  return (
    <div>
      <p>{content}</p>
      <p className="text-black/60 pl-1">{description}</p>
    </div>
  )
}

export default function Profile() {
  return (
    <Block title="Profile">
      <div className="grid grid-cols-2 gap-y-10 max-lg:grid-cols-1 px-10 max-md:px-0">
        <div className="flex max-sm:flex-col-reverse">
          <ProfileContent title="Contact">
            <a href="tel:010-5439-7218" className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faMobileScreenButton} />
              <p>010-5439-7218</p>
            </a>
            <a href="mailto:jagaldol.dev@gmail.com" className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>jagaldol.dev@gmail.com</p>
            </a>
            <a href="https://github.com/jagaldol/" className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faGithub} />
              <p>@jagadol</p>
            </a>
            <a href="https://blog.jagaldol.com/" className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faBlog} />
              <p>자갈돌의 devLog</p>
            </a>
          </ProfileContent>
          <img src="/profile.png" alt="안혜준 사진" className="w-[30%] mx-[10%] pt-5 max-sm:pt-0 max-sm:w-[80%]" />
        </div>

        <ProfileContent title="Education">
          <Paragraph content="부산대학교 정보컴퓨터공학부" description="2018.03. ~ 2024.02." />
          <Paragraph content="카카오 테크 캠퍼스 1기" description="2023.04. ~ 2023.11." />
        </ProfileContent>

        <ProfileContent title="Awards">
          <Paragraph content="카카오 테크 캠퍼스 신규 서비스 개발 프로젝트 - 대상" description="2023.11.17." />
          <Paragraph content="2023년 TOPCIT 성적우수자 - 한국정보산업연합회장상" description="2023.12.22." />
          <Paragraph content="제 1회 PNU Coding Challenge - 우수상" description="" />
        </ProfileContent>

        <ProfileContent title="Certificate">
          <Paragraph content="TOPCIT - 수준 3(608점)" description="Test Of Practical Competency in IT" />
          <Paragraph content="PCCP - Python level 3(700점)" description="Programmers Certified Coding Professional" />
          <Paragraph content="TOEIC - 830점" description="Test Of English for International Communication" />
        </ProfileContent>
      </div>
    </Block>
  )
}
