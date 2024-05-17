import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import { Card, CardBody } from "@nextui-org/react";
import styled from "styled-components";
import DrawSvg from "./DrawSvg";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const CicloScroll = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => {};
  }, []);

  return (
    <Section id="roadmap">
      <h1 className="text-3xl text-center">Siga os itens na timeline</h1>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <NextUICard title="1. Escolher um assunto" content="Uma aspiração, questão, sonho... justificando essa escolha." addToRefs={addToRefs} />
          <NextUICard title="2. Fazer um diagnóstico da situação." content="Como você avalia o andamento das coisas?" addToRefs={addToRefs} />
          <NextUICard title="3. Elaborar um Plano de Ação" content="Isto é, propor atividades e estratégias para atingir os objetivos, incluindo a atribuição de funções, o cronograma e um plano orçamentário." addToRefs={addToRefs} />
          <NextUICard title="4. Executar as atividades" content="Que foram planejadas com registros e monitoramento para correção de rota ao longo do processo." addToRefs={addToRefs} />
          <NextUICard title="5. Avaliar" content="Ao fim do percurso, em que medida se chegou ao resultado esperado." addToRefs={addToRefs} />
          <NextUICard title="6. Planejar..." content="...a celebração das conquistas e relatar essa experiência a colegas e demais interessados." addToRefs={addToRefs} />
        </Items>
      </Container>
    </Section>
  );
};

const NextUICard = ({ title, content, addToRefs }) => {
    const controls = useAnimation();
  
    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
  
    return (
      <Item ref={addToRefs}>
        <ItemContainer>
          <AnimatePresence>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
              onHoverStart={() => controls.start({ scale: 1.1 })}
              onHoverEnd={() => controls.start({ scale: 1 })}
              
            >
              <Card hoverable>
                <CardBody>
                  <SubTitle>{title}</SubTitle>
                  <Text>{content}</Text>
                </CardBody>
              </Card>
            </motion.div>
          </AnimatePresence>
        </ItemContainer>
      </Item>
    );
  };

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #FFF;
  position: relative;
`;



const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Items = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 25px 0 25px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 25px 0 25px;
        
        text-align: left;

        p {
          border-radius: 0 25px 0 25px;
        }
      }
    }
    p {
      border-radius: 25px 0 25px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 25px 0 25px;
      text-align: left;
    }

    p {
      border-radius: 0 25px 0 25px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  
  @media (max-width: 24em) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  

  @media (max-width: 48em) {
    width: 70%;
  }
`;


const SubTitle = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: red;

  @media (max-width: 40em) {
    font-size: 18px;
  }
`;

const Text = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin: 0.5rem 0rem;
  
  color: #000;

  @media (max-width: 40em) {
    font-size: 16px;
  }
`;

export default CicloScroll;