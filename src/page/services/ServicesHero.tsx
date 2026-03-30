function PaymentHero() {
  return (
    <section
      className="bg-[#0a1e3d] text-[#CDA434] min-h-screen 
    flex items-center  justify-center text-center px-3 "
    >
      <div className="max-w-3xl space-y-4">
        {/* <h1 className="text-4xl md:text-7xl font-bold">ما نقدمه</h1> */}

        <p className="text-4xl md:text-4xl  text-gray-[#cda434] font-bold">
          خدماتنا
        </p>

        <p className="text-base md:text-lg leading-relaxed text-gray-200 pt-3">
          حلول تجارية شاملة مصممة لمساعدة عملك على الازدهار في السوق
          العالمية.... نحن نقدم مجموعة واسعة من الخدمات التي تلبي احتياجاتك
          التجارية المتنوعة، بدءًا من خدمات الاستيراد والتصدير إلى حلول الشحن
          واللوجستيات، بالإضافة إلى خدمات التخليص الجمركي والاستشارات التجارية.
          فريقنا المتخصص جاهز لتقديم الدعم والإرشاد لضمان نجاح عملياتك التجارية
          وتحقيق أهدافك في السوق العالمية. انضم إلينا اليوم واكتشف كيف يمكننا !
          مساعدتك في تحقيق النجاح التجاري الذي تطمح إليه
        </p>
        <button
          className="mt-6 px-6 py-3 bg-[#D4A757] text-[#001534] font-bold rounded-full hover:bg-[#cda434] transition-colors duration-300"
          // onClick={() => {
          //   const contactSection = document.getElementById("contact");
          //   if (contactSection) {
          //     contactSection.scrollIntoView({ behavior: "smooth" });
          //   }
          // }}
        >
          تواصل معنا
        </button>
      </div>
    </section>
  );
}

export default PaymentHero;
