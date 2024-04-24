export default function Banner({ title, img }: any) {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 bg-stone-900 flex items-center">
        <h4 className="lg:ml-[6rem] text-3xl lg:text-4xl ml-[3rem]">{title}</h4>
      </div>
      <img src={img} alt="image" />
    </div>
  );
}
