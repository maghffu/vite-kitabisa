import useCampaigns from "../hooks/campaign";
import CampaignItem from "./CampaignItem";
function CampaignList() {
  const { campaigns, isLoading, isError } = useCampaigns()
  return (
    <div className="container">
      <section>
        <header className="header">
          <div>
            <h3>Kitabisa</h3>
          </div>
          <div className="ml-auto">
            <select>
              <option>Sorting By Donation Goal</option>
            </select>
          </div>
        </header>
        <article className="d-flex flex-wrap justify-safe">
          {campaigns.map((campaign) => (<CampaignItem key={campaign.id} campaign={campaign} ></CampaignItem>))}
        </article>
      </section>
    </div>
  );
}

export default CampaignList;
