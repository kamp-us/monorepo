export interface Curriculum {
  name: string;
  url: string;
  description: string;
  sections: Section[];
}

export interface Section {
  header: string;
  lessons: CurriculumLesson[];
}

interface CurriculumLesson {
  title: string;
  url: string;
}

const curriculum = [
  {
    name: "Temel Bilgiler Serüveni",
    url: "temel-bilgiler-seruveni",
    description: `İşte her şeyin başladığı yer! Gerçek, çalışan web siteleri oluşturmak
    için ihtiyacınız olan temel araçların hepsine pratik bir giriş.  Web geliştiricilerinin
      aslında ne yaptığını ve sonraki kurslar için ihtiyacınız olan temelleri öğreneceksiniz.`,
    sections: [
      {
        header: "Başlangıç",
        lessons: [
          {
            title: "Kurs Nasıl Çalışacak?",
            url: "temel-bilgiler/baslangic/kurs-nasil-calisacak",
          },
          {
            title: "Web Geliştirmeye Giriş",
            url: "temel-bilgiler/baslangic/web-gelistirmeye-giris",
          },
          {
            title: "Motivasyon ve Düşünce Yapısı",
            url: "temel-bilgiler/baslangic/motivasyon-ve-dusunce-yapisi",
          },
          {
            title: "Yardım İstemek",
            url: "temel-bilgiler/baslangic/yardim-istemek",
          },
          {
            title: "Odin Topluluğuna Katıl",
            url: "temel-bilgiler/baslangic/odin-topluluguna-katil",
          },
        ],
      },
      {
        header: "Kurulumlar",
        lessons: [
          {
            title: "Bilgisayar Temelleri",
            url: "temel-bilgiler/kurulumlar/bilgisayar-temelleri",
          },
          {
            title: "Web Nasıl Çalışır?",
            url: "temel-bilgiler/kurulumlar/web-nasil-calisir",
          },
          {
            title: "Kuruluma Genel Bakış",
            url: "temel-bilgiler/kurulumlar/kuruluma-genel-bakis",
          },
          {
            title: "Kurulumlar",
            url: "temel-bilgiler/kurulumlar/kurulumlar",
          },
          {
            title: "Metin Düzenleyiciler",
            url: "temel-bilgiler/kurulumlar/metin-duzenleyiciler",
          },
          {
            title: "Komut Satırı Temelleri",
            url: "temel-bilgiler/kurulumlar/komut-satiri-temelleri",
          },
          { title: "Setting up Git - Çeviriye ihtiyaç duyuluyor", url: "#" },
        ],
      },
      {
        header: "Git Temelleri",
        lessons: [
          {
            title: "Git'le Tanışın",
            url: "git/git-temelleri/gitle-tanisin",
          },
          {
            title: "Git'e Giriş",
            url: "git/git-temelleri/gite-giris",
          },
        ],
      },
      {
        header: "HTML Temelleri",
        lessons: [
          {
            title: "HTML ve CSS'e Giriş",
            url: "temel-bilgiler/html-css/html-temelleri/html-ve-csse-giris",
          },
          {
            title: "Elementler ve Etiketler",
            url: "temel-bilgiler/html-css/html-temelleri/elementler-ve-etiketler",
          },
          {
            title: "HTML Şablonu",
            url: "temel-bilgiler/html-css/html-temelleri/html-sablonu",
          },
          {
            title: "Metin İle Çalışma",
            url: "temel-bilgiler/html-css/html-temelleri/metin-ile-calisma",
          },
          {
            title: "Listeler",
            url: "temel-bilgiler/html-css/html-temelleri/listeler",
          },
          {
            title: "Linkler ve Resimler",
            url: "temel-bilgiler/html-css/html-temelleri/linkler-ve-resimler",
          },
          {
            title: "Commit Mesajları",
            url: "git/git-temelleri/commit-mesajlari",
          },
          {
            title: "Proje: Tarifler - Çeviriye ihtiyaç duyuluyor",
            url: "#",
          },
        ],
      },
      {
        header: "CSS Temelleri",
        lessons: [
          {
            title: "CSS'e Giriş",
            url: "temel-bilgiler/html-css/css-temelleri/csse-giris",
          },
          {
            title: "Basamaklama",
            url: "temel-bilgiler/html-css/css-temelleri/basamaklama",
          },
          {
            title: "HTML ve CSS İnceleme",
            url: "temel-bilgiler/html-css/css-temelleri/html-ve-css-inceleme",
          },
          {
            title: "Kutu Modeli",
            url: "temel-bilgiler/html-css/css-temelleri/kutu-modeli",
          },
          {
            title: "Blok ve Satır İçi Öğeler",
            url: "temel-bilgiler/html-css/css-temelleri/blok-ve-satir-ici-ogeler",
          },
        ],
      },
      {
        header: "Flexbox",
        lessons: [
          {
            title: "Introduction to Flexbox - Çeviriye ihtiyaç duyuluyor",
            url: "#",
          },
          {
            title: "Grow ve Shrink",
            url: "temel-bilgiler/html-css/flexbox/grow-ve-shrink",
          },
          {
            title: "Eksenler",
            url: "temel-bilgiler/html-css/flexbox/eksenler",
          },
          {
            title: "Hizalama",
            url: "temel-bilgiler/html-css/flexbox/hizalama",
          },
          {
            title: "Project: Landing Page - Çeviriye ihtiyaç duyuluyor",
            url: "#",
          },
        ],
      },
      {
        header: "JavaScript Temelleri",
        lessons: [
          {
            title: "JavaScript Temelleri Bölüm 1",
            url: "temel-bilgiler/javascript-temelleri/javascript-temelleri-1",
          },
          {
            title: "JavaScript Temelleri Bölüm 2",
            url: "temel-bilgiler/javascript-temelleri/javascript-temelleri-2",
          },
          {
            title: "JavaScript Geliştirici Araçları",
            url: "temel-bilgiler/javascript-temelleri/javascript-gelistirici-araclari",
          },
          {
            title: "JavaScript Temelleri Bölüm 3",
            url: "temel-bilgiler/javascript-temelleri/javascript-temelleri-3",
          },
          {
            title: "Problem Çözme",
            url: "temel-bilgiler/javascript-temelleri/problem-cozme",
          },
          {
            title: "Hataları Anlama",
            url: "temel-bilgiler/javascript-temelleri/hatalari-anlama",
          },
          {
            title: "Proje: Taş Kağıt Makas",
            url: "temel-bilgiler/javascript-temelleri/proje-tas-kagit-makas",
          },
          {
            title: "Temiz Kod",
            url: "temel-bilgiler/javascript-temelleri/temiz-kod",
          },
          {
            title: "Node.js Setup - Çeviriye ihtiyaç duyuluyor",
            url: "#",
          },
          {
            title: "JavaScript Temelleri Bölüm 4",
            url: "temel-bilgiler/javascript-temelleri/javascript-temelleri-4",
          },
          {
            title: "DOM Manipülasyonu ve Eventler",
            url: "temel-bilgiler/javascript-temelleri/dom-manipulasyonu-ve-eventler",
          },
          {
            title: "Taş Kağıt Makas Projesine Geri Dönüş",
            url: "temel-bilgiler/javascript-temelleri/tas-kagit-makas-projesine-geri-donus",
          },
          {
            title: "Proje: Çizim Tahtası",
            url: "temel-bilgiler/javascript-temelleri/proje-cizim-tahtasi",
          },
          {
            title: "JavaScript Temelleri Bölüm 5",
            url: "temel-bilgiler/javascript-temelleri/javascript-temelleri-5",
          },
          {
            title: "Proje: Hesap Makinesi",
            url: "temel-bilgiler/javascript-temelleri/proje-hesap-makinesi",
          },
        ],
      },
      {
        header: "Her Şeyi Bir Araya Getirme",
        lessons: [
          {
            title: "Her Şeyi Bir Araya Getirme",
            url: "temel-bilgiler/her-seyi-birlestirme/her-seyi-bir-araya-getirme-sonuc",
          },
        ],
      },
    ],
  },
  // { // next serüven to be added here, texting purposes for now
  //   name: "Full Stack JavaScript Serüveni", 
  //   url: "full-stack-javascript-seruveni",
  //   description: "açıklama...",

  //   sections: [
  //     {
  //       header: "Test header",
  //       lessons: [
  //         {
  //           title: "test lesson",
  //           url: "test-course-url",
  //         }
  //       ]
  //     }
  //   ]
  //   }
];

const curriculumList = {
  curriculum,
};

export default curriculumList;

