function TransparentLoader() {
  return (
    <div className="absolute top-0 z-[999] flex h-full w-full items-center justify-center bg-[#fafafa] bg-opacity-70">
      <div className="main-loader"></div>
    </div>
  );
}

export default TransparentLoader;
