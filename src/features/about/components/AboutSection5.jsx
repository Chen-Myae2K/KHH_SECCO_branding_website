import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import ScrollBaseAnimation from "../../../components/TextMarquee";

const AboutSection5 = () => {
  return (
    <section>
      <div className="bg-clean py-10 px-5 md:p-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.6288548397733!2d96.21273417439302!3d16.894244616825798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1935c4ef69a27%3A0x42592728ecedd5c2!2sK.H.H%20Company%20Limited!5e0!3m2!1sen!2ssg!4v1740564769587!5m2!1sen!2ssg"
          className="font-instrument w-full  aspect-[3/2] "
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="md:text-xl text-lg text-white pt-7 font-instrument">
          Head Office : KHH Company Limited, No. 1251/1253 , Min Tet street,
          East Dagon Town Ship , Yangon, Myanmar.
        </p>
        <p className=" text-base  font-burma text-white pt-7 md:text-lg">
          လိပ်စာ : အမှတ် ၁၂၅၁/၁၂၅၃၊ မင်းတက်လမ်း၊ (၇) ရပ်ကွက်၊ အရှေ့ဒဂုံ
          မြို့နယ်၊ ရန်ကုန်မြို့ မြန်မာနိုင်ငံ
        </p>
      </div>

      <div className="bg-white">
        <ScrollBaseAnimation
          //   delay={500}
          scrollDependent={true}
          clasname="md:text-4xl text-xl py-4 text-black font-instrument"
        >
          <span className="px-5">
            Visit Our Office
            <HiArrowDownRight className="inline-block" />{" "}
          </span>
          <span className="px-5">
            Visit Our Office
            <HiArrowDownRight className="inline-block" />{" "}
          </span>
          <span className="px-5">
            Visit Our Office
            <HiArrowDownRight className="inline-block" />
          </span>
          <span className="ps-5">
            Visit Our Office
            <HiArrowDownRight className="inline-block" />
          </span>
        </ScrollBaseAnimation>
      </div>
    </section>
  );
};

export default AboutSection5;
