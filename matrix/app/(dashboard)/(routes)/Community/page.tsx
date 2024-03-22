"use client";

const CommunityPage = () => {

  const redirectToDiscord = () => {
    window.location.href = 'https://discord.gg/UbR25Z2H';
  };

  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 p-6">
      <div className="flex flex-col space-y-6 max-w-md mx-auto">
        <div className="text-secondary">
          <div className="mb-7">
            <h4 className="font-semibold text-4xl mb-4">Discord community</h4>
            <p className="text-neutral-100">Join the Discord community to chat with other members, ask questions, and more.</p>
          </div>
          <a target="_blank" href="https://discord.gg/5hjgQ5JR">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
                <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
              </svg>
              Join Discord
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
