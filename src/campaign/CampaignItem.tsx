function CampaignItem({ campaign }) {
  return (
    <div className="campaign-item" >
      <img src={campaign.image} style={{ maxWidth: "100%" }} alt="" />
      <p><b> {campaign.title}</b></p>

      <div className="d-flex">
        <div>
          Terkumpul
          <p className="my-0"><b>Rp {campaign.donation_received}</b></p>
        </div>
        <div className="ml-auto text-right" >
          Sisa Hari
          <p className="my-0"><b>{campaign.expired} Hari</b></p>
        </div>
      </div>
    </div>
  )
}

export default CampaignItem