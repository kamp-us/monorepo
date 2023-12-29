export const curriculumList = [
  {
    name: "temel-bilgiler",
    headers: [
      {
        giris: {
          lessons: [{ name: "", slug: "" }, "web-gelistirmeye-giris"],
        },
      },
    ],
  },
];

const foundationsCurriculum = {
  giris: {
    "kurs-nasil-calisacak": "Kurs Nasıl Çalışacak?",
    "web-gelistirmeye-giris": "Web Geliştirmeye Giriş",
    "motivasyon-ve-dusunce-yapisi": "Motivasyon ve Düşünce Yapısı",
    "yardim-istemek": "Yardım İstemek",
    "odin-topluluguna-katil": "Odin Topluluğuna Katıl",
  },
  kurulumlar: {
    "bilgisayar-temelleri": "Bilgisayar Temelleri",
    "web-nasil-calisir": "Web Nasıl Çalışır?",
    "kuruluma-genel-bakis": "Kuruluma Genel Bakış",
    kurulumlar: "Kurulumlar",
    "metin-duzenleyiciler": "Metin Düzenleyiciler",
    "komut-satiri-temelleri": "Komut Satırı Temelleri",
  },
  git: {
    "gite-giris": "Gite Giriş",
    "git-temelleri": "Git Temelleri",
  },
  "html-temelleri": {
    "html-ve-cssye-giris": "HTML ve CSS'ye Giriş",
    "elemanlar-ve-etiketler": "Elemanlar ve Etiketler",
    "html-sablonu": "HTML Şablonu",
    "metin-ile-calisma": "Metin İle Çalışma",
    listeler: "Listeler",
    "baglantilar-ve-resimler": "Bağlantılar ve Resimler",
    "commit-mesajlari": "Commit Mesajları",
    "proje-tarifler": "Proje: Tarifler",
  },
  "css-temelleri": {
    "css-temelleri": "CSS Temelleri",
    "html-ve-cssi-inceleme": "HTML ve CSS'i İnceleme",
    "kutu-modeli": "Kutu Modeli",
    "blok-ve-inline": "Blok ve İnline",
  },
  flexbox: {
    "flexboxa-giris": "Flexbox'a Giriş",
    "buyume-ve-kuculme": "Büyüme ve Küçülme",
    eksenler: "Eksenler",
    hizalama: "Hizalama",
    "proje-ana-sayfa": "Proje: Ana Sayfa",
  },
  "JavaScript Temelleri": {
    "temel-bilgiler-bolum-1": "Temel Bilgiler Bölüm 1",
    "temel-bilgiler-bolum-2": "Temel Bilgiler Bölüm 2",
    "javascript-gelistirici-araclari": "JavaScript Geliştirici Araçları",
    "temel-bilgiler-bolum-3": "Temel Bilgiler Bölüm 3",
    "problem-cozme": "Problem Çözme",
    "hatalari-anlama": "Hataları Anlama",
    "proje-tas-kagit-makas": "Proje: Taş Kağıt Makas",
    "temiz-kod": "Temiz Kod",
    "nodejs-kurulumu": "Node.js Kurulumu",
    "temel-bilgiler-bolum-4": "Temel Bilgiler Bölüm 4",
    "dom-manipulasyonu-ve-olaylar": "DOM Manipülasyonu ve Olaylar",
    "tas-kagit-makasi-tekrar-ziyaret-etme": "Taş Kağıt Makas'ı Tekrar Ziyaret Etme",
    "proje-cizim-tahtasi": "Proje: Çizim Tahtası",
    "temel-bilgiler-bolum-5": "Temel Bilgiler Bölüm 5",
    "proje-hesap-makinesi": "Proje: Hesap Makinesi",
  },
  sonuc: {
    "ilerlemek-icin-yolunuzu-secin": "İlerlemek İçin Yolunuzu Seçin",
  },
};

function slugifyTurkishTitle(text: string) {
  const turkishCharacters: { [key: string]: string } = {
    ı: "i",
    ğ: "g",
    ü: "u",
    ş: "s",
    ö: "o",
    ç: "c",
    İ: "I",
    Ğ: "G",
    Ü: "U",
    Ş: "S",
    Ö: "O",
    Ç: "C",
  };

  return text
    .replace(/[^a-zA-Z0-9ığüşöçİĞÜŞÖÇ\s]/g, "") // Remove non-alphanumeric characters except spaces
    .trim() // Trim leading and trailing spaces
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[ığüşöçİĞÜŞÖÇ]/g, (match) => turkishCharacters[match] || match); // Replace Turkish characters
}
