import useSWR from "swr";

const response = (...args: [string, RequestInit?]) =>
  fetch(...args).then((res) => res.json());
const baseUrl = process.env.BASEURL;

export default function Fetcher(endpoint: any) {
  const { data, error } = useSWR(`${baseUrl}${endpoint}`, response);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
