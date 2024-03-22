"use client";

const CommunityPage = () => {

  const redirectToDiscord = () => {
    window.location.href = 'https://discord.gg/UbR25Z2H';
  };

  return (
    <div className="p-6">
     
      <h1 className="text-2xl font-bold mb-4">Community Page</h1>
      <p className="mb-4">Join our community on Discord:</p>
      <button onClick={redirectToDiscord} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Join Discord
      </button>
    </div>
  );
};

export default CommunityPage;
