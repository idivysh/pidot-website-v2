import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28 mt-10">
      <div className="relative mx-auto max-w-5xl pb-14">
        
        <div className="relative mx-auto px-6">
          <div className="flex flex-col items-center">
        
        {/* HERO IMAGE */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 -translate-y-10 mt">
          <div className="relative h-28 w-28 md:h-40 md:w-40 lg:h-[16rem] lg:w-[16rem] xl:h-[14rem] xl:w-[14rem]">
            <Image
              src="/blog/pidot_3D.png"
              alt="Blog Hero"
              fill
              priority
              className="object-contain"
              
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="relative z-10 pt-15 text-center md:pt-20 lg:pt-37">
          <h1
            className="
              bg-[linear-gradient(183deg,rgba(236,241,253,0)_13.9%,rgba(236,241,253,0.3)_121.71%),linear-gradient(0deg,#ffffff,#2E3038)]
              bg-clip-text
              text-[60px]
              leading-none
              font-bold
              tracking-tight
              text-transparent
              md:text-[80px]
              lg:text-[96px]
            "
          >
            Blog
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              bg-[linear-gradient(183deg,rgba(236,241,253,0)_13.9%,rgba(236,241,253,0.3)_121.71%),linear-gradient(0deg,#ffffff,#ffffff)]
              bg-clip-text
              text-xl
              font-medium
              leading-snug
              tracking-tight
              text-transparent
              md:text-2xl
              lg:text-3xl
              xl:text-[24px]
            "
          >
            Learn more about your company, get product updates,
            and share your startup journey with the world.
          </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}