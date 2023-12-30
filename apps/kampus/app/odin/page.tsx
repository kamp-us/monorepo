import { Box, Button, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { BookOpenCheckIcon } from "lucide-react";

export default function OdinHome() {
  return (
    <Box>
      <WallOfText />
      <Flex mt="4" justify="center">
        <Link href="odin/seruvenler">
          <Button className="flex gap-2">
            <BookOpenCheckIcon size={16} />
            Çevirilere göz at
          </Button>
        </Link>
      </Flex>
    </Box>
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
        &apos;in Web Geliştirme Yolculuğu&apos;nun Türkçe çevirisini oluşturmak için bir araya
        geldik. TheOdinProject, dünya genelinde binlerce öğrenciye ücretsiz web geliştirme
        becerileri kazandırma fırsatı sunan bir kaynaktır. Bu projeyi Türkçe&apos;ye çevirerek, daha
        fazla kişinin bu değerli kaynağa erişebilmesini amaçlıyoruz.
      </Text>
      <Heading>Türkçe çevirinin önemi:</Heading>
      <Text as="p" weight="medium">
        Dil Engeli Kaldırma: İngilizce bilmeyen veya yeterince iyi bilmeyen kişiler için,
        TheOdinProject&apos;e erişmek zor olabilir. Türkçe çeviri, bu engeli kaldırarak daha fazla
        kişinin web geliştirme becerilerini geliştirmesine olanak tanır.
      </Text>
      <Text as="p" weight="medium">
        Topluluk Katılımı: TheOdinProject&apos;in açık kaynak yapısı sayesinde, herkesin katkıda
        bulunma fırsatı vardır. Türkçe çeviri yaparak, kamp.us topluluğunun bu projeye katkıda
        bulunmasına ve içerikleri iyileştirmesine olanak tanınır.
      </Text>
      <Text as="p" weight="medium">
        Eğitim Fırsatları: Türkçe konuşan öğrencilere web geliştirme eğitimi sunmak, kariyerlerini
        ilerletmelerine ve yeni fırsatlar yaratmalarına yardımcı olabilir.
      </Text>
      <Text as="p" weight="medium">
        Daha Geniş Kitleye Ulaşma: Türkçe çeviri ile, Türkçe konuşan topluluklar arasında
        TheOdinProject&apos;in bilinirliğini artırabiliriz.
      </Text>
      <Text as="p" weight="medium">
        TheOdinProject Web Geliştirme Yolculuğu&apos;nun Türkçe çevirisi, topluluğumuzun işbirliği
        ve katkılarıyla gerçekleştirilecektir. Herkesin bu projeye katkıda bulunması, daha fazla
        kişiye web geliştirme becerileri kazandırmamıza yardımcı olabilir.
      </Text>
      <Text as="p" weight="medium">
        Eğer siz de bu projeye katkıda bulunmak isterseniz,{" "}
        <Link target="_blank" href="https://github.com/kamp-us/monorepo/tree/dev/content/odin">
          GitHub{" "}
        </Link>
        reposunu ziyaret edebilir ve çeviri sürecine dahil olabilirsiniz. Hep birlikte daha fazla
        kişiye web geliştirme yolculuğuna başlamalarına ve başarılı olmalarına yardımcı olacağız.
      </Text>
    </Flex>
  );
};
