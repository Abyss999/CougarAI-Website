import Image from 'next/image'
import { satoshiMedium, satoshiBold } from '@/util/localFonts';
import InfoCardTray from '@/components/about/InfoCardTray';

export default function Membership() {

    const membershipInformation: string[][] = [
      ['Membership', 'Gain access to exclusive member-only AI workshops, research projects, and rewards through our CougarAI membership program.', ""],
    ]

    return (
      // Deal with this code on the next sprint, too much to include in this sprint.
      <main className="bg-cai-400 min-h-screen flex flex-col lg:grid lg:grid-cols-2">
        <section className="md:ml-24 lg:ml-32 lg:mt-2 md:max-lg:w-3/5">
          <div className={satoshiBold.className + " flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-24 text-white text-center md:text-start px-5 md:px-0 md:items-start pt-20 md:pt-64 lg:pt-36 mb-3.5"}>
            <div>
              <h1 className="pb-2 md:pb-5 align-bottom text-4xl md:text-5xl lg:text-6xl">Membership</h1>
              <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal"}>
                <span className="">{'Gain'}</span>{' access to exclusive AI workshops, research projects, and rewards through a CougarAI membership.'}
              </p>
              <p className={satoshiMedium.className + " pb-2 md:pb-6 align-bottom text-base md:text-2xl lg:text-3xl leading-normal"}>
                {'Through our membership program, you will have more opportunities to explore AI & Data Science in a hands-on environment.'}
              </p>
            </div>
            {/* <InfoCardTray cardTitles={['$10 per semester', '$15 per year']}></InfoCardTray> */}
          </div>
        </section>

        <Image src="/Icons/binary.svg" width="0" height="0" className="lg:absolute lg:right-0 select-none overflow-hidden object-contain lg:object-fill w-full h-[50%] mt-36 lg:w-1/2 lg:h-[47%] md:h-[70%] lg:pl-72 md:top-0 md:mt-[50rem] lg:mt-[30.5rem]" alt="Binary Pattern"></Image>
      </main>
    )
  }
  