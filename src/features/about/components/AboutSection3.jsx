import React from "react";
import Container from "../../../components/Container";
import fruitBox from "../../../images/fruitbasket.png";
import wineBox from "../../../images/winebox.png";
import { motion } from "framer-motion";

const AboutSection3 = () => {
  return (
    <section className="font-instrument tracking-tighter mt-32">
      <Container>
        {/* first section */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10  ">
          <div className="col-span-3  lg:col-span-2 my-auto">
            <p className="text-5xl lg:text-6xl tracking-tighter">
              <p className="text-clean ">EVERYLINES</p> TELLS <p>A STORY</p>
            </p>
          </div>
          <div className=" max-lg:hidden lg:col-span-1 mt-auto">
            <img src={wineBox} className="w-full " alt="" />
          </div>
          <div className="col-span-1 lg:hidden"></div>
          <div className="lg:hidden col-span-2">
            <img src={wineBox} className="w-full" alt="" />
          </div>
          <div className="col-span-2 max-lg:pb-5 lg:col-span-1 font-burma text-sm leading-loose lg:leading-loose lg:text-base">
            <p>
              ကျွန်တော်တို့ ဆက်(စ်)ကို (SECCO,HCSP Co.,Ltd) ဟာ
              (ရေငွေ့)စုပ်ယူပစ္စည်းများနှင့် အစိုဓါတ်(ရေငွေ့)ကြောင့် ထုတ်ကုန်
              ပစ္စည်းများပျက်စီးမှုများ မဖြစ်ရအောင် ကာကွယ်ပေးမှုများကို အစောဆုံး
              ဦးဆောင်ကာ ဝန်ဆောင်မှု ပေးခဲ့သော ကုမ္ပဏီ တစ်ခုဖြစ်ပါတယ်။
              ကျွန်တော်တို့ ဆက်(စ်)ကို (SECCO,HCSP Co.,Ltd) ကို ၂၀၁၂,အောက်တိုဘာ
              ၂၆ မှာ{" "}
              <span className="text-clean">
                ဗီယက်နမ်ံ,ဟိုချီမင်း မြို့တော်မှာ စတင်
              </span>
              တည်ထောင်ခဲ့ပါတယ်။
            </p>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <svg
            width="1236"
            height="2"
            viewBox="0 0 1236 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0 1H275H615.5H903H1223H1235.5"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* second section */}
        <div className="grid  grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 py-10">
          <div className="col-span-3  lg:col-span-2 my-auto">
            <p className="text-5xl lg:text-6xl tracking-tighter">
              DESIGNED
              <p className="text-clean ">WITH</p> PURPOSE
            </p>
          </div>
          <div className="col-span-3 md:col-span-1">
            <p className="font-burma leading-loose">
              အဆိုပါ အချိန်မှစပြီး ပညာရပ် ဆိုင်ရာ အထူးကျွမ်းကျင်သော ပါရဂူများ၊
              ကျွမ်းကျင်ပြည့်ဝသော ဝန်ထမ်းများဖြင့်ဗီယက်နမ်၊ နယ်သာလန်၊ အမေရိက၊
              အိန္ဒိယ တို့မှ ပညာရှင်၊ နည်းပညာ များနှင့် ပေါင်းစပ်ကာ စဉ်ဆက်မပြတ်
              လုပ်ငန်း ဖွံဖြိုးတိုးတက်ရေး ဆောင်ရွက်ခဲ့သည်မှာ{" "}
              <span className="text-clean">ယခုဆိုလျှင် (၈) နှစ်ရှိခဲ့ပြီ</span>{" "}
              ဖြစ်ပါသည်။ဆက်လက်၍လည်း ပိုမိုကောင်းမွန်သော နည်းပညာများအား
              လေ့လာစမ်းစစ်လျှက်ရှိပါသည်။
            </p>
          </div>
          <div className="col-span-1 "></div>
        </div>
        <div className="overflow-x-hidden ">
          <svg
            width="1236"
            height="2"
            viewBox="0 0 1236 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0 1H275H615.5H903H1223H1235.5"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* third section */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 max-lg:py-10  ">
          <div className="col-span-3  lg:col-span-2 my-auto">
            <p className="text-5xl lg:text-6xl tracking-tighter">
              <p className="text-clean ">100%</p> CUSTOMER <p>SATISFACTION</p>
            </p>
          </div>
          <div className="col-span-1 lg:hidden"></div>
          <div className="col-span-2  max-lg:pb-5 my-auto lg:col-span-1 font-instrument text-base leading-loose lg:leading-loose lg:text-xl">
            <p>
              We take pride in achieving 100% customer satisfaction by
              consistently{" "}
              <span className="text-clean">
                providing top-quality products,
              </span>{" "}
              reliable service, and solutions that meet your unique needs.
            </p>
          </div>
          <div className=" max-lg:hidden lg:col-span-1 mt-auto">
            <img src={fruitBox} className="w-full " alt="" />
          </div>
          <div className="lg:hidden col-span-2">
            <img src={fruitBox} className="w-full" alt="" />
          </div>
        </div>
        <div className="overflow-x-hidden">
          <svg
            width="1236"
            height="2"
            viewBox="0 0 1236 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0 1H275H615.5H903H1223H1235.5"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection3;
