## JavaScript'de Primitive Types (İlkel Tipler)

JavaScript, verileri saklamak ve işlemek için çeşitli veri türlerine sahiptir. Bu veri türlerinden ilkel tipler (primitive types), JavaScript'in en temel veri yapı taşlarıdır. İlkel tipler, doğrudan değerleriyle işlem görürler ve bellekte sabit bir alan kaplarlar. JavaScript'teki ilkel tipler şunlardır: `Number`, `String`, `Boolean`, `undefined`, `null`, `Symbol` ve ECMAScript 2020 ile tanıtılan `BigInt`.

### Number

JavaScript'te `Number` tipi, tüm sayısal değerleri temsil eder. İnteger (tam sayılar) ve floating point (ondalıklı sayılar) dahil olmak üzere tüm sayıları kapsar.

```javascript
let sayi = 100;   // Integer
let ondalik = 10.5; // Floating point
```

### String

`String` tipi, metinsel verileri temsil eder. Tek tırnak (`' '`), çift tırnak (`" "`) veya backticks (``) içinde tanımlanabilir.

```javascript
let metin = 'Merhaba Dünya!';
let metin2 = "JavaScript öğreniyorum.";
let metin3 = `Bugün hava çok güzel.`;
```

### Boolean

`Boolean` tipi, mantıksal değerleri temsil eder ve sadece iki değere sahiptir: `true` (doğru) ve `false` (yanlış).

```javascript
let evet = true;
let hayir = false;
```

### undefined

Bir değişkenin değeri tanımlanmamışsa, JavaScript ona `undefined` tipini atar. Bu, genellikle bir değişkenin tanımlı olup olmadığını kontrol etmek için kullanılır.

```javascript
let belirsiz;
console.log(belirsiz); // undefined
```

### null

`null` tipi, bir değişkenin hiçbir değere sahip olmadığını belirtmek için kullanılır. `null` özel bir değerdir ve "boş" veya "var olmayan" bir değer anlamına gelir.

```javascript
let bos = null;
console.log(bos); // null
```

### Symbol

`Symbol`, her biri benzersiz ve değiştirilemez bir değere sahip olan bir veri tipidir. Nesne özellikleri için benzersiz anahtarlar oluşturmak için kullanılır.

```js
let anahtar1 = Symbol('id');
let anahtar2 = Symbol('id');
console.log(anahtar1 === anahtar2); // false
```


### BigInt

`BigInt` tipi, JavaScript'in `Number` tipi ile temsil edilemeyecek kadar büyük sayıları temsil etmek için kullanılır. `BigInt` sayıları oluşturmak için sayı sonuna `n` eklenir.

```js
let buyukSayi = 9007199254740991n;
let baskaBuyukSayi = BigInt(9007199254740991); // alternatif yöntem
```


### Sonuç

JavaScript'teki ilkel tipler, veri saklama ve işleme işlemlerinin temelini oluşturur. Her bir ilkel tip, belirli bir ihtiyacı karşılamak üzere tasarlanmıştır ve JavaScript kodlarında sıkça kullanılır.
