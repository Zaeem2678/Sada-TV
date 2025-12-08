import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    if (language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
  };

  const translations = {
    en: {
      nav: {
        home: "Home",
        watch: "Watch",
        about: "About Us",
        contact: "Contact Us",
      },
      footer: {
        intro:
          "Sadaa Satellite Channels Group... and Sadaa Media Club - welcome you... Here is the future of renewed art and media.",
        downloadAndroid: "Download App Sada TV",
        downloadIOS: "Download App Store Sada TV",
        contactUs: "Contact Us",
        address:
          "Kingdom of Saudi Arabia - Riyadh City - Al Olaya (Sadaa Satellite Channels Group)",
        phone: "+966538551515",
        email: "Media@Sadaa.tv",
        copyright: "© 2025 Sada TV",
      },
      hero: {
        title: "Start your journey with our practical courses",
        description:
          "Our online courses are built in partnership with technology leaders and are designed to meet industry demands.",
        button: "Watch now",
      },
      cards: {
        card1: "Amazing scenes from sports events and matches",
        card2: "Special moments from tournaments and competitions",
        card3: "Stunning sports displays and inspiring achievements",
        card4: "Unique experiences in the world of sports and fitness",
        card5: "Exciting moments from sports games",
        card6: "Live scenes from sports events",
        card7: "Innovative programs and scientific discoveries",
        card8: "Health and wellness tips for better living",
      },
    },
    ar: {
      nav: {
        home: "الرئيسية",
        watch: "مشاهدة",
        about: "من نحن",
        contact: "اتصل بنا",
      },
      footer: {
        intro:
          "مجموعة قنوات صدى الفضائية... ونادي صدى الإعلامي - نرحب بك... هنا مستقبل الفن والإعلام المتجدد",
        downloadAndroid: "تحميل تطبيق صدى TV",
        downloadIOS: "تحميل تطبيق متجر صدى TV",
        contactUs: "اتصل بنا",
        address:
          "المملكة العربية السعودية - مدينة الرياض - العليا (مجموعة قنوات صدى الفضائية)",
        phone: "+966538551515",
        email: "Media@Sadaa.tv",
        copyright: "© 2025 صدى TV",
      },
      hero: {
        title: "ابدأ رحلتك مع دوراتنا العملية",
        description:
          "تم بناء دوراتنا عبر الإنترنت بالشراكة مع قادة التكنولوجيا وهي مصممة لتلبية متطلبات الصناعة.",
        button: "شاهد الآن",
      },
      cards: {
        card1: "مشاهد رائعة من الأحداث الرياضية والمباريات",
        card2: "لحظات مميزة من البطولات والمنافسات",
        card3: "عروض رياضية مذهلة وإنجازات ملهمة",
        card4: "تجارب فريدة في عالم الرياضة واللياقة",
        card5: "لحظات مثيرة من الألعاب الرياضية",
        card6: "مشاهد حية من الفعاليات الرياضية",
        card7: "برامج مبتكرة واكتشافات علمية",
        card8: "نصائح صحية ولياقة لعيش أفضل",
      },
    },
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
