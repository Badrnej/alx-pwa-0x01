const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 animate-pulse">
          Loading...
        </h1>
        <p className="text-lg text-gray-300">Please wait, we&apos;re getting next set of movies ready for you.</p>
      </div>
    </div>
  );
};

export default Loading;
