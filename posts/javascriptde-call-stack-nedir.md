## JavaScript'de Call Stack Nedir?

JavaScript'de **call stack**, yürütülen fonksiyonların sıralı bir biçimde yönetildiği, bir nevi 'çağrı defteri' görevi gören yapının adıdır. Bu yapı, fonksiyonların hangi sırayla ve ne zaman çağrıldığını, hangi fonksiyonların şu anda aktif olduğunu takip eder. JavaScript, tek iş parçacıklı bir programlama dili olduğu için, bir anda yalnızca bir işlem yürütülebilir. Bu tekil yürütme sürecini düzenlemek için call stack kullanılır.

### Call Stack'in Çalışma Prensibi

Call stack, adından da anlaşılacağı gibi bir yığın (stack) yapısıdır. Yığın yapısında, son giren eleman ilk çıkar (LIFO - Last In, First Out). JavaScript motoru, bu yığına fonksiyon çağrılarını ekler, her bir fonksiyon tamamlandığında ise yığından çıkarır.

#### Fonksiyon Çağrıları ve Stack Davranışı

1. **Fonksiyon Çağrısı:**

   - Herhangi bir fonksiyon çağrıldığında, JavaScript motoru, o fonksiyon için bir **stack frame** oluşturur. Bu frame, fonksiyonun kendisi, parametreleri ve lokal değişkenleri içerir. Bu frame call stack'in en üstüne yerleştirilir.
2. **Fonksiyon Yürütme:**

   - Call stack'in en üstündeki frame aktif olarak işlenir. Eğer bu frame içinde başka bir fonksiyon çağrılırsa, yeni bir frame daha oluşturulur ve bu yeni frame, yığının en üstüne eklenir. Bu süreç, çağrılan her yeni fonksiyon için tekrar eder.
3. **Fonksiyon Sonlanması:**

   - Bir fonksiyonun yürütülmesi tamamlandığında, ilgili stack frame call stack'den çıkarılır (pop operation). Kontrol, stack'deki bir önceki frame'e, yani çağrılan fonksiyonu çağıran fonksiyonun frame'ine geçer.

### Call Stack ile İlgili Örnek Senaryo

```javascript
function ilkFonksiyon() {
    ikinciFonksiyon();
    console.log("İlk fonksiyon tamamlandı.");
}

function ikinciFonksiyon() {
    ucuncuFonksiyon();
    console.log("İkinci fonksiyon tamamlandı.");
}

function ucuncuFonksiyon() {
    console.log("Üçüncü fonksiyon tamamlandı.");
}

ilkFonksiyon();
```


Bu kodda, `ilkFonksiyon` çağrılır ve call stack'e eklenir, ardından `ikinciFonksiyon` ve `ucuncuFonksiyon` sırasıyla çağrılır ve stack'e eklenir. `ucuncuFonksiyon` tamamlandığında stack'den çıkar, sonra `ikinciFonksiyon` ve son olarak `ilkFonksiyon` tamamlanır ve stack'den çıkarlar.

### Call Stack'in Önemi

Call stack, JavaScript uygulamalarında hata ayıklama yaparken son derece kritik bir rol oynar. Bir hata meydana geldiğinde, hata mesajı genellikle hatanın oluştuğu fonksiyon ile birlikte bir **call stack trace** içerir. Bu iz, hatanın kaynağını ve hangi fonksiyon çağrıları sonucunda meydana geldiğini gösterir, böylece hata daha hızlı çözülebilir.

Call stack, ayrıca asenkron kodun yönetilmesinde de önemli bir rol oynar. JavaScript'in **Event Loop** ve diğer asenkron mekanizmalarıyla birlikte, call stack'in doğru yönetimi, kodun beklenen sırada ve verimli bir şekilde çalışmasını sağlar.
