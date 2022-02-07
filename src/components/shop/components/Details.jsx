import MainDetails from "./MainDetails";
import OtherProducts from "./OtherProducts";
import Preview from "./Preview";

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
      {data.status && <OtherProducts data={othP} offer={offer} />}
    </>
  );
}
