import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

function useCampaigns() {
  const { data, error } = useSWR('campaign.json', fetcher)
  return {
    campaigns: data ? data.data : [],
    isLoading: !error && !data,
    isError: error
  }
}
export default useCampaigns