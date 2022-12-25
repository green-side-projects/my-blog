import useSWR from "swr";

const response = (...args) => fetch(...args).then((res) => res.json());
const baseUrl = process.env.BASEURL;

export default function fetcher(endpoint: any) {
  const { data, error } = useSWR(`${baseUrl}${endpoint}`, response);
  if (error) return { error };
  if (!data) return { data: null };

  return { data };
}
