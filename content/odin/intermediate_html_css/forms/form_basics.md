### Giriş

Formlar, sitenizin en kritik bölümlerinden biridir. Kullanıcılarınızın backend'inize giriş kapısıdır – kullanıcılar bir formda veri sağlar ve siz de bu veriyle işlemler yaparsınız.

Her olası veri öğesi için uygun giriş türlerini belirtmelisiniz, çünkü genellikle bir veri parçasını toplamanın birden fazla yolu olabilir, ancak kullanıcılarınız için en kolay olan tek bir yol vardır.

Bu ders kapsamında, HTML formlarının temellerini ve size sunulan çeşitli giriş türlerini keşfedeceğiz.

### Öğrenme çıktıları

Dersin sonunda şunları yapabilmelisiniz:

- HTML ile formlar oluşturabilmek
- Formları nasıl stilize edeceğiniz konusunda temel bir fikre sahip olmak

### Form öğesi

Form öğesi, önceki müfredatta öğrendiğimiz div öğesi gibi bir konteyner öğesidir. Form öğesi, bir formda kullanıcının etkileşimde bulunacağı tüm girişleri sarmalar.

Form öğesi iki temel özellik kabul eder; ilki, formun hangi URL'ye verilerini işlemek üzere göndermesi gerektiğini belirten `action` niteliğidir. Müfredatın ilerleyen aşamalarında, bu niteliği kullanarak backend sistemlerini frontend formlarına bağlamayı öğreneceğiz. Şu anda sadece `action` niteliğinin ne için kullanıldığını bilmek önemlidir.

İkinci olarak, tarayıcıya formu göndermek için hangi [which HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)nin kullanılacağını belirten `metot` niteliğidir. En çok kullanılan iki yöntem GET ve POST istek yöntemleridir.

GET'i bir şeyi sunucudan almak istediğimizde kullanırız. Örneğin, Google bir arama yaptığınızda *arama sonuçlarını alması* için GET isteği kullanır.

POST, sunucuda bir şeyi değiştirmek istediğimizde kullanılır; örneğin, bir kullanıcı bir hesap oluşturur veya bir web sitesinde ödeme yaparsa.

Form elementi oluşturmak için işaretleme şu şekildedir:

~~~html
<form action="example.com/path" method="post">

</form>
~~~

### Form kontrolleri

Kullanıcı verilerini toplamaya başlamak için form kontrol elemanlarını kullanmamız gerekiyor. Bunlar, kullanıcıların form üzerinde etkileşimde bulunacağı tüm elemanlardır; metin kutuları, açılır menüler, onay kutuları ve düğmeler gibi. İlerleyen birkaç bölümde, en sık kullanacağınız bazı form kontrol elemanlarını keşfedeceğiz.

### İnput öğesi

Input öğesi, tüm form kontrol elemanları arasında en çok yönlü olanıdır. Tarayıcıya ne tür veri bekleyeceğini ve input öğesini nasıl render etmesi gerektiğini söyleyen bir `type` niteliğini kabul eder.

Bir metin girişi şu şekildedir:

~~~html
<form action="example.com/path" method="post">
  <input type="text">
</form>
~~~

Metin girişleri, herhangi bir metin girişini kabul eder. Örneğin, kullanıcıların ad ve soyadı gibi bilgileri toplamak için kullanabilirsiniz.

**Labels**

Tek başına bir input pek kullanışlı değildir çünkü kullanıcı, hangi türde veri sağlamaları gerektiğini bilemeyecektir. Bunun yerine, kullanıcılara girmeleri beklenen veri türünü bildirmek için inputlarımıza bir etiket ekleyebiliriz.

Etiket oluşturmak için `<label>` elementini kullanırız. Etikette görüntülenmesini istediğimiz metin, açılış ve kapanış etiketleri arasına gelecektir:

~~~html
<form action="example.com/path" method="post">
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name">
</form>
~~~

Etiketler, onları belirli bir girişle ilişkilendiren bir `for` niteliğini kabul eder. Bir etiketin ilişkilendirilmek istediği giriş, etiketin `for` niteliğiyle aynı değere sahip bir `id` niteliğine sahip olmalıdır.

Bir etiket, bir girişle ilişkilendirildiğinde ve tıklandığında, imleci bu girişe odaklar ve kullanıcının bazı verileri girmeye hazır hale gelir. Bu, formlarımızı yardımcı teknolojilere bağımlı kullanıcılar için daha erişilebilir hale getirmeye yardımcı olur.

