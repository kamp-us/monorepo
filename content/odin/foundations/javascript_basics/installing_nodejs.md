---
title: 'Node.js Kurulumu'
---

### Giriş

Node.js, JavaScript'i web tarayıcınızın dışında çalıştırmanıza olanak tanıyan bir JavaScript çalışma zamanı ortamıdır. Gelecek derslerdeki bazı alıştırmalar için buna ihtiyacımız olacak. Başlamak için, Node'u sisteminize kurmadan önce ihtiyacımız olan bazı gerekli araçlar var.

Node'u yüklemek için `nvm` (Node Version Manager) kullanacağız, çünkü bu, Node versiyonlarını değiştirmeyi ve Node'un güncelleştirmeyi kolaylaştırır. İlerleyen zamanlarda JavaScript ortamlarında kullanılan çeşitli kütüphaneler ve araçları yüklemek için kullanacağınız başka bir araç da `npm` (Node Package Manager) adını taşıyor. Bu ikisini karıştırmak kolay olabilir, bu yüzden dikkatlice okuyunuz!

Node'u `nvm` kullanarak kurmak da çok kolay, bu yüzden işlem hızlı bir şekilde tamamlanabilir :)

### Ders Genel Bakışı

Bu bölüm, bu derste öğreneceğiniz konuların genel bir bakışını içerir.

- Node Version Manager ve Node Package Manager'ı nasıl kuracağınızı öğreneceksiniz
- Node konsolunu nasıl çalıştıracağınızı öğreneceksiniz

### NVM Kurulumu

<details markdown="block">
  <summary class="dropDown-header">Linux için Kurulum</summary>

  
#### Adım 0: Gereksinimler

NVM'i düzgün bir şekilde kurmak için `curl` gereklidir. Aşağıdaki komutu çalıştırarak kurulumu başlatabilirsiniz:

```bash
sudo apt install curl
```

Not: Curl kurulumunun tamamlanabilmesi için Ubuntu paket listelerini güncellemeniz gerekebilir. Bu durumda, aşağıdaki komutu çalıştırınız:

```bash
sudo apt update && sudo apt upgrade
```

#### Adım 1: NVM'in İndirilmesi ve Kurulması

Bu komutu çalıştırınız:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Bu, `nvm`i kuracaktır.

#### Adım 2: NVM'in Başlatılması

Eğer terminalde `nvm`'i nasıl başlatacağınıza dair yönergeler yoksa (veya terminalden kopyalamak istemiyorsanız), şu komutları çalıştırabilirsiniz:

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # Bu, nvm'i yükler
```

`nvm`in başarıyla kurulup kurulmadığını kontrol etmek için şu komutu çalıştırabilirsiniz:

```bash
command -v nvm
```

Eğer bu komut `nvm: command not found` şeklinde bir geri dönüş yaparsa, terminali kapatıp tekrar açınız.

</details>

<details markdown="block">
  <summary class="dropDown-header">macOS için Kurulum</summary>

macOS 10.15 ve üzerinde, varsayılan shell artık zsh'dir. Kurulum sırasında, nvm kullanıcı ana dizininde bir `.zshrc` dosyasını arayacaktır. Varsayılan olarak bu dosya mevcut olmadığından, bunu oluşturmamız gerekiyor.

`.zshrc` dosyasını oluşturmak ve nvm kurulumunu başlatmak için aşağıdaki komutları çalıştırın:

```bash
touch ~/.zshrc
```

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Terminalinizi yeniden başlatın veya aşağıdaki komutu terminalinize kopyalayıp yapıştırın ve <kbd>Enter</kbd> tuşuna basın:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # Bu nvm'i yükler
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # Bu komut, nvm bash_completion yükler:
```

nvm kurulumunuzu test etmek için şu komutu çalıştırın:

```bash
nvm --version
```

Daha fazla bilgi için [NVM's github documentation](https://github.com/nvm-sh/nvm#installation-and-update) ziyaret edebilirsiniz.

</details>

### Node Kurulumu

Şimdi `nvm`'i kurduğumuza göre, Node.js'i kurabiliriz.

#### Adım 1: Kurulum

Çalıştırınız:

```bash
nvm install --lts
```

Bu komut, 'uzun vadeli destek' (LTS 'long-term support') kapsamındaki en güncel kararlı Node.js versiyonunu kurar ve terminalde birçok çıktı görürsünüz. Her şey çalışıyorsa, çıktı satırlarında şuna benzer bir şey görmelisiniz (X'ler gerçek sayılarla değiştirilmiş olmalıdır):

```bash
Downloading and installing Node vXX.xx.x...
```

Eğer bu satırı görmüyorsanız, terminali kapatın, tekrar açın ve `nvm install --lts` komutunu yeniden çalıştırın.

#### Adım 2: Node Versiyonunu Belirleme

`node` komutunu çalıştırdığımızda `nvm`'e hangi Node versiyonunu kullanması gerektiğini söylememiz gerekiyor. Bu oldukça kolay; sadece aşağıdaki komutu çalıştırın:

```bash
nvm use --lts
```

`nvm`'e bilgisayarımıza yüklenen en son LTS versiyonunu kullanmasını söyledik. Gelecekteki derslerde kuracağımız paketlerle uyumsuzlukları önlemek için **kesinlikle** LTS sürümünü kullanmalısınız. LTS sürümü, başlangıç versiyonundan itibaren otuz ay boyunca destek garantisi olan bir sürümdür. Stabil ve çeşitli paketlerle uyumlu olma açısından, LTS olmayan bir Node sürümünden daha güvenlidir.

Artık `node -v` komutunu çalıştırdığınızda `vXX.xx.x` veya benzer bir şey görmelisiniz (X'ler gerçek sayılarla değiştirilmiş olmalıdır).

Eğer bunu görüyorsanız, tebrikler! Node'u başarıyla kurmuşsunuz demektir!

### Node Konsolunu Kullanma

Node, kullanıcıya terminalde doğrudan JavaScript kodunu çalıştırma ve düzenleme imkanı sağlayan etkileşimli bir konsol da sunar, bu da Ruby için IRB gibi düşünülebilir. Bu özellik, tarayıcıyı her seferinde açmadan hızlı bir şekilde kodunuzun küçük parçalarında hata ayıklamak veya test etmek için oldukça kullanışlıdır.

Node konsolunu çalıştırmak için terminalinizi açın ve `node` yazın. Konsoldan çıkmak için `exit` yazabilirsiniz.

### Ek Kaynaklar

Bu bölüm, ilgili içeriğe yönlendiren faydalı bağlantıları içerir. Zorunlu değildir, bu nedenle destekleyici bir içerik olarak düşünülebilir.

- Şu anda bu dersin ek kaynakları bulunmuyor gibi görünüyor. Müfredatımıza katkıda bulunarak bu bölümü genişletmemize yardımcı olabilirsiniz.