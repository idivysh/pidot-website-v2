"use client";

interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  enabled: boolean;
}

interface Props {
  jobs: Job[];
}

export default function CareerJobs({ jobs }: Props) {

  const activeJobs =
    jobs.filter((job) => job.enabled);

  if (activeJobs.length === 0) {
    return (
      <section className="pb-32">

        <div className="text-center">

          <h2
            className="
              text-5xl
              font-bold
              text-white
            "
          >
            We are not hiring now :(
          </h2>

          <p className="mt-5 text-zinc-400">
            Please check back later.
          </p>

        </div>

      </section>
    );
  }

  return (
    <section className="pb-32">
      <div
        className="
          mx-auto
          max-w-7xl
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {activeJobs.map((job) => (

          <div
            key={job.id}
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/5
              bg-[#0a0a0a]
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#f69507]/15
                to-transparent
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">

              <h3
                className="
                  text-2xl
                  font-semibold
                  text-white
                "
              >
                {job.title}
              </h3>

              <p
                className="
                  mt-2
                  text-[#f69507]
                "
              >
                {job.location}
              </p>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-zinc-400
                  mb-12
                "
              >
                {job.description}
              </p>

              <a
                href="/contact-us"
                className="
                  mt-8
                  rounded-3xl
                  bg-[#f69507]
                  text-sm
                  font-semibold
                  text-white
                  p-3
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >
                APPLY NOW
              </a>

            </div>
          </div>

        ))}
      </div>

    </section>
  );
}