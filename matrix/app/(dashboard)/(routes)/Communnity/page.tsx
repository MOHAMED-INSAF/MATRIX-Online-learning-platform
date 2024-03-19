import { auth } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Community = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { userId } = auth();

    if (!userId) {
      router.push("/");
    } else {
      setUser(userId);
    }
  }, []);

  if (!user) {
    return null; // or loading indicator
  }

  // This function could handle redirection to your Discord community
  const redirectToDiscord = () => {
    // Replace 'YOUR_DISCORD_LINK' with your actual Discord invite link
    window.location.href = 'YOUR_DISCORD_LINK';
  };

  return (
    <div className="p-6">
      {/* Render any additional content here */}
      <h1 className="text-2xl font-bold mb-4">Community Page</h1>
      <p className="mb-4">Join our community on Discord:</p>
      <button onClick={redirectToDiscord} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Join Discord
      </button>
    </div>
  );
};

export default Community;
