export interface CareerJob {
  id: string;

  title: string;

  location: string;

  description: string;

  enabled: boolean;

  createdAt: string;
}

const STORAGE_KEY = "pidot_careers";

export function getJobs(): CareerJob[] {
  if (typeof window === "undefined") {
    return [];
  }

  const jobs =
    localStorage.getItem(STORAGE_KEY);

  return jobs
    ? JSON.parse(jobs)
    : [];
}

export function saveJob(
  job: CareerJob
) {
  const jobs = getJobs();

  jobs.unshift(job);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(jobs)
  );
}

export function updateJob(
  id: string,
  updates: Partial<CareerJob>
) {
  const jobs = getJobs();

  const updated = jobs.map(
    (job) =>
      job.id === id
        ? {
            ...job,
            ...updates,
          }
        : job
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

export function deleteJob(
  id: string
) {
  const jobs = getJobs();

  const updated = jobs.filter(
    (job) =>
      job.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}