interface LoaderProps {
  active: boolean;
}

const Loader: React.FC<LoaderProps> = ({ active }) => {
  return (
    <>
      <div className={`fixed top-0 left-0 w-full bg-transparent h-full z-50 ${active ? '' : 'hidden'}`}>
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
          <div className="h-full w-40 bg-gray-500 animate-loader"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes loader {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-loader {
          animation: loader 2s infinite;
        }
      `}</style>
    </>
  );
};

export default Loader;