**Placeholder niteliği**

Kullanıcıları form elemanlarına ne girecekleri konusunda yönlendirmek için, giriş alanlarına yer tutucu metin ekleyebiliriz.

Bunu, bir girişe `placeholder` niteliği ekleyerek yaparız. Değer, girişte görüntülemek istediğimiz *yer tutucu* metin olacaktır:

~~~html
<label for="first_name">First Name:</label>
<input type="text" id="first_name" placeholder="Bob...">
~~~

Yer tutucu, metnin nasıl girilmesi ve biçimlendirilmesi gerektiğini göstermek için kullanılır.


<span id="the-name-attribute">**The name attribute**</span>

Kullanıcılara bir giriş alanına girilen verinin neyi temsil ettiğini anlatmak için etiketler kullanmalıyız. Aynı şekilde, verimizi gönderdiğimiz backend'e her bir veri parçasının neyi temsil ettiğini bildirmemiz gerekir.

Bunu, girişlerimize bir `name` niteliği ekleyerek yaparız:

~~~html
<label for="first_name">First Name:</label>
<input type="text" id="first_name" name="first_name">
~~~

`name` niteliği, bir form kontrolüne girilen veriye bir referans olarak görev yapar ve form gönderildikten sonra bu veriye erişmemizi sağlar. Bu, giriş için bir değişken adı gibi düşünülebilir. Form girişi her zaman bir `name` niteliğine sahip olmalıdır; aksi takdirde, form gönderildiğinde görmezden gelinir.

