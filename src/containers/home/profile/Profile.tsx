import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog, faCakeCandles, faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Block from '@/containers/home/Block'
import ProfileContent from '@/containers/home/profile/ProfileContent'

const paragraphDescriptionClassName = 'text-black/60 pl-1'

function Paragraph({
  content,
  description,
  children,
}: {
  content: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <div>
      <p>{content}</p>
      <p className={paragraphDescriptionClassName}>{description}</p>
      {children}
    </div>
  )
}

function ContactElement({ content, icon, link }: { content: string; icon: IconProp; link?: string }) {
  return (
    <div className="flex">
      {link ? (
        <a href={link} className="flex gap-1 items-center group">
          <FontAwesomeIcon icon={icon} width="20" />
          <span className="underline-animate">{content}</span>
        </a>
      ) : (
        <p className="flex gap-1 items-center">
          <FontAwesomeIcon icon={icon} width="20" />
          <span>{content}</span>
        </p>
      )}
    </div>
  )
}

export default function Profile() {
  const data = useStaticQuery(graphql`
    query Profile {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 400)
        }
      }
    }
  `)

  const profileImage = getImage(data.file)

  return (
    <Block title="Profile">
      <div className="grid grid-cols-2 gap-y-10 max-lg:grid-cols-1 px-10 max-md:px-0">
        <div className="flex max-sm:flex-col-reverse">
          <ProfileContent title="Contact">
            <ContactElement content="안혜준(Hyejun An)" icon={faUser} />
            <ContactElement content="2000.01.29." icon={faCakeCandles} />
            <ContactElement content="jagaldol.dev@gmail.com" icon={faEnvelope} link="mailto:jagaldol.dev@gmail.com" />
            <ContactElement content="@jagadol" icon={faGithub} link="https://github.com/jagaldol/" />
            <ContactElement content="자갈돌의 devLog" icon={faBlog} link="https://blog.jagaldol.com/" />
          </ProfileContent>
          {profileImage ? (
            <div className="flex items-center justify-center">
              <GatsbyImage className="ml-[10%] max-sm:mx-[10%] rounded-xl" alt="프로필 사진" image={profileImage} />
            </div>
          ) : null}
        </div>

        <ProfileContent title="Education">
          <Paragraph content="부산대학교 정보컴퓨터공학부" description="2018.03. ~ 2024.08.">
            <p className={paragraphDescriptionClassName}>학점: 4.00 / 4.5</p>
          </Paragraph>

          <Paragraph content="카카오 테크 캠퍼스 1기" description="2023.04. ~ 2023.11." />
        </ProfileContent>

        <ProfileContent title="Awards">
          <Paragraph content="카카오 테크 캠퍼스 신규 서비스 개발 프로젝트 - 대상" description="2023.11.17." />
          <Paragraph content="제 1회 PNU Coding Challenge - 우수상" description="2023.12.20." />
          <Paragraph content="2023년 TOPCIT 성적우수자 - 한국정보산업연합회장상" description="2023.12.22." />
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
