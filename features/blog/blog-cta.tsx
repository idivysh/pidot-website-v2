import Image from "next/image";
import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl">
        <div className="py-16 text-center">

          {/* Icon */}
          <div className="relative mb-8 flex justify-center">
            <Image
              src="/blog/pidot_3D_1.png"
              alt="Blog CTA icon"
              width={300}
              height={300}
              className="
                w-auto
                h-auto
                max-h-[320px]
                object-contain
              "
            />

          </div>

          {/* Heading */}
          <h2
            className="
              mb-3
              text-4xl
              font-bold
              tracking-[-0.03em]
              text-white
              md:mb-6
              md:text-5xl
              lg:text-6xl
            "
          >
            Stay updated
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mb-8
              max-w-2xl
              text-lg
              tracking-tight
              text-zinc-400
              lg:text-xl
            "
          >
            Keep up with the latest news and updates
            from Cluely.
          </p>

          {/* Buttons */}
          <div
            className="
              flex flex-col items-center justify-center gap-4
              sm:flex-row
            "
          >

            {/* Download */}
            <Link
              href="/download"
              className="
                rounded-xl
                bg-[#f69507]
                px-8 py-4
                font-semibold
                text-white
                transition hover:bg-[#ffad33]
              "
            >
              Download
            </Link>

            {/* Follow */}
            <Link
              href="https://x.com/cluely"
              target="_blank"
              className="
                rounded-xl
                border border-zinc-700
                bg-zinc-900
                px-8 py-4
                font-semibold
                text-white
                transition hover:bg-zinc-800
              "
            >
              Follow us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}