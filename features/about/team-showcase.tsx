import Image from "next/image";
import {
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const teamMembers = [
  {
    name: "Lisa Thompson",
    role: "Senior Designer",
    image: "/team/team1.jpg",
  },
  {
    name: "Laura Davis",
    role: "Lead Developer",
    image: "/team/team2.jpg",
  },
  {
    name: "Sam White",
    role: "Marketing Lead",
    image: "/team/team3.jpg",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    image: "/team/team4.jpg",
  },
  {
    name: "Noah Williams",
    role: "UI Designer",
    image: "/team/team5.jpg",
  },
  {
    name: "David Miller",
    role: "Software Engineer",
    image: "/team/team6.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Branding",
    image: "/team/team7.jpg",
  },
  {
    name: "Julia Bernard",
    role: "Sales Lead",
    image: "/team/team8.jpg",
  },
];

export default function TeamShowcase() {
  return (
    <section className="relative overflow-hidden bg-black py-32">

      {/* TOP SECTION */}
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-6xl font-bold text-white">
          Meet our Team
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          A diverse team of passionate professionals with unique
          skills driving innovation and excellence in every project.
        </p>

      </div>

      {/* IMAGE COLLAGE */}
      <div className="relative mx-auto mt-20 max-w-5xl">

        <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">

            {/* Column 1 */}
            <div className="flex flex-col gap-8">
                <Image
                src="/team/team1.jpg"
                alt=""
                width={220}
                height={340}
                className="
                    h-[340px]
                    w-[220px]
                    rounded-[120px]
                    object-cover
                "
                />

                <Image
                src="/team/team5.jpg"
                alt=""
                width={220}
                height={220}
                className="
                    h-[220px]
                    w-[220px]
                    rounded-[100px]
                    object-cover
                    mx-auto
                "
                />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
                <Image
                src="/team/team2.jpg"
                alt=""
                width={220}
                height={220}
                className="
                    h-[220px]
                    w-[220px]
                    rounded-[100px]
                    object-cover
                    mx-auto
                "
                />

                <Image
                src="/team/team6.jpg"
                alt=""
                width={220}
                height={340}
                className="
                    h-[340px]
                    w-[220px]
                    rounded-[120px]
                    object-cover
                "
                />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
                <Image
                src="/team/team3.jpg"
                alt=""
                width={220}
                height={340}
                className="
                    h-[340px]
                    w-[220px]
                    rounded-[120px]
                    object-cover
                "
                />

                <Image
                src="/team/team7.jpg"
                alt=""
                width={220}
                height={220}
                className="
                    h-[220px]
                    w-[220px]
                    rounded-[100px]
                    object-cover
                    mx-auto
                "
                />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-8">
                <Image
                src="/team/team4.jpg"
                alt=""
                width={220}
                height={220}
                className="
                    h-[220px]
                    w-[220px]
                    rounded-[100px]
                    object-cover
                    mx-auto
                "
                />

                <Image
                src="/team/team8.jpg"
                alt=""
                width={220}
                height={340}
                className="
                    h-[340px]
                    w-[220px]
                    rounded-[120px]
                    object-cover
                "
                />
            </div>

            </div>

        {/* GLOW STRIP */}
        <div
          className="
            absolute
            left-1/2
            bottom-0
            h-16
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-[#f69507]
            via-pink-500
            to-cyan-400
            opacity-30
            blur-[90px]
          "
        />

      </div>

      {/* TEAM SECTION */}
      <div className="mx-auto mt-40 max-w-6xl px-6">

        <h2 className="text-center text-5xl font-bold text-white">
          The Pi Dot Team
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-zinc-400">
          A talented group of professionals dedicated to creating
          impactful products and exceptional experiences.
        </p>

        {/* TEAM MEMBERS */}
        <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">

        {teamMembers.map((member) => (

            <div key={member.name}>

            {/* HEADER */}
            <div className="text-left">

            <Image
                src={member.image}
                alt={member.name}
                width={70}
                height={70}
                className="
                h-[70px]
                w-[70px]
                rounded-full
                object-cover
                "
            />

            <h3
                className="
                mt-4
                text-lg
                font-semibold
                text-white
                "
            >
                {member.name}
            </h3>

            <p
                className="
                mt-1
                text-sm
                font-medium
                text-[#f69507]
                "
            >
                {member.role}
            </p>

            </div>

            {/* DESCRIPTION */}
            <p
                className="
                mt-5
                text-sm
                leading-7
                text-zinc-500
                "
            >
                Passionate about innovation and
                delivering meaningful experiences
                through technology and creativity.
            </p>

            {/* SOCIALS */}
            <div className="mt-5 flex gap-4">

                <Instagram
                size={16}
                className="
                    cursor-pointer
                    text-zinc-600
                    transition
                    hover:text-[#f69507]
                "
                />

                <Linkedin
                size={16}
                className="
                    cursor-pointer
                    text-zinc-600
                    transition
                    hover:text-[#f69507]
                "
                />

                <Twitter
                size={16}
                className="
                    cursor-pointer
                    text-zinc-600
                    transition
                    hover:text-[#f69507]
                "
                />

            </div>

            </div>

        ))}

        </div>

      </div>

    </section>
  );
}