const Hero = ({ heading, content }: { heading: string; content: string }) => {
  return (
    <div className="w-full flex flex-col gap-y-3.5 items-center justify-center">
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <p className="text-gray-600 max-w-150 text-center">{content}</p>
    </div>
  );
};

export default Hero;
