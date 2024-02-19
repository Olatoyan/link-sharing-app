function EmptyLinksBox() {
  return (
    <div className="flex flex-col items-center p-8">
      <img src="./illustration-empty.svg" alt="empty" />
      <h2 className="pb-[2.4rem] pt-16 text-[3.2rem] font-bold leading-[4.8rem] text-[#333] mobile:text-[2.4rem] mobile:leading-[3.6rem]">
        Let’s get you started
      </h2>
      <p className="max-w-[49rem] text-center text-[1.6rem] leading-[2.3rem] text-[#737373]">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
}

export default EmptyLinksBox;
