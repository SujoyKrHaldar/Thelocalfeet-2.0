import Script from "next/script";

function Test() {
  return (
    <>
      <div
        data-WRID="WRID-165280704944073278"
        data-widgetType="productBanner"
        data-class="affiliateAdsByFlipkart"
        height="240px"
        width="120px"
      ></div>
      <Script
        async
        src="//affiliate.flipkart.com/affiliate/widgets/FKAffiliateWidgets.js"
      ></Script>
    </>
  );
}

export default Test;
