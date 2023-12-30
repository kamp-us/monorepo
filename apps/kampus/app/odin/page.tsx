import { Button, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { BookOpenCheckIcon } from "lucide-react";

export default function OdinHome() {
  return (
    <div>
      <WallOfText />
    </div>
  );
}

const WallOfText = () => {
  return (
    <Flex direction="column" gap="4">
      <Heading size="8">Merhaba!</Heading>
      <Text as="p" weight="medium">
        Biz, <Link>kamp.us</Link> olarak,{" "}
        <Link target="_blank" href="https://www.theodinproject.com/">
          TheOdinProject
        </Link>
        'in Web Geliştirme Yolculuğu'nun Türkçe çevirisini oluşturmak için bir araya geldik.
        TheOdinProject, dünya genelinde binlerce öğrenciye ücretsiz web geliştirme becerileri
        kazandırma fırsatı sunan bir kaynaktır. Bu projeyi Türkçe'ye çevirerek, daha fazla kişinin
        bu değerli kaynağa erişebilmesini amaçlıyoruz.
      </Text>
      <Heading>Türkçe çevirinin önemi:</Heading>
      <Text as="p" weight="medium">
        Dil Engeli Kaldırma: İngilizce bilmeyen veya yeterince iyi bilmeyen kişiler için,
        TheOdinProject'e erişmek zor olabilir. Türkçe çeviri, bu engeli kaldırarak daha fazla
        kişinin web geliştirme becerilerini geliştirmesine olanak tanır.
      </Text>
      <Text as="p" weight="medium">
        Topluluk Katılımı: TheOdinProject'in açık kaynak yapısı sayesinde, herkesin katkıda bulunma
        fırsatı vardır. Türkçe çeviri yaparak, kamp.us topluluğunun bu projeye katkıda bulunmasına
        ve içerikleri iyileştirmesine olanak tanırız.
      </Text>
      <Text as="p" weight="medium">
        Eğitim Fırsatları: Türkçe konuşan öğrencilere web geliştirme eğitimi sunmak, kariyerlerini
        ilerletmelerine ve yeni fırsatlar yaratmalarına yardımcı olabilir.
      </Text>
      <Text as="p" weight="medium">
        Daha Geniş Kitleye Ulaşma: Türkçe çeviri ile, Türkçe konuşan topluluklar arasında
        TheOdinProject'in bilinirliğini artırabiliriz.
      </Text>
      <Text as="p" weight="medium">
        TheOdinProject Web Geliştirme Yolculuğu'nun Türkçe çevirisi, topluluğumuzun işbirliği ve
        katkılarıyla gerçekleştirilecektir. Herkesin bu projeye katkıda bulunması, daha fazla kişiye
        web geliştirme becerileri kazandırmamıza yardımcı olabilir.
      </Text>
      <Text as="p" weight="medium">
        Eğer siz de bu projeye katkıda bulunmak isterseniz,{" "}
        <Link target="_blank" href="https://github.com/kamp-us/monorepo/tree/dev/content/odin">
          GitHub{" "}
        </Link>
        reposunu ziyaret edebilir ve çeviri sürecine dahil olabilirsiniz. Hep birlikte daha fazla
        kişiye web geliştirme yolculuğuna başlamalarına ve başarılı olmalarına yardımcı olacağız.
      </Text>

      <div className="mt-6 flex justify-center">
        <Link href="odin/seruvenler">
          <Button className="flex gap-2">
            <BookOpenCheckIcon size={16} />
            Cevirilere goz at
          </Button>
        </Link>
      </div>
    </Flex>
  );
};
