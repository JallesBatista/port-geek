import Typical from "react-typical";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import {
  AsideSpace,
  DescriptionSection,
  HomeSection,
  TypingEffect,
  AnimatedLogo,
  Border,
  BtnDiv,
  TransitionAbout,
  AboutSection,
  CompanionSection,
  AboutDescriptionSpace,
  SecondBorder,
  TransitionHome,
  GroupMemberSpace,
  ShowCase,
} from "./styles";
import { useContext } from "react";
import HeaderSpace from "../../components/Header/Header";
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";
import lucasMitoriImg from "../../assets/members/lucasmitori.png";
import cesarRafaelImg from "../../assets/members/cesarrafael.jpg";
import lucasCruzImg from "../../assets/members/lucascruz.jpg";
import henriqueSadimImg from "../../assets/members/henriqueSadim.jpeg";
import AriImg from "../../assets/members/Ari.jpg";
import jallesImg from "../../assets/members/jalles.jpg";
import { DashboardContext } from "../../contexts/DashboardContext";
import { Navigate } from "react-router-dom";
import { ButtonComponent } from "../../components/Buttons";
import { iRegisterData } from "../../services/postRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas/userSchema";
import { UserContext } from "../../contexts/userContext";
import { type } from "os";
import {
  MemberCard,
  MemberCardImg,
  MemberCardInfo,
} from "../../components/MemberCard/styles";

const LandingPage = () => {
  const { t } = useTranslation();
  const { token } = useContext(DashboardContext);
  const { setEmailDefault, handleRegister, setIsOpenModalRegister } =
    useContext(UserContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      {token ? (
        <Navigate to={"dashboard"} />
      ) : (
        <>
          <HeaderSpace />
          <HomeSection id="section-home">
            <DescriptionSection>
              <h1>
                Imagine being able to show you with 100% of your potential and
                skills, Port Geek can offer this to you!
              </h1>
              <ShowCase></ShowCase>
              <BtnDiv>
                <form onSubmit={handleSubmit(handleRegister)}>
                  <input
                    placeholder="Enter your email"
                    {...register("email")}
                    onChange={(e) => setEmailDefault(e.target.value)}
                  />
                  <ButtonComponent
                    type="submit"
                    backgroundcolor={"var(--color-grey-3)"}
                    lettercolor={"var(--color-white-mode)"}
                    onClick={(event) => {
                      event.preventDefault();
                      setIsOpenModalRegister(true);
                      reset();
                    }}
                  >
                    Sign up
                  </ButtonComponent>
                </form>
              </BtnDiv>
            </DescriptionSection>
            <Border />
            <TransitionAbout>
              <AnchorLink href="#section-about" offset={100}>
                <IconContext.Provider
                  value={{
                    color: "var(--color-grey-3)",
                    size: "7em",
                  }}
                >
                  <IoIosArrowDown />
                </IconContext.Provider>
              </AnchorLink>
            </TransitionAbout>
            <AsideSpace>
              <h1>A new way to show who you are.</h1>
              <TypingEffect>
                <h2>
                  {t("To make you a")}{" "}
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Developer",
                      5000,
                      "Programmer",
                      5000,
                      "Freelancer",
                      5000,
                    ]}
                  />
                </h2>
              </TypingEffect>
              <AnimatedLogo />
            </AsideSpace>
          </HomeSection>
          <AboutSection id="section-about">
            <AboutDescriptionSpace>
              <h1>About us</h1>
              <p>
                We are students from Kenzie Academy Brazil and we would like to
                present our final Front-end project for you all. Developed by
                our team, our project was inspired by a deeply necessity of
                helping our developer community into creating their first
                portolio in hands with the objetive to get their first job.
                Below we present our team:
              </p>
            </AboutDescriptionSpace>
            <SecondBorder />
            <TransitionHome>
              <AnchorLink href="#section-home" offset={100}>
                <IconContext.Provider
                  value={{
                    color: "var(--color-grey-3)",
                    size: "7em",
                  }}
                >
                  <IoIosArrowUp />
                </IconContext.Provider>
              </AnchorLink>
            </TransitionHome>
            <CompanionSection>
              <h1>Group Members</h1>
              <GroupMemberSpace>
                <MemberCard>
                  <MemberCardImg href="https://www.linkedin.com/in/cesarrafaeldevstudent">
                    <img src={cesarRafaelImg} alt="Cesar Rafael" />
                  </MemberCardImg>
                  <MemberCardInfo>
                    <h1>César Rafael - Front-end Designer</h1>
                    <h2>Product Owner - PO</h2>
                  </MemberCardInfo>
                </MemberCard>
                <MemberCard>
                  <MemberCardImg href="http://www.linkedin.com/in/arimoncaojr">
                    <img src={AriImg} alt="Ariosvaldo Rodrigues" />
                  </MemberCardImg>
                  <MemberCardInfo>
                    <h1>Lucas Mitori - Front-end Designer</h1>
                    <h2>Scrum Master - SM</h2>
                  </MemberCardInfo>
                </MemberCard>
                <MemberCard>
                  <MemberCardImg href="https://www.linkedin.com/in/henrique-sandim-14992023a/">
                    <img src={henriqueSadimImg} alt="Henrique Sadim" />
                  </MemberCardImg>
                  <MemberCardInfo>
                    <h1>Henrique Sadim - Front-end Designer</h1>
                    <h2>Tech Leader - TL</h2>
                  </MemberCardInfo>
                </MemberCard>
                <MemberCard>
                  <MemberCardImg href="https://www.linkedin.com/in/lucas-okumura-2446a478/">
                    <img src={lucasMitoriImg} alt="Lucas Mitori" />
                  </MemberCardImg>
                  <MemberCardInfo>
                    <h1>Lucas Mitori - Front-end Designer</h1>
                    <h2>Quality Assurance - QA</h2>
                  </MemberCardInfo>
                </MemberCard>
                <MemberCard>
                  <MemberCardImg href="http://www.linkedin.com/in/lucas-cruz-de-souza-0b73b6205">
                    <img src={lucasCruzImg} alt="Lucas Cruz" />
                  </MemberCardImg>
                  <MemberCardInfo>
                    <h1>Lucas Cruz - Front-end Designer</h1>
                    <h2>Quality Assurance - QA</h2>
                  </MemberCardInfo>
                </MemberCard>
                <MemberCard>
                  <MemberCardImg href="https://www.linkedin.com/in/jallesbatista/">
                    <img src={jallesImg} alt="Jalles Batista" />
                  </MemberCardImg>
                  <MemberCardInfo>
                    <h1>Jalles Batista - Front-end Designer</h1>
                    <h2>Quality Assurance - QA</h2>
                  </MemberCardInfo>
                </MemberCard>
              </GroupMemberSpace>
            </CompanionSection>
          </AboutSection>
        </>
      )}
    </>
  );
};

export default LandingPage;
