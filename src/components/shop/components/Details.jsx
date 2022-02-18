import Preview from "./Preview";
import MainDetails from "./MainDetails";
import OtherProducts from "./OtherProducts";

export default function Details({
  data,
  openPopup,
  offer,
  otherProducts: othP,
}) {
  return (
    <>
      <MainDetails details={data} openPopup={openPopup} offer={offer} />
      {data.status && data?.preview && <Preview prv={data} />}
      <OtherProducts data={othP} offer={offer} />
    </>
  );
}
