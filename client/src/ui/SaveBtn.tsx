function SaveBtn({
  disabled,
  onSave,
}: {
  disabled: boolean;
  onSave: () => void;
}) {
  return (
    <button
      className={`col-start-2 mr-24 mt-auto justify-self-end rounded-[0.8rem] bg-[#633cff] px-11 py-4 text-[1.6rem] font-semibold leading-[2.4rem] text-white tablet:col-start-1 mobile:mx-8 mobile:justify-self-stretch ${disabled ? "cursor-not-allowed bg-opacity-25" : ""}`}
      disabled={disabled}
      onClick={onSave}
    >
      Save
    </button>
  );
}

export default SaveBtn;
