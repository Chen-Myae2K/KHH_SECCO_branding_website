import React from 'react'
import Container from '../../../components/Container'
import TextReveal from '../../../components/TextReveal'

const phrase1 = "Innovation, reliability, and expertise in handling are at the core of our process.";

const ProcessSection1 = () => {
  return (
    <section className=" ">
      <Container>
        <div className="font-instrument text-clean text-[45px] md:text-[90px] my-[30%] lg:my-[20%] font-medium leading-[1] ">
          <TextReveal phrase={phrase1} />
        </div>
      </Container>
    </section>
  )
}

export default ProcessSection1