Bu konsepti daha iyi anlamak için bir formu [httpbin](http://httpbin.org/) adresine göndererek deneyebiliriz. Bu servis, gönderilen verileri görmemize olanak tanıyan bir yanıt gönderecektir. Aşağıdaki formu doldurun ve gönder düğmesine tıklayın:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="dyVRMbq" data-preview="true" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io/TheOdinProjectExamples/pen/dyVRMbq">
  form-basics-name-attribute</a> - TheOdinProject tarafından (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  tarafından paylaşılan <a href="https://codepen.io">CodePen</a> örneği.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Yanıttan önemsediğimiz çıkış, "form" nesnesidir. Şu şekilde görünmelidir:

~~~json
"form": {
    "age": "33",
    "first_name": "John",
    "last_name": "Doe"
  },
~~~

Formdaki bazı giriş alanlarının `name` niteliklerini değiştirmeyi deneyin ve niteliği tamamen kaldırın, ardından formu tekrar göndererek yanıttaki form verilerinin nasıl değiştiğini görmek için çıktıları kontrol edin.

**Form denetimlerini formların dışında kullanma**

Değerli bir not olarak belirtmek gerekir ki `<form>` elementi dışında HTML'in sağladığı tüm form kontrollerini, veri gönderebileceğiniz bir backend sunucusunun olmadığı durumlarda bile kullanabilirsiniz.

Örneğin, kullanıcıdan bazı veriler alıp bunları JavaScript ile sayfanın başka bir yerinde göstermek isteyebilirsiniz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="PoJjNYr" data-preview="true" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io/TheOdinProjectExamples/pen/PoJjNYr">
  using-form-controls-outside-of-form</a> - TheOdinProject tarafından (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  tarafından paylaşılan <a href="https://codepen.io">CodePen</a> örneği.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Bu tür form kontrolü verilerini, müfredatın ilerleyen bölümlerindeki projelerde kullanmak zorunda kalacağız.

**Type niteliği**

`Email inputs`, sadece e-posta adresleri için özel olarak tasarlanmış metin girişleridir. Metin girişlerinden farklı olarak, mobil cihazlarda e-posta adreslerini girmeyi kolaylaştırmak için @ sembolünü içeren farklı bir klavye görüntülerler.

Ayrıca, kullanıcının doğru biçimlendirilmiş bir e-posta adresi girdiğini doğrularlar, ancak doğrulamalarla ilgili daha fazla bilgi ilerleyen aşamalarda bulunacaktır.

Bir e-posta girişi oluşturmak için, "email" olan bir `type` niteliğine sahip bir input öğesi kullanırız:

~~~html
<label for="user_email">Email Address:</label>
<input type="email" id="user_email" name="email" placeholder="you@example.com">
~~~

`Password inputs`, başka bir özel metin girişidir. Normal metin girişlerinden farklı olarak, giriş verilerini başka bir karakterle – genellikle bir yıldız (*) veya noktalama işareti (•) – maskeleyerek gizler ve kimse tarafından girilen verinin görülmesini engeller.

Bir şifre girişi, "password" olan bir `type` niteliğine sahip bir input öğesi kullanılarak oluşturulabilir:

~~~html
<label for="user_password">Password:</label>
<input type="password" id="user_password" name="password">
~~~

`number input`, yalnızca sayı değerlerini kabul eder ve kullanıcının girmeye çalıştığı diğer karakterleri yok sayar.

Bir sayı girişi oluşturmak için "number" olan bir `type` niteliğine sahip bir input öğesi kullanırız:

~~~html
<label for="amount">Amount:</label>
<input type="number" id="amount" name="amount">
~~~

Kullanıcıdan tarih bilgisi toplamak için bir `date input` kullanabiliriz. Bu giriş, basit bir tarih seçici takvimini görüntüleyerek tarihleri seçme konusunda daha iyi bir kullanıcı deneyimi sunar.

Bir tarih girişi oluşturmak için "date" olan bir `type` niteliğine sahip bir input öğesi kullanırız:

~~~html
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">
~~~

**Text area**

Teknik olarak bir giriş öğesi olmasa da, metin alanı öğesi, kullanıcı yorumları ve incelemeleri gibi birden fazla satırı içeren metni kabul edebilen bir giriş kutusu sağlar. Ayrıca, alt sağ köşesine tıklanıp sürüklenerek daha büyük veya daha küçük hale getirilebilir.

Bir metin alanı oluşturmak için `<textarea>` öğesini kullanırız:

~~~html
<textarea></textarea>
~~~

Giriş öğelerinin aksine, Metin Alanı öğelerinin kapanış etiketi bulunur. Bu, metin alanının görüntülemesini istediğiniz bazı başlangıç içeriğini sarmak için kullanılabilir:

~~~html
<textarea>Some initial content</textarea>
~~~

Metin Alanı öğeleri, diğer form kontrollerinde bulunmayan birkaç benzersiz niteliği kabul eder. Bunlar `rows` ve `cols` nitelikleridir. Bu nitelikler, metin alanının başlangıçtaki yüksekliğini (rows) ve genişliğini (cols) kontrol etmenize olanak tanır:

~~~html
<textarea rows="20" cols="60"></textarea>
~~~

### Seçim öğeleri

Bazen kullanıcılardan önceden belirlenmiş bir listeden bir değer seçmelerini istemek isteyebilirsiniz. Bu durumda seçim öğeleri (select elements) işe yarar olacaktır.

**Select dropdown**

Seçim öğesi (select elementi), kullanıcıların bir seçenek seçebileceği bir açılır liste oluşturur. Sözdizimsel olarak, seçim öğelerinin işaretleme biçimi düzenlenmemiş listelere benzerdir. Seçim öğesi, seçilebilecek seçenekleri içeren option öğelerini sarmalar.

Açılır bir liste oluşturmak için <select> öğesini kullanırız. Seçim öğesi içinde görüntülemek istediğimiz herhangi bir seçeneği, <option> öğelerini kullanarak tanımlarız:

~~~html
<select name="Car">
  <option value="mercedes">Mercedes</option>
  <option value="tesla">Tesla</option>
  <option value="volvo">Volvo</option>
  <option value="bmw">BMW</option>
  <option value="mini">Mini</option>
  <option value="ford">Ford</option>
</select>
~~~

Tüm option öğelerinin bir `value` niteliğine sahip olması gereklidir (aksi halde içerideki metin içeriği kullanılır). Bu değer, form gönderildiğinde sunucuya gönderilecektir.

Tarayıcı formu ilk kez render ettiğinde, seçeneklerden birini varsayılan olarak seçilmiş olarak ayarlayabiliriz; bunun için bir seçeneğe `selected` niteliği ekleriz:

~~~html
<select name="Car">
  <option value="mercedes">Mercedes</option>
  <option value="tesla">Tesla</option>
  <option value="volvo" selected>Volvo</option>
  <option value="bmw">BMW</option>
  <option value="mini">Mini</option>
  <option value="ford">Ford</option>
</select>
~~~

Ayrıca, `<optgroup>` öğesini kullanarak seçenek listesini gruplara bölebiliriz. Optgroup öğesi, tarayıcının her grup için etiket olarak kullandığı bir `label` niteliğini alır: 

~~~html
<select name="fashion">
  <optgroup label="Clothing">
    <option value="t_shirt">T-Shirts</option>
    <option value="sweater">Sweaters</option>
    <option value="coats">Coats</option>
  </optgroup>
  <optgroup label="Foot Wear">
    <option value="sneakers">Sneakers</option>
    <option value="boots">Boots</option>
    <option value="sandals">Sandals</option>
  </optgroup>
</select>
~~~

**Radio buttons**

Seçim kutuları (select dropdowns), kullanıcıların seçebilecekleri kapsamlı bir seçenek listemiz olduğunda sayfada yer kazanmak için harikadır. Ancak, 5 veya daha az seçeneğe sahip daha küçük bir liste varsa, bunları bir açılır listenin arkasına gizlemek yerine sayfada görüntülemek genellikle daha iyi bir kullanıcı deneyimidir.

Bu durumda, radyo düğmelerini kullanabiliriz. Radyo düğmeleri, kullanıcının birini seçebileceği birden çok seçenek oluşturmamıza izin verir. Radyo düğmeleri oluşturmak için, çok amaçlı input öğesini bir kez daha kullanırız ve bu kez "radio" olan bir `type` niteliğine sahiptir:
~~~html
<h1>Ticket Type</h1>
<div>
  <input type="radio" id="child" name="ticket_type" value="child">
  <label for="child">Child</label>
</div>

<div>
  <input type="radio" id="adult" name="ticket_type" value="adult">
  <label for="adult">Adult</label>
</div>

<div>
  <input type="radio" id="senior" name="ticket_type" value="senior">
  <label for="senior">Senior</label>
</div>
~~~

Bir radyo düğmesini seçtiğimizde ve ardından başka bir tane seçtiğimizde, ilk olanı seçilmemiş duruma getirecektir. Radyo düğmeleri bunu yapmayı bilir çünkü aynı `name` niteliğine sahiptirler. Bu, tarayıcının bu öğelerin aynı seçenek grubunun bir parçası olduğunu bilmesini sağlar.

Varsayılan olarak seçili radyo düğmesini belirleyebiliriz, bunun için `checked` niteliğini ekleriz:


~~~html
<h1>Ticket Type</h1>
<div>
  <input type="radio" id="child" name="ticket_type" value="child">
  <label for="child">Child</label>
</div>

<div>
  <input type="radio" id="adult" name="ticket_type" value="adult" checked>
  <label for="adult">Adult</label>
</div>

<div>
  <input type="radio" id="senior" name="ticket_type" value="senior">
  <label for="senior">Senior</label>
</div>
~~~

**Checkboxes**

Onay kutuları (checkboxes), kullanıcıların önceden belirlenmiş bir dizi seçenek arasından seçim yapmalarına izin veren radyo düğmelerine benzer. Ancak radyo düğmelerinin aksine, birden çok seçeneğin aynı anda seçilmesine izin verirler.

Bir onay kutusu oluşturmak için, "checkbox" olan bir `type` niteliğine sahip input öğesini kullanırız:

~~~html
<h1>Pizza Toppings</h1>

<div>
  <input type="checkbox" id="sausage" name="topping" value="sausage">
  <label for="sausage">Sausage</label>
</div>

<div>
  <input type="checkbox" id="onions" name="topping" value="onions">
  <label for="onions">Onions</label>
</div>

<div>
  <input type="checkbox" id="pepperoni" name="topping" value="pepperoni">
  <label for="pepperoni">Pepperoni</label>
</div>

<div>
  <input type="checkbox" id="mushrooms" name="topping" value="mushrooms">
  <label for="mushrooms">Mushrooms</label>
</div>
~~~

Aynı zamanda, kullanıcılara bir şeyin doğru veya yanlış olup olmadığını açma veya kapatma seçeneği sunmak istediğimizde tek bir onay kutusu da kullanabiliriz. Örneğin, bir hesap oluştururken bir bülten aboneliğine kaydolma:

~~~html
<div>
  <input type="checkbox" id="newsletter" name="news_letter">
  <label for="newsletter">Send me the news letter</label>
</div>
~~~

Sayfa yüklenirken onay kutularını varsayılan olarak işaretleyebiliriz, bunun için bir `checked` niteliği ekleriz:

~~~html
<div>
  <input type="checkbox" id="newsletter" name="news_letter" checked>
  <label for="newsletter">Send me the news letter</label>
</div>
~~~

### Butonlar

Düğme öğesi, kullanıcının formları göndermek ve diğer eylemleri tetiklemek için etkileşimde bulunabileceği tıklanabilir düğmeler oluşturur.

Bir düğme oluşturmak için `<button>` öğesini kullanırız. Düğme içinde görüntülemek istediğimiz içerik veya metin, açılış ve kapanış etiketleri arasına yerleştirilir:

~~~html
<button>Click Me</button>
~~~

Düğme öğesi aynı zamanda tarayıcıya hangi tür düğme ile uğraştığını söyleyen bir `type` niteliğini de kabul eder. Bize sunulan üç tür düğme bulunmaktadır.

**Submit buttons**

Kullanıcı bir formu doldurmayı bitirdiğinde, bunu göndermek için bir yol bulmaları gerekecektir. Bunun için özel bir düğme bulunmaktadır; gönderme düğmesi (submit button). Bir gönderme düğmesine tıklandığında, içinde bulunduğu formu gönderecektir. `type` niteliğinin varsayılan değeri submit'tir, yani `type` belirtilmemişse veya sağlanan değer geçersizse.

Bir gönderme düğmesi oluşturmak için, `type` niteliği "submit" olan button öğesini kullanırız:

~~~html
<button type="submit">Submit</button>
~~~

**Reset button**

Bir sıfırlama düğmesi (reset button), kullanıcının forma girdiği tüm verileri temizler ve formdaki tüm girişleri başlangıçtaki durumlarına geri getirir.

Bu düğmeyi oluşturmak için, `type` niteliği "reset" olan button öğesini kullanırız:

~~~html
<button type="reset">Reset</button>
~~~

**Generic button**

Üçüncü ve son düğme türü, sadece herhangi bir şey için kullanılabilen genel bir düğmedir. Genellikle etkileşimli kullanıcı arayüzleri oluşturmak için JS ile birlikte kullanılır.

Genel bir düğme oluşturmak için, `type` niteliği "button" olan button öğesini kullanırız:

~~~html
<button type="button">Click to Toggle</button>
~~~

<div class="lesson-note lesson-note--tip" markdown="1">
Unutulmaması önemli olan bir nokta, submit (gönder) değerine sahip olan (ki bu aynı zamanda varsayılan değerdir) bir form içindeki bir düğmenin her zaman yeni bir istek yapmaya ve veriyi sunucuya göndermeye çalışacağıdır. Bu nedenle, veriyi gönderme amacı dışında farklı amaçlar için bir form içinde kullanılan düğmeler için istenmeyen sonuçların önlenmesi için `type` niteliğinin her zaman belirtilmiş olması önemlidir.
</div>

### Form öğelerini düzenleme

Kullanıcıların girmesini istediğimiz veri için doğru girişleri kullanmak, formlarımızı kullanıcı dostu hale getirmenin önemli bir adımıdır. Ancak daha büyük formlarda, kullanıcılar birçok girişi doldurmak zorunda kalırlarsa kolayca bunalmış ve cesaretini kaybetmiş hissedebilirler.

Neyse ki, HTML bize formları görsel olarak farklı ve anlaşılır sekmelere ayırmayı kolaylaştıran birkaç öğe sağlar.

**Fieldset element**

`fieldset` öğesi, ilişkili form girişlerini tek bir mantıksal birimde gruplamamıza olanak tanıyan bir konteyner öğesidir.

Bir `fieldset` oluşturmak için, `<fieldset>` öğesini kullanırız. Bir araya gruplamak istediğimiz form girişleri, açılış ve kapanış `fieldset` etiketleri arasına yerleştirilir:

~~~html
<fieldset>
  <label for="first_name">First Name</label>
  <input type="text" id="first_name" name="first_name">

  <label for="last_name">Last Name</label>
  <input type="text" id="last_name" name="last_name">
</fieldset>
~~~

**Legend**

`legend` öğesi, alan setlerine başlık veya açıklama eklemek için kullanılır, böylece kullanıcı bir grup girişin ne için olduğunu görebilir.

Bir `legend` oluşturmak için, istediğimiz metni içeren `<legend>` öğesini kullanırız. Bir `legend` her zaman açılış `fieldset` etiketinden hemen sonra gelmelidir:

~~~html
<fieldset>
  <legend>Contact Details</legend>

  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="phone_number">Phone Number:</label>
  <input type="tel" id="phone_number" name="phone_number">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</fieldset>

<fieldset>
  <legend>Delivery Details</legend>

  <label for="street_address">Street Address:</label>
  <input type="text" id="street_address" name="street_address">

  <label for="city">City:</label>
  <input type="text" id="city" name="city">

  <label for="zip_code">Zip Code:</label>
  <input type="text" id="zip_code" name="zip_code">
</fieldset>
~~~

Bu öğelerin yaygın bir kullanım durumu, radio düğmelerini gruplamak için bir `fieldset` kullanmak ve her bir seçeneğin sonunda kullanıcıya bu seçeneğin aslında ne için olduğunu iletmek için bir `legend` kullanmaktır:

~~~html
<fieldset>
  <legend>What would you like to drink?</legend>

  <div>
    <input type="radio" name="drink" id="coffee" value="coffee">
    <label for="coffee">Coffee</label>
  </div>

  <div>
    <input type="radio" name="drink" id="tea" value="tea">
    <label for="tea">Tea</label>
  </div>

  <div>
    <input type="radio" name="drink" id="soda" value="soda">
    <label for="soda">Soda</label>
  </div>
</fieldset>
~~~

### Şekillendirme formları hakkında bir not

Sonraki bölümde gelen ödev bölümünde formları stilize etme konusuna derinlemesine girecek kaynaklar sağlayacağız. Ancak önce, HTML formlarını stilize etme konusundaki bazı zorluklar ve bu zorlukların üstesinden nasıl gelebileceğimiz hakkında konuşmalıyız:

**Varsayılan tarayıcı stilleri**

Her tarayıcının form kontrolleri için kendi varsayılan stilleri vardır, bu da kullanıcılarınızın hangi tarayıcıyı kullandığına bağlı olarak formlarınızın görsel olarak farklı olmasına neden olur.

Tüm tarayıcılarda tutarlı bir tasarıma sahip olabilmek için bu varsayılan stilleri geçersiz kılmalı ve kendimiz stil vermeliyiz.

**Form kontrollerini stilize etmek zor ve bazen imkansızdır**

Metin tabanlı form kontrolleri, metin, e-posta, şifre ve metin alanları gibi, oldukça açıktır. Diğer HTML öğeleri gibi çalışırlar ve çoğu CSS özelliği onlar üzerinde kullanılabilir.

Şeyler, özel stiller oluştururken radio düğmeleri ve onay kutuları için daha karmaşık hale gelir. Ancak istediğiniz tasarımı elde etmek için kullanabileceğiniz birçok [guides](https://moderncss.dev/pure-css-custom-checkbox-style) bulunmaktadır. Ayrıca, son zamanlarda radio düğmeleri ve onay kutuları için stil oluşturmayı çok daha kolay hale getiren [new CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color) de bulunmaktadır.

Diğer bazı öğelerin belirli yönleri stilize etmek neredeyse imkansızdır, örneğin takvim veya tarih seçicileri. Bu öğeler için özel stiller istiyorsak, özel form kontrolleri oluşturmak için JavaScript kullanmamız veya bize hazır çözümler sunan birçok JavaScript kütüphanesinden birini kullanmamız gerekecek.

### Ödev

<div class="lesson-content__panel" markdown="1">

#### Form temelleri

1. [MDN's Introductory Guides to Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms#introductory_guides) - [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form) ve [How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form#test_your_skills!) bölümlerini okuyun ve uygulayın.
2. [MDN's The Different Form Controls Guides](https://developer.mozilla.org/en-US/docs/Learn/Forms#the_different_form_controls) bölümünü okuyun ve uygulayın.

#### Formları stillendirme

1. [MDN's Form Styling Guides](https://developer.mozilla.org/en-US/docs/Learn/Forms#form_styling_guides) bölümünü okuyun ve uygulayın.
2. [the internetingishard guide to forms](https://internetingishard.netlify.app/html-and-css/forms/index.html)'ni okuyun ve uygulayın.

</div>

### Bilgi ölçme

- [Explain what the form element is for and what two attributes it should always include.](#the-form-element)
- [Explain what form controls are at a high level.](#form-controls)
- [What is the `name` attribute for?](#the-name-attribute)
- [What are the three most common form controls you can use for allowing users to select predefined options?](#selection-elements)
- [What are the three types of buttons in HTML?](#buttons)
- [What are the two most challenging aspects of styling forms?](#a-note-on-styling-forms)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Web.dev's Form Course](https://web.dev/learn/forms/)
