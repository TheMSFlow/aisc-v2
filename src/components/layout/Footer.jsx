export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src="/aisc.svg" alt="AISC" className="h-7 w-auto" />
            <p className="font-ptsans text-xl tracking-wider opacity-60 mb-4">
              AI STAKEHOLDER CHALLENGE
            </p>
          </div>
          <p className="text-xs text-lilac/50 text-center">
            © {new Date().getFullYear()} Michael Steve Clarity Studio. <br />All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
