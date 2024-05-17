// import CampaignCard from "@/components/campaign/CampaignCard";
import Layout from "@/components/dashboard/Layout";
import { CampaignForm } from "@/components/campaign/CampaignForm";
// import { useCampaignsQuery } from "@/types/graphql";

export default function Campaign() {
  // const { data, loading } = useCampaignsQuery();

  // const campaigns = data?.campaigns;

  //if (loading) return <p>Chargement...</p>;

  return (
    <Layout title="Campaign">
      <div className="flex justify-end mt-4 mb-6 mr-1 md:mr-4">
        <CampaignForm
          isNewCampaign={true}
          buttonText={"Create new campaign"}
          buttonVariant={"edit"}
          title={"Create new campaign"}
        />
      </div>
      {/* {campaigns !== undefined && campaigns!.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center xl:mx-24">
          {campaigns!.map((data) => (
            <CampaignCard key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <p className="text-2xl text-center text-white mt-12 md:text-6xl">
          No campaign yet
        </p>
      )} */}
    </Layout>
  );
}
